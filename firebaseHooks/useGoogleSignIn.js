import React, { useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import { useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";
import { auth } from "../firebasefile/firebase"; // Adjust this import based on your project structure
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

const useGoogleSignIn = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Configure the Google provider
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "<YOUR_GOOGLE_CLIENT_ID>",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);

      setLoading(true);
      signInWithCredential(auth, credential)
        .then((result) => {
          setUser(result.user); // Firebase user object
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [response]);

  const signInWithGoogle = async () => {
    try {
      await promptAsync();
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    user,
    loading,
    error,
    signInWithGoogle,
  };
};

export default useGoogleSignIn;
