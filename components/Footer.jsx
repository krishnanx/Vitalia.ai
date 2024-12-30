import React, { useState,useEffect,useContext } from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import HomeIcon from "../assets/house.png";
import Fav from "../assets/bookmark.png";
import Scan from "../assets/Scan.png";
import Profile from "../assets/Profile.png";
import { bgContext } from '../Context/StateContext';
import { useNavigationState,useRoute } from '@react-navigation/native';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
import { Screen } from 'react-native-screens';

const Footer = () => {
    //const [isVisible, setIsVisible] = useState(false);
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,route,setRoutes] = useContext(bgContext);
    
    const navigation = useNavigation();
    useEffect(()=> {
        ////console.log("Location",Location)    
        const routes = navigation.getState();
        ////console.log("routes",routes)
        if(routes){
        setRoutes(routes.routes);
        //console.log("routes",routes.routes)
        
    }},[Location]);


    const styles = StyleSheet.create({
        footer:{
            //height:60,
            //paddingHorizontal:30,
            backgroundColor: '#D6F1FF',
            flexDirection:"row",
            alignItems: 'center',
            //justifyContent:"space-evenly",
            borderTopWidth:1,
            borderTopColor:'#979797'
            

        },
        leftFooter:{
            flexDirection:'row',
            justifyContent:'space-between',
            width:'140',
            height:'40',
            paddingLeft:'30',
            
        },
        middleFooter:{
            flexDirection:'row',
            justifyContent:'center',
            height:"50",
            width:'120',
            
        },
        rightFooter:{
            flexDirection:'row',
            justifyContent:'space-between',
            width:'140',
            height:'40',
            paddingRight:'30',
        },
        Touchable:{
            //backgroundColor:"white",
            width:'50',
            height:'40',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },
        Scannable:{
           //backgroundColor:"white",
            width:'50',
            height:'40',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },
    })
    const handlePress = (screenName) => {
        ////console.log("routes",routes)
        //if(ro)
        /*route.forEach((item) => {
            //console.log("item",item)
            if(screenName===item.name){
                navigation.navigate(screenName);
            }
            else{
                navigation.navigate(screenName);
            }
        })
        //console.log("screenName",screenName)*/
        
        // Navigate to the screen
        navigation.navigate(screenName);
        
    }
    const handleHome = () => {

        navigation.navigate('home')
    }
    const handleScan = () => {
        navigation.navigate('Scan')
    }
    const handleJane = () => {
        navigation.navigate('jane')
    }
    const handleSave = () => {
        navigation.navigate('Saved')
    }
    
  return (
    <View style={[styles.footer, { height:size,opacity:opacity }]}>
                <View
                    style={styles.leftFooter}
                >
                    <TouchableOpacity onPress={()=>handlePress('Home')} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={HomeIcon}/>
                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handlePress('jane')} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={Fav}/>
                        
                    </TouchableOpacity>
                   
                   
                </View>
                <View
                    style={styles.middleFooter}
                >
                    
                    <TouchableOpacity onPress={()=>handlePress('Scan')} activeOpacity={0.5} style={styles.Scannable}>
                        <Image source={Scan}/>
                    </TouchableOpacity>
                    
                </View>
                <View
                    style={styles.rightFooter}
                >
                    
                    <TouchableOpacity onPress={()=>handlePress('Saved')} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={Fav}/> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>handlePress('Profile')} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={Profile}/>   
                    </TouchableOpacity>
                   
                </View>
    </View>
)
}

export default Footer