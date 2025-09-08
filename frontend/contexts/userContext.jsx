import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    let alive = true;

    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!alive) return;
      setUser(session?.user ?? null);
      setAuthChecked(true);
      console.log("Current session:", session);
    })();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      alive = false;
      subscription.unsubscribe();
    };
  }, []);

  async function register(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    if (error) throw error;

    console.log("Registered (data):", data);
    return data;
  }

  async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) throw error;

    console.log("Signed in (data):", data);

    return data;
  }

  async function logout() {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      throw Error(error.message);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, authChecked, register, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
