import React,{useContext,useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image, TouchableHighlight, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import {IconButton } from 'react-native-paper';
import logo from "../assets/icon.png"
import back from "../assets/back.png";
import profilePic from "../assets/ProfilePic.png";
const Header = () => {
   
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,data,setData] = useContext(bgContext);
    const navigation = useNavigation();
    const [bgcolor,setColor] = useState("black")
     const handleLogOut = async()=> {
            try {
                await logout();
                navigation.navigate("Welcome")
            } catch (error) {
                //console.log("Failed to log out")
            }
        }
    useEffect(()=>{
        //console.log(Location[Location.length-1]);
    })
    const styles = StyleSheet.create({
        header:{
            //height:60,
            //paddingHorizontal:30,
            width:'100%',
            //backgroundColor: 'black',
            flexDirection:"row",
            alignItems: 'center',
            justifyContent:"space-between",
           
            paddingTop:30,
            paddingRight:5,
            paddingLeft:20
            

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
    const handleProPress = ()=>{
        navigation.navigate("Pro")
    }
    const handleAccountPress = ()=>{
        navigation.navigate("Account");
    }
  return state!==1?(
    
        <View
        style={[styles.header, {height:(size+30),opacity:opacity,backgroundColor:bgcolor}]}

        > 
        {Location[Location.length-1]!=="Home"?
        <TouchableOpacity onPress={()=>handlePress()} activeOpacity={0.5} style={{width:40}}>
            <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        :<Image source={logo} style={{height:30,width:30,marginLeft:5}}/>
        }
       
        <View
            style={{height:40,width:40,justifyContent:'center',alignItems:'center', flexDirection:"row" , marginRight:30}}
        >
            {/* <TouchableOpacity style={{width:60 , height: 35 , borderBlockColor:"white" , borderWidth:1, borderRadius:30 , justifyContent:"center", paddingLeft:3}} onPress={handleProPress}>
                <Text style={{color:"white"}}>Go Pro</Text>
            </TouchableOpacity> */}
            <IconButton
                icon="crown"
                iconColor='gold'
                mode="outlined"
                onPress={handleProPress}
            />
            <IconButton
              icon="account"
              size={20}
              mode="outlined"
              containerColor='white'
              style={{marginRight:10}}
              onPress={handleAccountPress}
            />
        </View>
            
        </View>
            
    ):(<></>)


  
}

export default Header