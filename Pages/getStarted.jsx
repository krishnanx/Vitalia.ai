import React,{useContext} from 'react'
import {View,StyleSheet,Text,Image,PixelRatio,TouchableHighlight} from 'react-native'
import Ellipse4 from "../assets/Ellipse 4.png"
import Ellipse5  from "../assets/Ellipse 5.png"
import Ellipse6  from "../assets/Ellipse 6.png"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import send from "../assets/send.png"
import LinearGradient from 'react-native-linear-gradient';
import vector1 from "../assets/Vector 1.png";
import { useFonts } from 'expo-font';
import { font } from '../Context/fontContext'
const GetStarted = () => {
    const {fontsLoaded} = useContext(font)
     const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor:'black',
            flexDirection:'column',
            justifyContent:"center",
            alignItems:'center'
        },
        NutrigenView:{
            width:100,
            height:50,
            // borderWidth:1.5,
            // borderColor:'white',
            position:'absolute',
            top:20,
            left:20,
            justifyContent:"center",
            alignItems:"center"
        },
        Ellipse:{
            width:"100%",
           
            height:"60%",
            position:"relative"
        },
        Info:{
            width:"100%",
            position:'relative',
            height:"40%",
            borderWidth:1.5
        },
        circle2:{
            width:450,
            height:450,
            borderWidth:1.5,
            borderColor:'#CACACA',
            borderRadius:300,
            justifyContent:'center',
            alignItems:'center',
            transform: [{ rotate: '93.52deg' }],
            top:-37,
            left:30,
            opacity:0.25
        },
        circle3:{
            width:640,
            height:640,
            borderWidth:1.5,
            borderColor:'#CACACA',
            position:"absolute",
            top:-140,
            left:-50,
            borderRadius:300,
            justifyContent:'center',
            alignItems:'center',
            transform: [{ rotate: '158.9deg' }], // Rotates the view by 45 degrees
            opacity:0.1
        },
        circle1:{
            width:350,
            height:350,
            borderWidth:1.5,
            position:"absolute",
            top:20,
            left:80,
            borderRadius:300,
            justifyContent:'center',
            alignItems:'center',
            borderColor:'#CACACA',
            opacity:0.25
        },
        text:{
            fontFamily: 'Poppins-ExtraBold',
            color:"white",
            lineHeight:40,
            fontSize:40,
            //fontWeight:900
            
        },
        TextView:{
            width:400,
            height:240,
            position:'absolute',
            top:-40,
            marginLeft:25,
        },
        aboutView:{
            width:300,
            height:200,
            // /borderWidth:1.5,
            //borderColor:'white',
            position:'absolute',
            top:80,
            left:130

        },
        about:{
            color:'white',
            fontSize:10,
            textAlign:"left",
        },
        getStarted:{
            // borderWidth:1.5,
            // borderColor:'white',
            width:167,
            height:50,
            borderRadius:50,
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            top:260,
            right:30,
            
        },
        getStartedView:{
            // borderWidth:1.5,
            // borderColor:'white',
            flexDirection:'row',
            width:"100%",
            justifyContent:'center',
            alignItems:'center',
            borderRadius:50,
            height:50,
        },
        vectorView:{
        //     width:100,
        //     height:200,
        //     position:"absolute",
        //     borderWidth:1.5,
        //     borderColor:'white',
        //     top:
        },

        vector:{
            position:"absolute",
            top:130,
            right:200,
            
        }


     })
  return (
    <View
        style={styles.Main}
    >
        <View
            style={styles.Ellipse}
        >
            
            <View style={styles.circle3}/>
            <View style={styles.circle2}/> 
            <View style={styles.circle1}/>
            <Image source={Ellipse4} style={{position:"absolute",left:70,top:10}}/>
            <Image source={Ellipse5} style={{position:"absolute",left:85,top:240}}/>
            <Image source={Ellipse6} style={{position:"absolute",left:200,top:340}}/>
            <View
                style={styles.NutrigenView}
            >
                <Text
                    style={{ color: 'white', textAlign: 'center' ,fontSize:20,fontFamily: 'Poppins-ExtraBold',}}
                >
                    Nutrigen
                </Text>
            </View>
        </View>   
        <View
            style={styles.Info}
        >
            <View
                style={styles.TextView}
            >
                <Text
                    style={styles.text}
                >
                    UNLOCK 
                </Text>
                <Text
                    style={styles.text}
                >
                    THE TRUTH </Text>
                <Text
                    style={styles.text}
                >
                    BEHIND EVERY </Text>
                <Text
                    style={styles.text}
                >
                    BITE</Text>
            
            </View>
            <View
                style={styles.aboutView}
            >
                <Text
                    style={styles.about}
                >
                    Discover what’s really inside your food. Our app  
                </Text>
                <Text
                    style={styles.about}
                >
                    scans barcodes, deciphers ingredients, and alerts
                </Text>
                <Text
                    style={styles.about}
                >
                    you to potential health risks. Stay informed, make 
                </Text>
                <Text
                    style={styles.about}
                >
                    smarter choices, and take control of your well -
                </Text>
                <Text
                    style={styles.about}
                >
                    being — one scan at a time.
                </Text>
                
            </View>
            
            <TouchableHighlight
                onPress={()=>console.log("Button pressed")}
                style={styles.getStarted}
            >
              
                <LinearGradient
                    colors={['#944EE0', '#CD6AAB']}
                    //style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.getStartedView}
                >
                    <Text style={{ color: 'white', textAlign: 'center' ,fontSize:17,marginRight:10,fontFamily: 'Poppins-Bold',paddingTop:5}}>Get Started</Text>
                    <Image source={send}/>
                </LinearGradient>
            </TouchableHighlight>
            <View
                style={styles.vectorView}
            >
                <Image source={vector1} style={styles.vector}/>
            </View>
        
        </View>
        
    </View>
  )
}

export default GetStarted