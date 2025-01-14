// screens/LoginScreen.js
import React, { useState,useEffect,useContext } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {  Button, IconButton } from 'react-native-paper';
import useLogin from '../firebaseHooks/useLogin';
import {
  useNavigation,
} from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';
import Auth from '../firebasefile/Auth';

import StyledRadioButton from '../components/StyledRadioButton';
import StyledButton from '../components/StyledButton';
import Google from "../components/svgs/Google"
import CustomDialog from '../components/CustomDialog';
import StyledText from '../components/StyledText';



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [selected, setSelected] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const {login , loading , error} = useLogin();
  const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);

  const Navigation = useNavigation();
  useEffect(() => {
      if (Navigation) {
          const state = Navigation.getState();
          ////console.log("navigation state:", state.routes[0].name);
          const Index = state.index;
          const location = state.routes[Index].name;
          location==="Login" ? (setSize(0),setOpacity(0)) : (setSize(60),setOpacity(1));
          ////console.log(state.routes[Index].name)
        } else {
          //console.log("Navigation context is undefined");
        }
    }, [Navigation]);


  const handleChangePassword = (text)=>{
    setPassword(text);
}

  const handleLogin = async () => {
    if(email.length === 0 || password.length === 0){
      setDialogMessage("Please fill all inputs");
      setIsDialogVisible(true);
    }
    else if(emailRegex.test(email) === false){
        setDialogMessage("Invalid email");
        setIsDialogVisible(true);
    }
    else{
        try {
          const user = await login(email , password);
          if(user){
            navigation.navigate("Home");
          }
         
        } catch (error) {
          //console.log("Failed to login:",error);
          setDialogMessage(error.message.split("/")[1].split(")")[0]);
          setIsDialogVisible(true);
        }
  }

    };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#141414',
    },
    welcomeContainer:{
      justifyContent:"center",
      textAlign:"center",
      alignItems:"center",
    },
    inputContainer:{
      width:"90%",
      marginTop:100,
      gap:10,
    },
    input: {
      height: 80, // Adjust height as needed
      backgroundColor:"#252930",
      borderRadius: 22, // Change the border radius here
      paddingHorizontal: 10, // Inner padding for text
      color:"white"
    },
    radioButton: {
      width: 15,
      height: 15,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,  // You can adjust the borderRadius for sharp or rounded corners
    },
    selected: {
      backgroundColor: '#252930', // Color for the square when selected
    },
    innerCircle: {
      width: 15,
      height: 15,
      borderRadius: 3,
      backgroundColor: 'white',
    },
    bottom:{
      marginTop:80,
      flexDirection:"row",
      width:"70%",
      gap:5,
      alignItems:"center",
      justifyContent:"center"
    }
    
  });

  return (
    <View style={styles.container}>
      <CustomDialog message={dialogMessage} onClose={()=>setIsDialogVisible(false)} visible={isDialogVisible} />
      <View style={styles.welcomeContainer}>
        <Text style={{color:"#fff" , fontFamily:"Poppins" , fontWeight:400 , fontSize:24}}>Welcome Back!</Text>
        <Text style={{color:"#525252" , fontFamily:"Poppins" , fontWeight:400 , fontSize:11 }}>Please sign in to your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            placeholder='Email'
            value={email}
            placeholderTextColor={"#686868"}
            onChangeText={(text)=>setEmail(text)}
          />

        <TextInput 
          style={styles.input}
          placeholder='Password'
          secureTextEntry
          placeholderTextColor={"#686868"}
          value={password}
          onChangeText={(text)=>setPassword(text)}
        />

        {/*the part for email and password */}
        <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-around"}}>
          <View style={{flexDirection:"row", alignItems:"center" , gap:9}}>
            <StyledRadioButton selected={selected} onPress={()=>setSelected(!selected)}/>
            <Text style={{color:"#818181" , fontFamily:"Poppins" , fontSize:10, fontWeight:400}}>Stay Signed in?</Text>
          </View>

          <TouchableHighlight>
              <Text style={{fontSize:10 , fontFamily:"Poppins" , fontWeight:400 , color:"#818181"}}>Forgot Password?</Text>
          </TouchableHighlight>
        </View>
        {/*For button and Google */}

        <View style={{justifyContent:"center", gap:10, marginTop:30}}>
          <StyledButton onPress={handleLogin} isLoading={loading} title={"Sign in"}/>

          <TouchableHighlight
              style={{
              height: 80,
              width: 333,
              backgroundColor: "#ECECEC",
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center",
            }}
            underlayColor="#D6D6D6" // Optional: Adds a highlight effect on press
          >
            <View style={{flexDirection:"row", alignItems:"center", gap:2}}>
              <Google size={32}/>
              <Text style={{ textAlign: "center", fontSize: 14, color: "#141414", fontWeight: 600}}>
                Sign in with Google
              </Text>
            </View>
          </TouchableHighlight>
          <Text style={{marginLeft:1, color:"#818181", textDecorationLine:"underline", alignSelf:"center" ,fontWeight:700, fontSize:15}}>More</Text>
        </View>
        
      </View>

      <View style={styles.bottom}>
        <Text style={{color:"#818181" , fontSize:12 , fontFamily:"Poppins"}}>Don't have an account ?</Text>
        <TouchableOpacity style={{height:40, width:56,backgroundColor:'transparent' , alignItems:"center", marginTop:13}} onPress={()=>navigation.navigate("Signup")}>
          {/* <Text style={{color:"#818181" , fontSize:15 , fontFamily:"Poppins-Bold"}}> Sign up</Text> */}
          <StyledText text="Sign up            " style={{fontSize:15 , fontFamily:"Poppins-Bold"}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
