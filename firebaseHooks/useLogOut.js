import { useState } from 'react';
import { auth } from '../firebasefile/firebase'; // Import your Firebase auth instance
import { signOut } from "firebase/auth";
import { deleteDeviceCookie } from '../Cookies/Cookie';
const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth); // Firebase signOut method
      await deleteDeviceCookie()
      //console.log('User logged out successfully');
    } catch (error) {
      setError(error.message); // Handle any errors
      //console.log('Error logging out:', err.message);
      throw error
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
};

export default useLogOut;
