import { supabase } from "../../Supabase/supabase"
import React, { useContext } from 'react'

const onSave = async(user,data) => {
    console.log("user:",user.uid);
    console.log("data:",data)
    try{
    const uid = user.uid

    const {value, error } = await supabase
    .from('Saved')
    .insert([
    {user_id:uid,code:data.barcode_info,brandName:data.Brand,name:data.Name,image:data.Image,ingredients:data.ingredients,nutrients:data.Nutrients },
    ])
    .select()
    if(error){
        console.log(error)
        return
    }
    else{
        console.log("saved!!!",value)
        return
    }
    }catch(e){
        console.log("error:",e);
        return
    }
}

export default onSave