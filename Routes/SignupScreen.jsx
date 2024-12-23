import { View, Text, StyleSheet } from 'react-native'
import React ,{useState,useEffect,useContext} from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput , Button, IconButton, HelperText } from 'react-native-paper';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebasefile/firebase';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

const SignupScreen = ({navigation}) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [passwordVisible , setPasswordVisible] = useState(false);
    const [helperText , setHelperText] = useState({value:"" , color:""});
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const [state,setState,Location,setLocation,size,setSize] = useContext(bgContext);
    const Navigation = useNavigation();
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            //console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            state.routes[Index].name==="Signup" ? (setLocation(0),setSize(0)) : (setLocation(1),setSize(60));
          } else {
            console.log("Navigation context is undefined");
          }
    }, [Navigation]);
    const handleChangePassword = (text)=>{
        setPassword(text);
        if(text.length<6){
            setHelperText({value:"Password must be atleast 6 characters" , color:"red"});
        }
        if(text.length>6){
            setHelperText({value:"" , color:"red"});
        }
    }

    const handleSignup = ()=>{
        if(email.length === 0 || password.length === 0){
            setHelperText({value:"Please fill all fields" , color:"red"});
        }
        else if(password.length<6){
            setHelperText({value:"Password must be atleast 6 characters" , color:"red"});
        }
        else if(emailRegex.test(email) === false){
            setHelperText({value:"Invalid email" , color:"red"});
        }
        else if(checkIfEmailRegistered(email)){
          setHelperText({value:"Account with this email already exists" , color:"red"});
        }
        else{
            console.log("Email: " , email , "Password: " , password);
            navigation.navigate("Details", {email , password});
    }
}

const checkIfEmailRegistered = async (email) => {

  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);

    if (signInMethods.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking email registration:", error.message);
    throw error;
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.card}>
        <View id='top container' style={{width:"100%" ,  marginLeft:30 , marginBottom:30}}>
            <IconButton 
                icon="arrow-left"
                iconColor={"#007bff"}
                size={30}
                mode='contained'
                onPress={() => navigation.navigate("Welcome")}
                />
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
              label={"Email"}
              value={email}
              mode="outlined"
              left={<TextInput.Icon name="email" icon={"email"}/>}
              onChangeText={setEmail}
              theme={{
                colors: {
                  primary: '#007bff', // Change the focused outline color
                },
              }}
            />
            <TextInput
              style={styles.input}
              label="Password"
              value={password}  
              onChangeText={handleChangePassword}
              mode='outlined'
              secureTextEntry = {!passwordVisible}
              left = {<TextInput.Icon icon="lock" />}
              right= {<TextInput.Icon 
                icon={passwordVisible ? "eye-off" : "eye"} // Icon changes dynamically
                onPress={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
              />}
              theme={{
                colors: {
                  primary: '#007bff', // Change the focused outline color
                },
              }}
            />
            <Text style={{marginTop:-20 , color:helperText.color }}>
                {helperText.value}
            </Text>
        </View>
         

        <View style={{width:"100%" , alignItems:"center"}}> 
            <Button icon="login"
                textColor='#fff'
                mode="elevated"
                style={styles.button}
                onPress={handleSignup}>
            Create Account
            </Button>
            <Text>By signing in you are agreeing to our terms, conditions and privacy policy.</Text>
        </View>
        
      </View>
    

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    height: 400,
    gap:10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: 'flex',
    alignItems:"center",
    justifyContent:"center"
  },
  inputContainer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
  input: {
    width: '90%',
    borderColor:"#007bff",
    marginBottom: 5,
  },
  button:{
    width: '90%',
    backgroundColor: '#007bff',
    marginTop: 20,
  },
  button2:{
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    position:"absolute",
    bottom:50
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton:{
    height:40,
    width:50,
    borderRadius:8,
    backgroundColor:"#007bff",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20,
    marginTop:20
  }
})

export default SignupScreen