import { supabase } from "../Supabase/supabase"
import React, { useContext } from 'react'

const onSave = async(user,result) => {
    console.log("onSave")
    //console.log("user:",user.uid);
    //console.log("data:",data)
    try{
        const uid = user.uid

        const {value, error } = await supabase
        .from('saved')
        .insert([
        {user_Id:uid,code:result.code,brandName:result.brandName,name:result.name,image:result.image,ingredients:result.ingredients,nutrients:result.nutrients,score:result.score,Nutri:result.Nutri},
        ])
        .select()
        if(error){
            console.log(error)
            return data
        }
        else{
            console.log("saved!!!",value)
            return data
        }
    }catch(e){
        console.log("error:",e);
        return data
    }
}

export default onSave