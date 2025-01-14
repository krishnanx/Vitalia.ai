import { View, Text , StyleSheet, TextInput, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Button, IconButton, Menu, Avatar, SegmentedButtons } from 'react-native-paper';
import Auth from '../firebasefile/Auth';
import StyledRadioButton from '../components/StyledRadioButton';
import StyledButton from '../components/StyledButton';
import CustomDialog from '../components/CustomDialog';

const DetailsCollection = ({route,navigation}) => {
    //const {email , password} = route.params;
    const {fname , sname} = route.params ||{};
    //console.log(fname , sname)

    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [userDetails , setUserDetails] = useState({
      gender: "",
      age: "",
      height: "",
      weight: "",
      fname: fname||"",
      lname: sname||"",
      activity: "",
      img: "",
      diet: "",
      lifestyle: "",
      disease: []
    });


    //for avatar
    const [imageError, setImageError] = useState(false);

    const handleGenderChange = (value) => {
      setUserDetails((prevState) => ({
        ...prevState,
        gender: value,
        img:`https://avatar.iran.liara.run/public/${userDetails.gender === "male"?"boy":"girl"}`
      }));
    };

    function isNumber(value) {
      return !isNaN(value) && value.trim() !== ''; // Ensures no empty string or whitespace
    }


    const handleSubmit = () => {
      console.log(userDetails)
        if( !userDetails.gender || !userDetails.height || !userDetails.weight || !userDetails.activity || !userDetails.age){
            setDialogMessage("Please Input all field");
            setIsDialogVisible(true);
            return;
        }

        if(!isNumber(userDetails.height) || !isNumber(userDetails.weight) || !isNumber(userDetails.age)) {
          setDialogMessage("Some Inputs are invalid");
          setIsDialogVisible(true)
          return
        }
        console.log(userDetails);
        navigation.navigate('AddHealthInfo' , {userDetails});

    }
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center',justifyContent: "space-around"}}>
      <CustomDialog message={dialogMessage} onClose={()=>setIsDialogVisible(false)} visible={isDialogVisible} />
        <View style={{width:'100%', alignItems:'center'}}>
            <Text style={styles.title}>Before we Start!!</Text>
            <Text style={{fontSize:15 , color:"white"}}>Complete your profile</Text>
        </View>
        
        <View id='top container' style={styles.iconContainer}>
            {imageError ? (
            <IconButton
              icon="account-circle-outline" // Fallback icon
              iconColor="#007bff"
              size={100}
              mode="contained"
            />
            ) : (
            <Avatar.Image
              size={100}
              source={
                {uri: `https://avatar.iran.liara.run/public/${userDetails.gender === "male"?"boy":"girl"}`}
              } // Path to your avatar image
              onError={() => setImageError(true)} // Trigger fallback on error
            />
          )}
        </View>
        <View style={styles.subContainerBottom}>

          <View style={{width:"95%"}}>
            <Text style={{color:"white"}}>Select Gender</Text>
            <View style={{ gap:10,marginTop:5}}>
              <StyledRadioButton text="Male" selected={userDetails.gender=="male"} onPress={() => handleGenderChange("male")}/>

              <StyledRadioButton text='Female' onPress={()=>{handleGenderChange("female")}} selected={userDetails.gender=="female"}/>
            </View>
            
          </View>

          <View style={{width:"99%" , gap:5}}>
            <TextInput style={styles.input}
              placeholder='Height (cm)'
              placeholderTextColor={"#686868"}
              value={userDetails.height}
              onChangeText={(text)=>setUserDetails({...userDetails , height:text})} //onChangeText={(text) => setUserDetails({ ...userDetails, height: text })}
              />
            <TextInput style={styles.input}
              placeholder='Weight (KG)'
              placeholderTextColor={"#686868"}
              onChangeText={(text)=>setUserDetails({...userDetails , weight:text})}
              />
            <TextInput style={styles.input}
              placeholder='Age'
              placeholderTextColor={"#686868"}
              onChangeText={(text)=>setUserDetails({...userDetails , age: text})}
              />
          </View>

          <View style={{width:"99%" , flexDirection:"row" , justifyContent:"space-around"}}>
            
            <View style={{width:"99%"}}>
              <Text style={{color:"white" , marginBottom:5}}>Set Activity level</Text>
              <View style={{gap:10}}>
              <StyledRadioButton text='Sendentary' onPress={()=>setUserDetails({...userDetails , activity:"sendentary"})} selected={userDetails.activity=="sendentary"}/>
              <StyledRadioButton text='Somewhat Active' onPress={()=>setUserDetails({...userDetails , activity:"somewhat active"})} selected={userDetails.activity=="somewhat active"}/>
              <StyledRadioButton text='Active' onPress={()=>setUserDetails({...userDetails , activity:"active"})} selected={userDetails.activity=="active"}/>
              <StyledRadioButton text='Insanely Active' onPress={()=>setUserDetails({...userDetails , activity:"insanely active"})} selected={userDetails.activity=="insanely active"}/>
              </View>
            </View>

          </View>
          <View style={{width:"94%" , alignItems:"flex-end", marginTop:20}}>
            <StyledButton title={"Next"} width={100} height={40} onPress={handleSubmit} />
          </View>

        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
    },  
    subContainerBottom:{
        width:'100%',
        alignItems:'center',
        height:"50%",
        gap: 10,
        marginBottom: 60,
    },
    iconContainer:{
        width: '100%',
        justifyContent:"center",
        alignItems:"center",
        marginRight: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        color:"white"
    },
    input: {
      height: 60, // Adjust height as needed
      backgroundColor:"#252930",
      borderRadius: 22, // Change the border radius here
      paddingHorizontal: 10, // Inner padding for text
      color:"white"
    },

})

export default DetailsCollection