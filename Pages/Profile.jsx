import React,{useEffect,useContext} from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation] = useContext(bgContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            //console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="home"||location==="jane"||location==="Scan"||location==="Saved"||location==="Profile"? setLocation(1) : setLocation(0);
            //console.log(state.routes[Index].name)
          } else {
            console.log("Navigation context is undefined");
          }
      }, [Navigation]);
    const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor: '#100E1B',
            width:'100%',
            height:'700',
            justifyContent:'center'

        },
       
    })
  return (
    <>
   <View style={styles.Main}>
        <Text style={{color:'white'}}>
            Profile
        </Text>
   </View>
   </>
  )
}

export default Profile