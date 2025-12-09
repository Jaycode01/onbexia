"use client";

import { useAuth } from "@/app/lib/auth-context";
import { useRouter } from "next/navigation"; // or react-router-dom
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirect if not logged in
    }
  }, [user, loading, router]);

  if (loading) {
    // THIS is the key to persistence.
    // Show a spinner while Supabase checks LocalStorage.
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  // If not loading and we have a user, show the app
  return user ? <>{children}</> : null;
}
