import React,{useContext,useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthProvider';
import handlePull from '../functions/handlePull';
const Saved = () => {
  const {user} = useContext(AuthContext)
  const Navigation = useNavigation();
  const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,data,setData] = useContext(bgContext);
  useEffect(() => {
      if (Navigation) {
          const state = Navigation.getState();
          //console.log("navigation state:", state.routes[0].name);
          const Index = state.index;
          const location = state.routes[Index].name;
          location==="home"||location==="jane"||location==="Scan"||location==="Saved"||location==="Profile"? (setLocation((prev) => [...prev, location]),setSize(60),setOpacity(1)) : (setLocation((prev) => [...prev, location]),setSize(0),setOpacity(0));
          //console.log(state.routes[Index].name)
        } else {
          console.log("Navigation context is undefined");
        }
  }, [Navigation]);
  useEffect(()=>{
    const response = handlePull(user);
    console.log(response)
  },[])
  const styles = StyleSheet.create({
      Main:{
          flex:1,
          backgroundColor: '#D6F1FF',
          width:'100%',
          height:700,
          

      },
  })
  return (
  <ScrollView 
    style={styles.Main}
    contentContainerStyle={{justifyContent:'center'}}
  >

  </ScrollView>
  )
}

export default Saved