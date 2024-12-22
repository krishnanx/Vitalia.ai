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

const Footer = () => {
    //const [isVisible, setIsVisible] = useState(false);
    const [state,setState,Location,setLocation,size,setSize] = useContext(bgContext);
    const navigation = useNavigation();
    useEffect(()=> {
        console.log("Location",Location)
    })
    const styles = StyleSheet.create({
        footer:{
            //height:60,
            //paddingHorizontal:30,
            backgroundColor: '#f5f5f5',
            flexDirection:"row",
            alignItems: 'center',
            //justifyContent:"space-evenly",
            borderTopWidth:1,
            borderTopColor:'black'
            

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
    const handlePress = () => {
        navigation.navigate('Profile')
    }
    const handleHome = () => {
        navigation.navigate('Home')
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
    <View style={[styles.footer, { height:size,opacity:Location }]}>
                <View
                    style={styles.leftFooter}
                >
                    <TouchableOpacity onPress={handleHome} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={HomeIcon}/>
                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleJane} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={Fav}/>
                        
                    </TouchableOpacity>
                   
                   
                </View>
                <View
                    style={styles.middleFooter}
                >
                    
                    <TouchableOpacity onPress={handleScan} activeOpacity={0.5} style={styles.Scannable}>
                        <Image source={Scan}/>
                    </TouchableOpacity>
                    
                </View>
                <View
                    style={styles.rightFooter}
                >
                    
                    <TouchableOpacity onPress={handleSave} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={Fav}/> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handlePress} activeOpacity={0.5} style={styles.Touchable}>
                        <Image source={Profile}/>   
                    </TouchableOpacity>
                   
                </View>
    </View>
)
}

export default Footer