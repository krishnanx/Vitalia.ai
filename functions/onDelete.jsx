import { supabase } from "../Supabase/supabase"
const onDelete = async(user,code,result) => {
    
    try{
        const uid = user.uid
        console.log("onDelete")

        const { error } = await supabase
        .from('saved')
        .delete()
        .eq('user_Id',uid)
        .eq("code",code);
        if(error){
            console.log("error deleting row",error)
            return result
        }
        console.log("deleted!!!!!")
        return result
    }
    catch(e){
        console.log("error deleting row",e)
        return result;
    }

}
export default onDelete