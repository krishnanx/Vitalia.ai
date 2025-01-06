import handlePull from "./handlePull"
import { supabase } from "../Supabase/supabase"

const history = async(user,result) => {
    
    const uid = user.uid
    const response = await handlePull(user,"History");
    console.log("response",response)
    console.log("code",result.barcode_info)
    for(const item of response){
        console.log("item:",item)
        if(result.barcode_info==item.code){
            console.log("NOT UNIQUE")
            return
        }
    }
    try{
        console.log("UNIQUE")
        const {value, error} = await supabase
        .from('History')
        .insert([
        {user_id:uid,code:result.barcode_info,brandName:result.Brand,name:result.Name,image:result.Image,ingredients:result.ingredients,nutrients:result.Nutrients,score:result.HealthScore },
        ])
        .select()
        if(error){
            console.log(error);
        }
        else{
            console.log(value)
        }
    }
    catch(e){
        console.log(e)
        return
    }
    return
}
export default history