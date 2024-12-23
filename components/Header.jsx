import React,{useContext,useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';
import donut from "../assets/donut.gif";
import pic from "../assets/icon.png";
import FastImage from 'react-native-fast-image';
import Gif from 'react-native-gif';
import Video from 'react-native-video';
import donutVid from "../assets/donut.mp4";
const Header = () => {
       const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);
        const navigation = useNavigation();
        useEffect(()=> {
            console.log("Location",Location)
        })
    const styles = StyleSheet.create({
        header:{
            //height:60,
            //paddingHorizontal:30,
            backgroundColor: '#f5f5f5',
            flexDirection:"row",
            alignItems: 'center',
            justifyContent:"center",
            borderBottomWidth:1,
            borderBottomColor:'#979797',
            paddingTop:30,
            paddingHorizontal:10,
            

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
  return (
    <View
        style={[styles.header, {height:(size+30),opacity:opacity}]}

    > 
    

        <Text style={{color:'black'}}>
            {Location}
        </Text>
    </View>

    
  )
}

export default Header