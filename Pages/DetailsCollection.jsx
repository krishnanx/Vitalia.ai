import { View, Text , StyleSheet, Imag } from 'react-native'
import React,{useState} from 'react'
import { TextInput , Button, IconButton, Menu, Avatar } from 'react-native-paper';
import useRegister from '../firebaseHooks/useRegister';

const DetailsCollection = ({route,navigation}) => {

    const {email , password} = route.params;
    const {register , loading , error , user} = useRegister();

    const [userDetails , setUserDetails] = useState({
        gender: "",
        ageGroup: "",
        height: 0,
        weight: 0,
        disease: "",
        allergies: "",
    });

    //for age group menu
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const [selectedGenderText , setSelectedGenderText] = useState('Select Gender');
    const [selectedAgeGroupText , setSelectedAgeGroupText] = useState('Select your age group');

    //for avatar
    const [imageError, setImageError] = useState(false);

   // const {register , loading , error} = useRegister()

    const handleSubmit = async() => {
        if(userDetails.height == 0 || userDetails.weight == 0 || userDetails.ageGroup === "" || userDetails.gender === ""){
            alert("Please fill the required fields")
            return;
        }
        console.log(email , password)
        console.log(userDetails);
        try {
            const user = await register(email , password , userDetails);
            console.log(user)
            if(user){
                navigation.navigate('Home');
            }
        } catch (error) {
            alert(error.message);
            
        }
        //navigation.navigate('Home');

    }
  return (
    <View style={styles.container}>
        {error? alert(error):""}

        <View style={{width:'100%', alignItems:'center'}}>
            <Text style={styles.title}>Before we Start!!</Text>
            <Text style={{fontSize:15}}>Complete your profile</Text>
        </View>
        
        <View id='top container' style={styles.IconContainer}>
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
                {uri: `https://avatar.iran.liara.run/public/${userDetails.gender === "Male"?"boy":"girl"}`}
              } // Path to your avatar image
              onError={() => setImageError(true)} // Trigger fallback on error
            />
          )}
        </View>

        <View style={styles.subContainerBottom}>
            <View style={styles.menuContainer} >
                <Menu
                  visible={visible2}
                  onDismiss={()=>setVisible2(false)}
                  anchor={
                    <Button mode="outlined" onPress={()=>setVisible2(true)}  >
                      {selectedGenderText}
                    </Button>
                  }
                >
                  <Menu.Item onPress={() =>{
                    // setGender("M")
                    setUserDetails({...userDetails , gender:"Male"})
                    setSelectedGenderText("Gender: Male")
                    setVisible2(false)
                    }} title="Male" />
                    
                    <Menu.Item onPress={() =>{
                    // setGender("F")
                    setSelectedGenderText("Gender: Female")
                    setUserDetails({...userDetails , gender: "Female"})
                    setVisible2(false)
                    }} title="Female" />
                </Menu>

                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={
                    <Button mode="outlined" onPress={openMenu}  >
                      {selectedAgeGroupText}
                    </Button>
                  }
                >
                  <Menu.Item onPress={() =>{
                    // setAgeGroup("21")
                    setSelectedAgeGroupText("Age group:13-21")
                    setUserDetails({...userDetails , ageGroup:"13-21"})
                    closeMenu()
                    }} title="13-21" />

                  <Menu.Item onPress={() => {
                    // setAgeGroup("35")
                    setSelectedAgeGroupText("Age group:21-35")
                    setUserDetails({...userDetails , ageGroup:"21-35"})
                    closeMenu()
                    }} title="21-35" />

                  <Menu.Item onPress={() => {
                    // setAgeGroup("60")
                    setSelectedAgeGroupText("Age group:35-60")
                    setUserDetails({...userDetails , ageGroup:"35-60"})
                    closeMenu()
                  }} title="35-60" />

                  <Menu.Item onPress={() => {
                    // setAgeGroup("60")
                    setSelectedAgeGroupText("Age group:60+")
                    setUserDetails({...userDetails , ageGroup:"60+"})
                    closeMenu()
                  }} title="35-60" />

                  <Menu.Item onPress={() => {
                    // setAgeGroup("")
                    setUserDetails({...userDetails , ageGroup:""})
                    setSelectedAgeGroupText("Select your age group")
                    closeMenu()
                  }} title="clear" />

                </Menu>

              

            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    label={"Enter your height(cm)"}
                    value={userDetails.height.toString()}
                    onChangeText={(text) => setUserDetails({ ...userDetails, height: text })}
                    mode="outlined"
                />

                <TextInput style={styles.input}
                    label={"Enter your weight(kg)"}
                    value={userDetails.weight.toString()}
                    onChangeText={(text) => setUserDetails({ ...userDetails, weight: text })}
                    mode="outlined"
                />
                <TextInput style={styles.input}
                  label={"Do you have any chronic disease?"}
                  value={userDetails.disease}
                  onChangeText={(text) => setUserDetails({ ...userDetails, disease: text })}
                  mode="outlined"
                />
                <TextInput style={styles.input}
                  label={"Do you have any allergies?"}
                  value={userDetails.allergies}
                  onChangeText={(text) => setUserDetails({ ...userDetails, allergies: text })}
                  mode="outlined"
                />

            </View>
            <Button mode="contained" onPress={handleSubmit} loading={loading}>
                Complete profile
            </Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        alignItems: 'flex-end',
        marginRight: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    inputContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '90%',
        borderColor:"#007bff",
        marginBottom: 5,
        borderRadius: 8,
    },
    menuContainer:{
        width: '70%',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    },
})

export default DetailsCollection