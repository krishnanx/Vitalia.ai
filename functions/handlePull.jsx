import { supabase } from "../Supabase/supabase"

const handlePull = async(user,table) => {
    try{
        console.log("handlePull")
        const uid = user.uid
        const {data,error} = await supabase
        .from(table)
        .select('*')
        .eq('user_Id',uid)
        if(error){
            console.log("error fetching data",error)
            return;
        }
        else{
            //console.log("pulled data:",data);
            return data;
        }
    }
    catch(e){
        console.log("error fetching",e)
        return;
    }
}
export default handlePull