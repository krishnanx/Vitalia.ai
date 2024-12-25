import react, { useState } from "react";
import { auth } from "./firebase";
import { supabase } from "../Supabase/supabase";
const Auth = async() => {
  
    const user = auth.currentUser;
    //console.log("Bye:",user);
    if (user) {
      // If the user is logged in, get their UID
      //console.log("user",user)
      const userId = user.uid;
      const email = user.email;
      console.log("User ID:", userId);
      console.log("email:",email);

      try {
        const { data: Users, E } = await supabase
        .from('Users')
        .select('userId')
        console.log("Dattttaa:",Users)
        for(const item of Users){
          if(item.userId===userId){
            //setUnique(false);
            console.log("Its not unique")
            return
          }
        }
        
        console.log("Its Unique")
        const { Value, error } = await supabase
          .from('Users')
          .insert([{ userId: userId, Gmail: email }])
          .select();
    
        if (error) {
          // Handle the error (e.g., log it or show a message to the user)
          console.log("error",error)
          return
        } else {
          // Handle the data (e.g., show success message or process the inserted data)
          console.log('Data inserted successfully:',Value);
          return
        }
        
        /**/
      } catch (err) {
        // Handle unexpected errors (e.g., network issues, server errors)
        console.error('Unexpected error:', err.message);
        return
      }

      

      
    } else {
    // No user is signed in
    console.log("No user is signed in");
    return 
    }

}

export default Auth