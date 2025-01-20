import { supabase } from "../Supabase/supabase";
const addSupaDetails = async(user,details) => {
  console.log("\nAddSupa\n",details)
    // console.log("hi bye hi bye")
    try{
        if (user) {
            console.log("add supa details")
            console.log("details:",details)
            // If the user is logged in, get their UID
            ////console.log("user",user)
            const userId = user.uid;
            const email = user.email;
            // console.log("User ID:", userId);
            // console.log("email:",email);
            try {
              const { data: Users, E } = await supabase
              .from('Users')
              .select('user_Id')
              for(const item of Users){
                if(item.user_Id===userId){
                  //setUnique(false);
                  //console.log("Its not unique")
                  return
                }
              }
              
              //console.log("Its Unique")
              const { Value, error } = await supabase
                .from('Users')
                .insert([{user_Id: userId, Gmail: email,Fname:details.fname,Lname: details.lname,age:details.age,height:details.height,weight:details.weight,
                          activity:details.activity,diet:details.diet,lifestyle:details.lifestyle,disease:details.disease,image:details.img,
                          sugar:details.sugar,bp:details.bp,cholestrol:details.cholesterol,heartrate:details.heartrate,bmi:details.bmi}])
                .select();
          
              if (error) {
                // Handle the error (e.g., log it or show a message to the user)
                console.log("error",error)
                return
              } else {
                // Handle the data (e.g., show success message or process the inserted data)
                //console.log('Data inserted successfully:',Value);
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
          //console.log("No user is signed in");
          return 
          }
    }catch(e){
        console.log(e)
        return
    }

}

export default addSupaDetails