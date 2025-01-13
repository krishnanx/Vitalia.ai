import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebasefile/firebase"; // Import firebase auth

// Create an AuthContext
export const AuthContext = createContext();

// AuthProvider component that provides the context value
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(false); // New state to track if the user is new

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);

      // Check if the user is new based on creation and last sign-in time
      if (user && user.metadata.creationTime === user.metadata.lastSignInTime) {
        setNewUser(true);
      } else {
        setNewUser(false);
      }
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, newUser }}>
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
