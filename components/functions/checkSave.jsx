
const checkSave = async(num) => {
     try{
        const { data, error } = await supabase
        .from('Saved')            // Specify the table you want to query (saved)
        .select('code')              // Select all columns from the saved table
        .eq('user_id',userId); // Filter by the user's unique uid (replace 'specific-uid' with the actual uid)
        if (error) {
            console.error('Error fetching saved data:', error);
        } else {
            console.log('Saved data for user:', data)
        //setCode(data);
        }
         
        for(const item of data){
            if(item.code === num){
                return true
            }
            else{
                return false
            }
        }


    }
    catch(e){
        console.log("saved check:",e)
    }
   
}

export default checkSave
