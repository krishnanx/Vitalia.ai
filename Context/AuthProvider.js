import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebasefile/firebase"; // Import firebase auth

// Create an AuthContext
const AuthContext = createContext();

// AuthProvider component that provides the context value
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe; // Cleanup listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
