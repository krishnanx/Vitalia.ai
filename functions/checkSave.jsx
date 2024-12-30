import { supabase } from "../Supabase/supabase";
const checkSave = async(num,user) => {
    
    try{
        const uid = user.uid
        console.log("check Save")
        const { data, error } = await supabase
        .from('Saved')            // Specify the table you want to query (saved)
        .select('code')              // Select all columns from the saved table
        .eq('user_id',uid); // Filter by the user's unique uid (replace 'specific-uid' with the actual uid)
        if (error) {
            console.error('Error fetching saved data:', error);
        } else {
            //console.log('Saved data for user:', data)
        //setCode(data);
        }
        if(data.length>0){
            //console.log("hi")

            for(const item of data){
                //console.log(item)
                if(item.code == num){
                    //console.log("truee??")
                    return true
                }
            }
            //console.log("false??")
            return false
        }else{
            //console.log("bye")
            return false
        }
      


    }
    catch(e){
        //console.log("saved check:",e)

    }
   
}

export default checkSave
