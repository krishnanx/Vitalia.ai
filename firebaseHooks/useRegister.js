import { useState } from "react";
import { app ,auth, firestore } from "../firebasefile/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


const useRegister = () => {
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    const [user, setUser] = useState(null);

    const register = async (email , password , userDetails) => {
        try {
            setLoading(true);
            if (!email || !password || !userDetails) {
                throw new Error("All fields are required.");
              }
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;
            if(!user){
                throw new Error("server error: failed to create user")
            }

            const userDocRef = doc(firestore, "users", user.uid); // Reference to Firestore document
                await setDoc(userDocRef, {
                    email: user.email,
                    ...userDetails,
                    createdAt: serverTimestamp(),
                });
            setUser(user);
            console.log("User created sucessfully")
            return user;
        } catch (error) {
            console.log("ERROR IN USEREGISTER HOOK: "+error.message);
            setError(error.message);
            
        }finally{
            setLoading(false);
        }
    }

    return {register , loading , error , user}
}

export default useRegister;