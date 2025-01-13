import { useState } from "react";
import { auth } from "../firebasefile/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const register = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            if (!email || !password) {
                throw new Error("All fields are required.");
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (!user) {
                throw new Error("Server error: failed to create user");
            }
            setUser(user);
            console.log("User created successfully");
            return user;
        } catch (error) {
            setError(error.message);
            throw error; // Ensure the error is thrown
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error, user };
};

export default useRegister;