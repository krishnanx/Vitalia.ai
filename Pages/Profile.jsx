import React,{useEffect,useContext} from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            //console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="home"||location==="jane"||location==="Scan"||location==="Saved"||location==="Profile"? (setLocation(location),setSize(60),setOpacity(1)) : (setLocation(location),setSize(0),setOpacity(0));
            //console.log(state.routes[Index].name)
          } else {
            console.log("Navigation context is undefined");
          }
      }, [Navigation]);
    const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor: '#f5f5f5',
            width:'100%',
            height:'700',
            justifyContent:'center'

        },
       
    })
  return (
    <>
   <View style={styles.Main}>
        
   </View>
   </>
  )
}

export default Profile