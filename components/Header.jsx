import React,{useContext,useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  
import back from "../assets/back.png";
import profilePic from "../assets/ProfilePic.png";
const Header = () => {
        const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,data,setData] = useContext(bgContext);
        const navigation = useNavigation();
        const [bgcolor,setColor] = useState("black")
       
    const styles = StyleSheet.create({
        header:{
            //height:60,
            //paddingHorizontal:30,
            width:'100%',
            //backgroundColor: 'black',
            flexDirection:"row",
            alignItems: 'center',
            justifyContent:"space-between",
            borderBottomWidth:1,
            borderBottomColor:'#979797',
            paddingTop:30,
            paddingHorizontal:5,
            

        },
        gif:{
            height:150,
            width:150,
            backgroundColor:'black',
            
        },
        video: {
            height: 80,  // Adjust the size for your needs
            width: 80,   // Adjust the size for your needs
        },
})
    const handlePress = () => {
        //setLocation((prev)=>prev="Dashboard");
        setLocation((prev) => prev.slice(0, prev.length - 1));
        navigation.goBack();
    }
  return state!==1?(
    
        <View
        style={[styles.header, {height:(size+30),opacity:opacity,backgroundColor:bgcolor}]}

        > 
        {Location[Location.length-1]!=="Home"?
        <TouchableOpacity onPress={()=>handlePress()} activeOpacity={0.5} style={{width:40}}>
            <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        :<TouchableOpacity  activeOpacity={0.5}>
              <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>}
        <Text style={{color:'white',width:'180',fontSize:20,textAlign:'center'}}>
            {Location[Location.length-1]}
        </Text>
        <TouchableOpacity
            style={{height:40,width:40,justifyContent:'center',alignItems:'center'}}
        >
              <Icon name="account-circle-outline" size={35} color="white" />
        </TouchableOpacity>
            
    </View>):(<></>)


  
}

export default Header