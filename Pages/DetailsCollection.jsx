import { View, Text , StyleSheet, Imag } from 'react-native'
import React,{useState} from 'react'
import { TextInput , Button, IconButton, Menu, Avatar, SegmentedButtons } from 'react-native-paper';
import Auth from '../firebasefile/Auth';

const DetailsCollection = ({route,navigation}) => {
    //const {email , password} = route.params;
    const [userDetails , setUserDetails] = useState({
        gender: "",
        age: "",
        height: "",
        weight: "",
        fname:"",
        lname:"",
        activity:"",
        img:"",
        diet:"",
        lifestyle:"",
        disease:""
    });

    const [visible2, setVisible2] = useState(false);
    const [selectedActivityText , setSelectedActivityText] = useState('Acitvity Level');

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
        if(!userDetails.fname || !userDetails.lname || !userDetails.gender || !userDetails.height || !userDetails.weight || !userDetails.activity || !userDetails.age){
            alert("Please fill the required fields")
            return;
        }

        if(!isNumber(userDetails.height) || !isNumber(userDetails.weight) || !isNumber(userDetails.age)) {
          alert("Some inputs are invalid");
          return
        }
        navigation.navigate('AddHealthInfo' , {userDetails});

    }
  return (
    <View style={styles.container}>

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
          <View style={{width:"100%" }}>
            <Text style={{color:"white" , marginLeft:10}}>Enter Name</Text>
            <View style={{width:"100%" , flexDirection:"row" , justifyContent:"space-around"}}>
              <TextInput style={{width:"40%" , backgroundColor:"black"}}
                label={"First Name"}
                mode="outlined"
                textColor='white'
                value={userDetails.fname}
                onChangeText={(text)=>{
                  setUserDetails({...userDetails , fname:text})
                }}
                />
              <TextInput style={{width:"50%" , backgroundColor:"black"}}
                label={"Last Name"}
                mode="outlined"
                textColor='white'
                value={userDetails.lname}
                onChangeText={(text)=>setUserDetails({...userDetails , lname:text})}
              />
            </View>
          </View>

          <View style={{width:"95%"}}>
            <Text style={{color:"white"}}>Select Gender</Text>
            <SegmentedButtons
              value={userDetails.gender}
              onValueChange={handleGenderChange}
              buttons={[
                {
                  value: 'male',
                  label: 'Male',
                  labelStyle: { color: userDetails.gender=="male"?"#007bff":'#8f8f8f' },
                  style: {borderRadius:3 }
                },
                {
                  value: 'female',
                  label: 'Female',
                  labelStyle: { color: userDetails.gender=="female"?"#007bff":'#8f8f8f' },
                },
                { value: 'others',
                  label: 'Others' ,
                  labelStyle: { color: userDetails.gender=="others"?"#007bff":'#8f8f8f' },
                  style: {borderRadius:3}
                },
              ]}
            />
          </View>

          <View style={{width:"99%" , flexDirection:"row" , justifyContent:"space-around"}}>
            <TextInput style={{width:"45%" , backgroundColor:"black"}}
              label={"Height (cm)"}
              mode="outlined"
              textColor='white'
              value={userDetails.height}
              onChangeText={(text)=>setUserDetails({...userDetails , height:text})} //onChangeText={(text) => setUserDetails({ ...userDetails, height: text })}
              />
            <TextInput style={{width:"45%" , backgroundColor:"black"}}
              label={"Weight (KG)"}
              mode="outlined"
              textColor='white'
              onChangeText={(text)=>setUserDetails({...userDetails , weight:text})}
              />
          </View>

          <View style={{width:"99%" , flexDirection:"row" , justifyContent:"space-around"}}>
            <TextInput style={{width:"40%" , backgroundColor:"black"}}
              label={"Age"}
              mode="outlined"
              textColor='white'
              right={<TextInput.Icon icon="calendar"/>}
              onChangeText={(text)=>setUserDetails({...userDetails , age: text})}
              />
            <View style={{width:"49%"}}>
              <Text style={{color:"white"}}>Set Activity level</Text>
            <Menu
              visible={visible2}
              onDismiss={()=>setVisible2(false)}
                anchor={
                  <Button mode="outlined" style={{borderRadius:5}} onPress={()=>setVisible2(true)}  >
                    {selectedActivityText}
                  </Button>
                }
            >
                  <Menu.Item onPress={() =>{
                    setUserDetails({...userDetails , activity:"Sedentary"})
                    setSelectedActivityText("Sedentary")
                    setVisible2(false)
                    }} title="Sendentary" />
                    
                    <Menu.Item onPress={() =>{
                    setSelectedActivityText("Somewhat Active")
                    setUserDetails({...userDetails , activity: "Somewhat Active"})
                    setVisible2(false)
                    }} title="Somewhat Active" />

                  <Menu.Item onPress={() =>{
                    setSelectedActivityText("Active")
                    setUserDetails({...userDetails , activity: "Active"})
                    setVisible2(false)
                    }} title="Active" />

                  <Menu.Item onPress={() =>{
                    setSelectedActivityText("Insanely Active")
                    setUserDetails({...userDetails , activity: "Insanely Active"})
                    setVisible2(false)
                    }} title="Insanely Active" />
                </Menu>
                </View>

          </View>
          <View style={{width:"94%" , marginTop:20}}>
            <Button style={{width:"30%" , borderRadius:5 , alignSelf:"flex-end"}} onPress={handleSubmit} mode='contained'>Next</Button>
          </View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: "space-around",
    },  
    subContainerBottom:{
        width:'100%',
        alignItems:'center',
        height:"50%",
        gap: 10,
        marginBottom: 50,
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

})

export default DetailsCollection