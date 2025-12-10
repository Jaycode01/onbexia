"use client";

import React, { useState, useEffect } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import "./Dashboard.css";
import { useAuth } from "../lib/auth-context";
import ProtectedRoute from "../components/common/protected-route"; // Adjust path if needed

// --- Interfaces ---
interface Step {
  id: number; // Frontend ID (1, 2, 3...)
  title: string;
  content: string;
  target: string;
}

interface SavedTour {
  id: string; // UUID from DB
  name: string;
  created_at: string;
}

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const Dashboard: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [view, setView] = useState<"create" | "list" | "analytics">("create");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  // --- Tour State ---
  const [tourName, setTourName] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null); // Track if we are editing
  const [savedTours, setSavedTours] = useState<SavedTour[]>([]); // List of tours

  console.log(savedTours);

  // Initialize with 5 empty steps
  const initialSteps = [
    { id: 1, title: "", content: "", target: "" },
    { id: 2, title: "", content: "", target: "" },
    { id: 3, title: "", content: "", target: "" },
    { id: 4, title: "", content: "", target: "" },
    { id: 5, title: "", content: "", target: "" },
  ];
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [generatedScript, setGeneratedScript] = useState<string | null>(null);

  console.log(steps);

  // --- Effects ---
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  // Fetch tours whenever the "list" view is active
  useEffect(() => {
    if (view === "list" && user) {
      fetchTours();
    }
  }, [view, user]);

  // --- Actions ---

  const fetchTours = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("tours")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching tours:", error);
    else setSavedTours(data || []);
  };

  const handleAddStep = () => {
    const newId =
      steps.length > 0 ? Math.max(...steps.map((s) => s.id)) + 1 : 1;
    setSteps([...steps, { id: newId, title: "", content: "", target: "" }]);
  };

  const handleRemoveStep = (indexToRemove: number) => {
    if (steps.length <= 5) {
      alert("Per requirements, a tour must have at least 5 steps.");
      return;
    }
    const newSteps = steps.filter((_, index) => index !== indexToRemove);
    setSteps(newSteps);
  };

  const handleStepChange = (
    index: number,
    field: keyof Step,
    value: string
  ) => {
    const newSteps = [...steps];
    (newSteps[index] as any)[field] = value;
    setSteps(newSteps);
  };

  // Reset form to "Create Mode"
  const resetForm = () => {
    setTourName("");
    setSteps(initialSteps);
    setEditingId(null);
    setGeneratedScript(null);
    setView("create");
  };

  // --- EDIT Logic ---
  const handleEditTour = async (tourId: string) => {
    setLoading(true);
    try {
      // 1. Fetch Tour Details
      const { data: tourData, error: tourError } = await supabase
        .from("tours")
        .select("*")
        .eq("id", tourId)
        .single();

      if (tourError) throw tourError;

      // 2. Fetch Steps for this tour
      const { data: stepsData, error: stepsError } = await supabase
        .from("steps")
        .select("*")
        .eq("tour_id", tourId)
        .order("step_order", { ascending: true });

      if (stepsError) throw stepsError;

      // 3. Populate State
      setTourName(tourData.name);
      setEditingId(tourId);

      // Map DB steps back to Frontend steps interface
      const mappedSteps = stepsData.map((s: any, index: number) => ({
        id: index + 1, // specific frontend ID
        title: s.title,
        content: s.content,
        target: s.target_id,
      }));
      setSteps(mappedSteps);

      // 4. Switch View
      setView("create");
      setGeneratedScript(null);
    } catch (error) {
      console.error(error);
      alert("Could not load tour for editing.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTour = async (tourId: string) => {
    if (!confirm("Are you sure you want to delete this tour?")) return;
    const { error } = await supabase.from("tours").delete().eq("id", tourId);
    if (error) alert("Error deleting tour");
    else fetchTours(); // Refresh list
  };

  const handleShowScript = (tourId: string) => {
    const code = `<script src="https://hng-onbexia-widget.vercel.app/widget.js" data-tour-id="${tourId}"></script>`;
    // Simple prompt to allow copying
    prompt("Copy this code to your website:", code);
  };

  // --- SAVE / UPDATE Logic ---
  const handleSaveTour = async () => {
    if (!tourName.trim()) return alert("Please name your tour.");
    if (steps.length < 5) return alert("Minimum 5 steps required.");

    setLoading(true);

    try {
      const user = session?.user;
      if (!user) throw new Error("User not logged in");

      let currentTourId = editingId;

      if (editingId) {
        // --- UPDATE MODE ---
        // 1. Update Tour Name
        const { error: updateError } = await supabase
          .from("tours")
          .update({ name: tourName })
          .eq("id", editingId);
        if (updateError) throw updateError;

        // 2. Delete OLD steps (easiest way to handle reordering/edits)
        const { error: deleteError } = await supabase
          .from("steps")
          .delete()
          .eq("tour_id", editingId);
        if (deleteError) throw deleteError;
      } else {
        // --- CREATE MODE ---
        const { data: tourData, error: tourError } = await supabase
          .from("tours")
          .insert([{ name: tourName, user_id: user.id }])
          .select()
          .single();

        if (tourError) throw tourError;
        currentTourId = tourData.id;
      }

      if (!currentTourId) throw new Error("Tour ID missing");

      // 3. Insert Steps (New or Re-inserted)
      const formattedSteps = steps.map((step, index) => ({
        tour_id: currentTourId,
        title: step.title,
        content: step.content,
        target_id: step.target,
        step_order: index + 1,
      }));

      const { error: stepError } = await supabase
        .from("steps")
        .insert(formattedSteps);

      if (stepError) throw stepError;

      // 4. Success
      const scriptCode = `<script src="https://your-widget-url.vercel.app/widget.js" data-tour-id="${currentTourId}"></script>`;
      setGeneratedScript(scriptCode);

      if (editingId) alert("Tour Updated Successfully!");
      else alert("Tour Created Successfully!");

      // If we just updated, maybe we want to go back to list?
      // For now let's leave them on the screen to see the code.
    } catch (error: any) {
      console.error(error);
      alert("Error saving: " + (error.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  if (!user) return <div className="login-prompt">Please Log In</div>;

  return (
    <ProtectedRoute>
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo">TourBuilder</div>
          <nav>
            <button
              onClick={resetForm}
              className={view === "create" ? "active" : ""}
            >
              + New Tour
            </button>
            <button
              onClick={() => setView("list")}
              className={view === "list" ? "active" : ""}
            >
              My Tours
            </button>
            <button
              onClick={() => setView("analytics")}
              className={view === "analytics" ? "active" : ""}
            >
              Analytics
            </button>
          </nav>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="content">
          <header>
            <h1>
              {view === "create"
                ? editingId
                  ? "Edit Tour"
                  : "Create New Tour"
                : view === "analytics"
                ? "Analytics"
                : "My Tours"}
            </h1>
            <div className="user-info">Logged in as {user.email}</div>
          </header>

          {/* CREATE / EDIT VIEW */}
          {view === "create" && (
            <div className="tour-creator">
              <div className="form-group">
                <label>Tour Name</label>
                <input
                  type="text"
                  placeholder="e.g. Homepage Onboarding"
                  value={tourName}
                  onChange={(e) => setTourName(e.target.value)}
                />
              </div>

              <div className="steps-container">
                <h3 style={{ marginBottom: "10px" }}>Define Steps (Min 5)</h3>
                <p className="hint">
                  Target ID should be the CSS ID of the element (e.g.,
                  #submit-btn)
                </p>

                {steps.map((step, index) => (
                  <div key={step.id} className="step-card">
                    <div className="step-header">
                      <span className="step-number">Step {index + 1}</span>
                      <button
                        className="delete-btn"
                        onClick={() => handleRemoveStep(index)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="step-grid">
                      <input
                        placeholder="Title (e.g. Welcome!)"
                        value={step.title}
                        onChange={(e) =>
                          handleStepChange(index, "title", e.target.value)
                        }
                      />
                      <input
                        placeholder="Target Element ID (e.g. #header)"
                        value={step.target}
                        onChange={(e) =>
                          handleStepChange(index, "target", e.target.value)
                        }
                      />
                      <textarea
                        placeholder="Description text..."
                        value={step.content}
                        onChange={(e) =>
                          handleStepChange(index, "content", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}

                <button className="add-step-btn" onClick={handleAddStep}>
                  + Add Step
                </button>
              </div>

              <div className="actions">
                <button
                  className="save-btn"
                  onClick={handleSaveTour}
                  disabled={loading}
                >
                  {loading
                    ? "Saving..."
                    : editingId
                    ? "Update Tour"
                    : "Save & Generate Script"}
                </button>
              </div>

              {generatedScript && (
                <div className="script-output">
                  <h3>Installation Code</h3>
                  <p>
                    Copy and paste this into the &lt;head&gt; of your website:
                  </p>
                  <textarea readOnly value={generatedScript} />
                </div>
              )}
            </div>
          )}

          {/* ANALYTICS VIEW */}
          {view === "analytics" && (
            <div className="analytics-view">
              <div className="stat-card">
                <h3>Total Tours Viewed</h3>
                <p className="stat-number">1,245</p>
              </div>
              <div className="stat-card">
                <h3>Completion Rate</h3>
                <p className="stat-number">68%</p>
              </div>
            </div>
          )}

          {/* LIST VIEW (MY TOURS) */}
          {view === "list" && (
            <div className="list-view">
              {savedTours.length === 0 ? (
                <p className="empty-state">No tours found. Create one!</p>
              ) : (
                <div className="tours-grid">
                  {savedTours.map((tour) => (
                    <div key={tour.id} className="tour-card-item">
                      <div className="tour-info">
                        <h3>{tour.name}</h3>
                        <span className="tour-date">
                          {new Date(tour.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="tour-actions">
                        <button
                          className="action-btn code-btn"
                          onClick={() => handleShowScript(tour.id)}
                        >
                          Get Code
                        </button>
                        <button
                          className="action-btn edit-btn"
                          onClick={() => handleEditTour(tour.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="action-btn delete-btn-outline"
                          onClick={() => handleDeleteTour(tour.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
