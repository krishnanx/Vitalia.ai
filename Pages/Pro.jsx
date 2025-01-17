import { View, Text, StyleSheet, TouchableOpacity } from 'react-native' 
import React ,{useState} from 'react'
import GradientIcon from '../components/svgs/GradientIcon'
import StyledText from '../components/StyledText'
import LinearGradient from 'react-native-linear-gradient'
import StyledButton from '../components/StyledButton'
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';
import Yearly from "../components/svgs/Yearly"
import CircleBookmarkStar from "../components/svgs/CircleBookmarkStar"
import BookMark from "../components/svgs/BookMark"
import GoPro from '../components/svgs/GoPro'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal } from 'react-native-paper'



const Pro = ({navigation}) => {

    const [plan , setPlan] =useState("")

    const handlePlanSelection = (selected)=>{
        if(selected == "m"){
            setPlan("monthly")
        }
        else if(selected == "q"){
            setPlan("quarterly")
        }
        else if(selected=="y"){
            setPlan("yearly")
        }
    }
    
    

    const onhandleSubscribe =()=>{
        console.log(plan);
    }

    const styles = StyleSheet.create({
        mainContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:"#1d1d1e"
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft:10,
            marginBottom:0,
            marginTop:50,
            color:"white",
            gap:20
        },
        titleBox:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            alignContent:"center"
        },

        detailBox:{
            marginBottom:0,
            gap:20,
        },
        features:{
            alignItems:"center",
            width:"100%",
            flexDirection:"row",
            gap:5,
            marginBottom:5
        },
        pricing:{
            height:"50%",
            width:"100%",
            borderTopStartRadius:30,
            borderTopEndRadius:30,
            justifyContent:"center",
            alignItems:"center",
        },
        priceContainer:{
            width:"100%",
            height:"70%",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"row",
            gap:5
        },
        priceButton:{
            height:150,
            width:120,
            backgroundColor:"white",
            borderRadius:10,
            flexDirection:"column",
            borderWidth:1,
            borderColor: plan.monthly?'#007bff':""
        },
        insideButton:{
            width:"90%",
            justifyContent:"center",
            alignItems:"center",
            gap:30,
            height:"100%"
        },
        time:{
            color:"#007bff"
        },
        price:{
            fontSize:16,
            fontWeight:"bold",
            color:"white"
        },
        button:{
        width: '90%',
        backgroundColor: '#007bff',
    
      },
      featuresText:{
        color:"white",
        fontWeight:400,
        fontSize:14,
        fontFamily:"Poppins"
      },
      gradientBorder: {
        padding: 2, // Width of the border
        borderRadius: 38,
        height:199,
        width:180,
        
      },
      buttonInner: {
        backgroundColor: '#1d1d1e', // Inner button color
        borderRadius: 38, // Slightly smaller than gradient border
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        height:10,
        width:10,
        gap:12
      },
      buttonText: {
        color: '#944EE0', // Text color to match gradient
        fontWeight: 'bold',
        fontSize: 16,
      },
      navigator:{
        height:70,
        width:350,
        justifyContent:'flex-start',
        alignItems:'center',
        // borderWidth:1.5,
        // borderColor:'white'
        flexDirection:'row',
        marginTop:10
        
    },
    })
return (
    <LinearGradient 
        colors={['#251933', '#141414']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.mainContainer}>
            <View style={styles.navigator} >
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                      <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                        <Mask
                          id="mask0_82_433"
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                        >
                          <Rect width={24} height={24} fill="#D9D9D9" />
                        </Mask>
                          <G mask="url(#mask0_82_433)">
                            <Path
                            d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z"
                            fill="white"
                            />
                          </G>
                      </Svg>
                    </TouchableOpacity>
                    <Text
                      style={{fontSize:25,color:'white',fontFamily:'Poppins-SemiBold',textAlign:'center',marginLeft:20}}
                    >
                      Get Premium
                    </Text>
                    <Icon style={{marginBottom:10}} name='crown-outline' size={40} color={"#FFCC00"} />
                    </View>
        
        <View style={styles.detailBox}>
            <View style={styles.features}>
                    <GradientIcon height={25} width={25}/>
                    <Text style={styles.featuresText}>Get Personalised Recommendations</Text>
            </View>
            <View style={styles.features}>
                    <GradientIcon height={25} width={25}/>
                    <Text style={styles.featuresText}>Unlock Allergies</Text>
            </View>
            <View style={styles.features}>
                    <GradientIcon height={25} width={25}/>
                    <Text style={styles.featuresText}>Uncover Potential Carcinogens</Text>
            </View>
            <View style={styles.features}>
                    <GradientIcon height={25} width={25}/>
                    <Text style={styles.featuresText}>Decipher ingredient and Nutrition list</Text>
            </View>
            <View style={styles.features}>
                    <GradientIcon height={25} width={25}/>
                    <Text style={styles.featuresText}>Access 1500+ Recipes</Text>
            </View>
            <View style={styles.features}>
                    <GradientIcon height={25} width={25}/>
                    <Text style={styles.featuresText}>Access special offers and discounts</Text>
            </View>
            
        </View>
        <View style={styles.pricing}>
            <View style={styles.priceContainer}>
                    <LinearGradient
                            colors={['#954EDD8A', '#1B1B1B00']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradientBorder}
                            >
                                <Text style={{color:"white" , fontWeight:600 , fontSize:16 , alignSelf:"center", marginTop:20}}>Monthly</Text>
                                <View style={{flexDirection:"row" , gap:5 , justifyContent:"center" , alignItems:"center", marginTop:40}}>
                                    <Text style={{color:"white", fontSize:14, marginTop:5, fontFamily:"Poppins-Bold"}}>Rs</Text>
                                    <Text style={{color:"white" , fontSize:24, fontFamily:"Poppins-Bold"}}>199/-</Text>
                                </View>
                    </LinearGradient>

                  <TouchableOpacity onPress={()=>console.log("Pressed")}>
                    <View style={{height:99 , width:99 , position:"absolute" , zIndex:10 , right:-30 , bottom:130}}>
                        <CircleBookmarkStar/>
                        <View style={{position:"relative" , right:-38 , bottom:161}}>
                            <BookMark />
                        </View> 
                    </View>
                    <Yearly/>
                  </TouchableOpacity>

            </View>
            <StyledButton title="Subscribe" colors={["#650099" ,"#C95EFF"]}  onPress={onhandleSubscribe} width={350} height={50}/>
            <Text style={{color:"#818181", fontSize:10, marginTop:10}}>Terms and Conditions Applied</Text>
        </View>
    </LinearGradient>
)
}



export default Pro