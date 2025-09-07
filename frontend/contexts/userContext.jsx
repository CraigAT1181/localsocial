import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function getSession() {
    try {
      setUser(null);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    getSession();
    console.log("User:", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, authChecked }}>
      {children}
    </UserContext.Provider>
  );
}
