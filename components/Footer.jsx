import React, { useState,useEffect,useContext } from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import HomeIcon from "../assets/house.png";
import Fav from "../assets/bookmark.png";
import Scan from "../assets/Scan.png";
import Profile from "../assets/Profile.png";
import { bgContext } from '../Context/StateContext';
import { useNavigationState,useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';  
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
import { Screen } from 'react-native-screens';

const Footer = () => {
    //const [isVisible, setIsVisible] = useState(false);
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,route,setRoutes] = useContext(bgContext);
    const [isLoading, setIsLoading] = useState(false);
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
            backgroundColor: 'black',
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
        loaderContainer: {
            position: 'absolute',
            top:-400,
            left:200,
            transform: [{ translateX: -25 }, { translateY: -25 }],
            zIndex: 10,

            
        },
        temp:{
            width:'100%',
            backgroundColor:'black',
            borderWIdth:1.5,
            borderColor:'white',
            height:100,
            position:'absoulute',
            top:-500
            
        }
    })
    const handlePress = (screenName) => {
        /*setIsLoading(true); // Start loading
        ////console.log("routes",routes)
        try {
            // Navigate to the target screen
            setTimeout(() => setIsLoading(false),3000);
            
          } finally {
            // Stop loading after a short delay (optional for UX purposes)
            if(!isLoading){
                navigation.navigate(screenName);
            }
          }
        */
        if(screenName!=="Scan"){
            setState(2)
        }
        navigation.navigate(screenName);
        
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
    <View style={[styles.footer, { height:size,opacity:opacity,position:'relative' }]}>
              
                <View
                    style={styles.leftFooter}
                >
                    <TouchableOpacity onPress={()=>handlePress('Home')} activeOpacity={0.5} style={styles.Touchable}>
                        <Icon name="home-outline" size={35} color="white" />
                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handlePress('jane')} activeOpacity={0.5} style={styles.Touchable}>
                        <Icon name="bookmark-outline" size={35} color="white" />
                        
                    </TouchableOpacity>
                   
                   
                </View>
                <View
                    style={styles.middleFooter}
                >
                    
                    <TouchableOpacity onPress={()=>handlePress('Scan')} activeOpacity={0.5} style={styles.Scannable}>
                        <Icon name="barcode-scan" size={45} color="white" />
                    </TouchableOpacity>
                    
                </View>
                <View
                    style={styles.rightFooter}
                >
                    
                    <TouchableOpacity onPress={()=>handlePress('Saved')} activeOpacity={0.5} style={styles.Touchable}>
                        <Icon name="bookmark-outline" size={35} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>handlePress('Profile')} activeOpacity={0.5} style={styles.Touchable}>
                        <Icon name="account" size={35} color="white" />
                    </TouchableOpacity>
                   
                </View>
    </View>
)
}

export default Footer