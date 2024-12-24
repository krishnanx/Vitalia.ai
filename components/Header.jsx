import React,{useContext,useEffect} from 'react'
import { StyleSheet, Text, View,Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';
import donut from "../assets/donut.gif";
import pic from "../assets/icon.png";
import FastImage from 'react-native-fast-image';
import Gif from 'react-native-gif';
import Video from 'react-native-video';
import donutVid from "../assets/donut.mp4";
import back from "../assets/back.png";
import profilePic from "../assets/ProfilePic.png";
const Header = () => {
       const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);
        const navigation = useNavigation();
        useEffect(()=> {
            console.log("Location",Location[Location.length - 1])   
        })
    const styles = StyleSheet.create({
        header:{
            //height:60,
            //paddingHorizontal:30,
            width:'100%',
            backgroundColor: '#D6F1FF',
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
  return (
    <View
        style={[styles.header, {height:(size+30),opacity:opacity}]}

    > 
        {Location[Location.length-1]!=="Home"?
        <TouchableOpacity onPress={()=>handlePress()} activeOpacity={0.5} style={{width:40}}>
            <Image source ={back}/>
        </TouchableOpacity>
        :<TouchableOpacity  activeOpacity={0.5}>
            <Image source ={back} style={{opacity:0}}/>
        </TouchableOpacity>}
        <Text style={{color:'black',width:'180',fontSize:20,textAlign:'center'}}>
            {Location[Location.length-1]}
        </Text>
        <TouchableOpacity
            style={{height:40,width:40,borderRadius:20,borderWidth:1.5,borderColor:'black',justifyContent:'center',alignItems:'center'}}
        >
            <Image source={profilePic}/>
        </TouchableOpacity>
            
    </View>

    
  )
}

export default Header