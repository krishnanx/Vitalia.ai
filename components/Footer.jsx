import React, { useState,useEffect,useContext } from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';
import Svg, { Path } from "react-native-svg";
import {useNavigation,} from '@react-navigation/native';
import handlePull from '../functions/handlePull';
import { AuthContext } from '../Context/AuthProvider';
import ScanButton from "../components/svgs/ScanButton"

const Footer = () => {
   
    //const [isVisible, setIsVisible] = useState(false);
    const {user} = useContext(AuthContext)
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,code,
        setCode,click,setClicked,value,setValue,bookmarks,setBookmarks,scanned,setScanned,name,setName,currentPage,setCurrentPage] = useContext(bgContext);
        
    const [isLoading, setIsLoading] = useState(false)
    
    const navigation = useNavigation();
    useEffect(()=> {
        ////console.log("Location",Location)    
        const routes = navigation.getState();
        ////console.log("routes",routes)
        if(routes){
        setRoutes(routes.routes);
        //console.log("routes",routes.routes)
        
    }},[Location]);
    // useEffect(()=>{
    //     const route = navigation.getState();
    //     console.log(route)
    //     const Index = route.index;
    //     const location = route.routes[Index].name;
    //     setLocation((prev) => [...prev, location])
    // },[])

    const styles = StyleSheet.create({
        footer:{
            
            height:60,
            //paddingHorizontal:30,
            backgroundColor: currentPage === "Scan" ? "transparent" : "#141414",
            flexDirection:"row",
            alignItems: 'center',
            justifyContent:"space-evenly",
            borderTopWidth:currentPage === "Scan" ?0:1,
            borderTopColor:'#282828',
            width:"100%",
            position:currentPage === "Scan" ? "absolute" : "static",
            bottom:currentPage === "Scan" ? 0: "none",
            
        },
        leftFooter:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            width:"35%",
            height:40,
            paddingLeft:30,
            // backgroundColor:'white'
            
        },
        middleFooter:{
            flexDirection:'row',
            justifyContent:'center',
            height:40,
            width:"30%",
            
            // backgroundColor:'white'
            
        },
        rightFooter:{
            flexDirection:'row',
            justifyContent:'space-between',
            width:"35%",
            height:40,
            paddingRight:30,
        },
        Touchable:{
            //backgroundColor:"white",
            width:50,
            height:40,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:30
        },
        Scannable:{
           //backgroundColor:"white",
            width:50,
            height:40,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            position:"absolute",
            bottom:10,
            display: currentPage != "Scan" ? "flex" : "none"
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
    const handlePress = async (screenName) => {
        if (screenName !== "Scan") {
            setState(2);
        }
    
        if (screenName === "Saved") {
            const check = async () => {
                const response = await handlePull(user,"saved");
                //console.log("footer response:", response);
                setValue(response);
    
                // const initialBookmarks = {};
                // response.forEach((item) => {
                //     initialBookmarks[item.code] = true; // Set to true for filled icon
                // });
    
                // setBookmarks(initialBookmarks);
                // return initialBookmarks; // Return the bookmarks object
            };
            
            // Wait for the `check` function to complete before navigating
            const initialBookmarks = check();
            navigation.navigate(screenName);
        } 
        else if(screenName === "Home"){
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              );
        }
        else {
            navigation.navigate(screenName);
        }
    };
    
   
    
  return (
    <SafeAreaView style={[styles.footer, { height:size}]}>
        <View
            style={styles.leftFooter}
        >
            <TouchableOpacity onPress={()=>handlePress('Home')} activeOpacity={0.5} style={[styles.Touchable,{marginRight:15,opacity:currentPage==="Home"?0.5:1}]}>
                {/*Location[Location.length-1]==="Home"?<Icon name="home" size={35} color="white" />:<Icon name="home-outline" size={35} color="white" />*/}
                <Svg width={35} height={35} viewBox="0 -960 960 960">
                    <Path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" fill="white" />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlePress('jane')} activeOpacity={0.5} style={[styles.Touchable,{opacity:currentPage==="jane"?0.5:1}]}>
                {/*Location[Location.length-1]==="jane"?<Icon name="clipboard-search" size={35} color="white" />:<Icon name="clipboard-search-outline" size={35} color="white" />*/}
                <Svg width={35} height={35} viewBox="0 -960 960 960">
                    <Path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" fill="white" />
                </Svg>
            </TouchableOpacity>
            
            
        </View>
        <View
            style={styles.middleFooter}
        >
            
            <TouchableOpacity onPress={()=>handlePress('Scan')} activeOpacity={0.5} style={[styles.Scannable]}>
                {/* {<Icon name="barcode-scan" size={45} color="white" />} */}
                {/* <Svg width={35} height={35} viewBox="0 -960 960 960">
                    <Path d="M40-120v-200h80v120h120v80H40Zm680 0v-80h120v-120h80v200H720ZM160-240v-480h80v480h-80Zm120 0v-480h40v480h-40Zm120 0v-480h80v480h-80Zm120 0v-480h120v480H520Zm160 0v-480h40v480h-40Zm80 0v-480h40v480h-40ZM40-640v-200h200v80H120v120H40Zm800 0v-120H720v-80h200v200h-80Z" fill="white" />
                </Svg> */}
                <ScanButton/>
            </TouchableOpacity>
            
        </View>
        <View
            style={styles.rightFooter}
        >
            
            <TouchableOpacity onPress={()=>handlePress('Saved')} activeOpacity={0.5} style={[styles.Touchable,{opacity:currentPage==="Saved"?0.5:1}]}>
                {/* {Location[Location.length-1]==="Saved"?<Icon name="bookmark" size={35} color="white" />:<Icon name="bookmark-outline" size={35} color="white" />} */}
                <Svg width={35} height={35} viewBox="0 -960 960 960">
                    <Path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" fill="white" />
                </Svg>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handlePress('Profile')} activeOpacity={0.5} style={[styles.Touchable,{marginLeft:15,opacity:currentPage==="Profile"?0.5:1}]}>
                {/* {Location[Location.length-1]==="Profile"?<Icon name="account" size={35} color="white" />:<Icon name="account-outline" size={35} color="white" />} */}
                <Svg width={35} height={35} viewBox="0 -960 960 960">
                    <Path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" fill="white" />
                </Svg>
            </TouchableOpacity>
            
        </View>
    </SafeAreaView>
)
}

export default Footer