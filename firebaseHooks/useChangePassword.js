import { useState } from 'react';
import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth';

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const changePassword = async (currentPassword, newPassword) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        throw new Error('No user is currently signed in.');
      }

      // Reauthenticate the user
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Update the password
      await updatePassword(user, newPassword);
      setSuccess(true);

      return {success: true}
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    changePassword,
  };
};