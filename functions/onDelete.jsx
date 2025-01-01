import { supabase } from "../Supabase/supabase"
const onDelete = async(user,code,data) => {
    
    try{
        const uid = user.uid
        console.log("onDelete")

        const { error } = await supabase
        .from('Saved')
        .delete()
        .eq('user_id',uid)
        .eq("code",code);
        if(error){
            console.log("error deleting row",error)
            return data
        }
        console.log("deleted!!!!!")
        return data
    }
    catch(e){
        console.log("error deleting row",e)
        return data;
    }

}
export default onDelete