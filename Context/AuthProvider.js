import React, { createContext, useContext, useState, useEffect,useReducer } from "react";
import { auth } from "../firebasefile/firebase"; // Import firebase auth
import {SignInReducer} from "../reducers/authReducers"
// Create an AuthContext
export const AuthContext = createContext();

// AuthProvider component that provides the context value
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(false); // Flag to track if the user is newly created
  const [userDetailsState, setUserDetailsState] = useState({
    fname: "",
    sname: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    activity: "",
    diet: "",
    lifestyle: "",
    disease: [],
  });
  const[signedIn,dispatchSignedIn] = useReducer(SignInReducer,{
    userToken:null,
  })

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
        resetUserDetails(); // Reset user details on sign-out
      }
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  // Function to update user details
  const updateUserDetails = (details) => {
    setUserDetailsState((prevDetails) => ({
      ...prevDetails, // Keep previous details
      ...details,     // Overwrite with new details
    }));
    //console.log("Updated details inside updateUserDetails:", userDetailsState); 
    setNewUser(true);
  };

  // Function to reset user details to defaults
  const resetUserDetails = () => {
    setUserDetailsState({
      fname: "",
      lname: "",
      gender: "",
      age: "",
      height: "",
      weight: "",
      activity: "",
      diet: "",
      lifestyle: "",
      disease: [],
    });
    setNewUser(false);
  };

  return (
    <AuthContext.Provider value={{ user,setUser,newUser,signedIn,dispatchSignedIn, userDetailsState , updateUserDetails, resetUserDetails}}>
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
