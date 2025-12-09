import { createClient } from "@supabase/supabase-js";

const supabseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabseUrl || !supabaseAnonKey) {
  throw new Error("Missing supabase environment variables.");
}

export const supabase = createClient(supabseUrl, supabaseAnonKey);
