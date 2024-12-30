import { useState } from 'react';
import { auth } from '../firebasefile/firebase'; // Import your Firebase auth instance
import { signInWithEmailAndPassword } from "firebase/auth";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      console.log('User logged in successfully', user);

      return user;

    } catch (err) {
      setError(err.message); // Handle any errors
      console.log('Error logging in:', err.message);

    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, user };
};

export default useLogin;
