"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/auth-context";
import "../login/style.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;

      if (data.user) {
        if (data.user.identities && data.user.identities.length === 0) {
          setErrorMsg("This email is already in use. Try logging in.");
        } else if (!data.session) {
          setSuccessMsg(
            "Signup successful! Please check your email to confirm your account."
          );
        } else {
          router.refresh();
          router.push("/dashboard");
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("signup error", error);
        setErrorMsg(error.message || "An error occurred during signup");
      } else {
        console.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  if (user) return null;

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Create Account</h1>
          <p>Start building your tours today</p>
        </div>

        {successMsg && (
          <div
            className="error-message"
            style={{
              backgroundColor: "#ecfdf5",
              color: "#047857",
              borderColor: "#a7f3d0",
            }}
          >
            {successMsg}
          </div>
        )}

        {errorMsg && <div className="error-message">{errorMsg}</div>}

        {!successMsg && (
          <form onSubmit={handleSignUp} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
        )}

        <div className="login-footer">
          Already have an account? <Link href="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
