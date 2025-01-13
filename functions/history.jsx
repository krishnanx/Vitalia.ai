import handlePull from "./handlePull"
import { supabase } from "../Supabase/supabase"

const history = async(user,result) => {
    
    const uid = user.uid
    const response = await handlePull(user,"History");
    console.log("response",response)
    console.log("code",result.code)
    for(const item of response){
        console.log("item:",item)
        if(result.code==item.code){
            console.log("NOT UNIQUE")
            return
        }
    }
    try{
        console.log("UNIQUE")
        const {value, error} = await supabase
        .from('History')
        .insert([
        {user_id:uid,code:result.code,brandName:result.brandName,name:result.name,image:result.image,ingredients:result.ingredients,nutrients:result.nutrients,score:result.score,Nutri:result.Nutri},
        ])
        .select()
        
    }
    catch(e){
        console.log(e)
        return
    }
    return
}
export default history