import { supabase } from "../Supabase/supabase"
const onDelete = async(user) => {
    const uid = user.uid
    try{
        const { error } = await supabase
        .from('Saved')
        .delete()
        .eq('user_id',uid)
        if(error){
            console.log("error deleting row",error)
            return
        }
        return
    }
    catch(e){
        console.log("error deleting row",e)
    }

}
export default onDelete