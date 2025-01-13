import { View, Text, StyleSheet , TextInput, TouchableHighlight} from 'react-native'
import React ,{useState,useEffect,useContext} from 'react'
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import useRegister from '../firebaseHooks/useRegister';
import { LinearGradient } from 'expo-linear-gradient';
import CustomDialog from '../components/CustomDialog';
import StyledButton from '../components/StyledButton';

const SignupScreen = ({navigation}) => {
    const [fname , setFname] = useState('');
    const [lname , setlname] = useState("");
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);
    const {register , loading , error , user} = useRegister();
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    
    useEffect(() => {
        if (navigation) {
            const state = navigation.getState();
            ////console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
           
            location==="Signup" ? (setSize(0),setOpacity(0)) : (setSize(60),setOpacity(1));
          } else {
            //console.log("Navigation context is undefined");
          }
    }, [navigation]);

    const handleSignup = async () => {
        if(email.length === 0 || password.length === 0 || !fname || !lname){
            setDialogMessage("Fill all Fields")
            setIsDialogVisible(true)
            return
        }
        if(password.length<=5){
            setDialogMessage("Password must be more than 6 characters");
            setIsDialogVisible(true)
            return
        }
        if(emailRegex.test(email) === false){
            setDialogMessage("Invalid Email format");
            setIsDialogVisible(true)
            return
        }
        
        try {
            const user = await register(email, password);
            if (user) {
                navigation.navigate("Details" , {fname:fname ,lname: lname});
                console.log("Passing to Details:", { fname, lname });

                
            }
        } catch (error) {
            setDialogMessage(error.message.split("/")[1].split(")")[0]);
            setIsDialogVisible(true);
        }
    }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
    titleBox:{
      justifyContent:"center",
      height:30,
      flexDirection:"row",
      gap:5,
      textAlign:"center",
    },
    title:{
      color:"white",
      fontSize:20,
      marginTop:5,
      fontFamily:"Poppins",
      fontWeight:400
    },
    AccTitle:{
      height:"100%",
      color:"white",
      fontSize:24,
      textAlign:"center",
      fontFamily:"Poppins-ExtraBold",
      fontWeight:400
    },
    inputContainer:{
      width:"90%",
      marginTop:100,
      gap:50
    },
    inputP:{
      width:"100%",
      gap:20,
    },
    input: {
      height: 80, // Adjust height as needed
      backgroundColor:"#252930",
      borderRadius: 22, // Change the border radius here
      paddingHorizontal: 10, // Inner padding for text
      color:"white"
    },
    buttonContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"80%",
      marginTop:30,
      alignItems:"center"
    },
    bottom:{
      marginTop:100,
      flexDirection:"row",
      width:"70%",
      gap:5,
      alignItems:"center",
      justifyContent:"center"
    }
    
  })

  return (
    <View style={styles.container}>
      <CustomDialog
        visible={isDialogVisible}
        onClose={() => setIsDialogVisible(false)}
        message={dialogMessage}
      />
      <View style={styles.titleBox}>
        <Text style={styles.title}>Create your</Text>
        <Text style={styles.AccTitle}>Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputP}>
          <TextInput 
            style={styles.input}
            placeholder='First Name'
            placeholderTextColor={"#686868"}
            value={fname}
            onChangeText={(text)=>setFname(text)}
          />

          <TextInput 
            style={styles.input}
            placeholder='Last Name'
            placeholderTextColor={"#686868"}
            value={lname}
            onChangeText={(text)=>setlname(text)}
          />
        </View>
        <View style={styles.inputP}>
          <TextInput 
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={"#686868"}
            value={email}
            onChangeText={(text)=>setEmail(text)}
          />

          <TextInput 
            style={styles.input}
            placeholder='Password'
            placeholderTextColor={"#686868"}
            value={password}
            secureTextEntry
            onChangeText={(text)=>setPassword(text)}
          />
          
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={()=>navigation.navigate("Welcome")}>
          <Text style={{fontSize:16 , fontWeight:400 , color:"#5F6061"}}>cancel</Text>
        </TouchableHighlight>

        <StyledButton isLoading={loading} onPress={handleSignup} width={150} height={40} title={"Create Account"}/>

        {/* <TouchableHighlight onPress={handleSignup}>
          <LinearGradient
            colors={['#944EE0', '#CD6AAB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.getStartedView}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, marginRight: 10, fontFamily: 'Poppins', fontWeight:700, paddingTop: 5 }}>
              Create Account
            </Text>
          </LinearGradient>
        </TouchableHighlight> */}
      </View>

      <View style={styles.bottom}>
        <Text style={{color:"#818181" , fontSize:12 , fontFamily:"Poppins"}}>Already have an account ?</Text>
        <TouchableHighlight onPress={()=>navigation.navigate("Login")}>
          <Text style={{color:"#818181" , fontSize:15 , fontFamily:"Poppins-Bold"}}> Log in</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}


export default SignupScreen