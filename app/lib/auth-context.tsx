"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase"; // Make sure this is your initialized client
import { User, Session } from "@supabase/supabase-js";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function getInitialSession() {
      // 1. Get the initial session immediately
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Only update state if component is still mounted
      if (mounted) {
        if (session) {
          setSession(session);
          setUser(session.user);
        }
        setLoading(false);
      }
    }

    getInitialSession();

    // 2. Listen for ANY auth changes (sign in, sign out, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Helper to logout easily anywhere
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    // Optional: Redirect to login here
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
