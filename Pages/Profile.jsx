import React,{useEffect,useContext} from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import next from "../assets/next.png"
import dashboard from "../assets/dashboard.png"
import info from "../assets/info.png"
import contact from "../assets/contact.png"
import terms from "../assets/terms.png"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import GoPro from '../components/svgs/GoPro';
const Profile = () => {
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,code,setCode,click,setClicked,value,setValue,bookmarks,setBookmarks,scanned,setScanned,name,setName] = useContext(bgContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            ////console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="home"||location==="jane"||location==="Scan"||location==="Saved"||location==="Profile"? (setLocation((prev) => [...prev, location]),setSize(60),setOpacity(1)) : (setLocation((prev) => [...prev, location]),setSize(0),setOpacity(0));
            ////console.log(state.routes[Index].name)
          } else {
            //console.log("Navigation context is undefined");
          }
      },[Navigation]);
    const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor: '#141414',
            width:'100%',
            height:700,
            //justifyContent:'space-around',
            //marginVertical:10,
            paddingTop:50,
            alignItems:'center'

        },
        dashboardButton:{
          width:340,
          height:50,
          backgroundColor:"#1c1d1f",
          marginVertical:5,
          //opacity:"0.5"
          borderRadius:20,
          justifyContent:'center',
          //alignItems:'center',
          paddingHorizontal:5,
          borderWidth:1.5,
          borderColor:'black',
        
        },
        touchView:{
          width:"100%",
          height:50,
          flexDirection:'row',
          
          justifyContent:'space-between',
          alignItems:'center'
        },
        next:{
          width:10,
          height:10,

        },
        text:{
          width:250,
          height:20,
          //textAlign:'center',
          alignItems:'center',
          color:'white'
        },
        navigator:{
          height:70,
          width:350,
          justifyContent:'space-around',
          alignItems:'center',
          // borderWidth:1.5,
          // borderColor:'white'
          flexDirection:'row',
          marginBottom:30
          
      },

       
    })
    const handleDashboard = () => {
      Navigation.navigate('Dashboard')
    };
  return (
    <>
      <View style={styles.Main}>
        <View
          style={styles.navigator}
        >
          <View
            style={{width:150,height:50,justifyContent:"flex-start",alignItems:'center',flexDirection:'row'}}
          >
            <TouchableOpacity>
                <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                    {/* Define the mask */}
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

                    {/* Apply the mask */}
                    <G mask="url(#mask0_82_433)">
                        {/* Arrow Path */}
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
              More
            </Text>
          </View>
          <View
            style={{width:150,flexDirection:'row',/*borderWidth:1,borderColor:'white',*/justifyContent:'flex-end',alignItems:'center'}}
          >
            <TouchableOpacity
              style={{marginRight:10}}
              onPress={()=>{Navigation.navigate("Pro")}}
            >
              <GoPro/>
            </TouchableOpacity>
            <LinearGradient
              colors={['#954EDD', '#CD6AAB']}
              style={{width:40,height:40,borderRadius:20,justifyContent:'center',alignItems:'center'}}
            >
              <TouchableOpacity
                style={{width:37,height:37,borderRadius:20,justifyContent:'center',alignItems:'center',backgroundColor:"#110C47"}}
                onPress={()=>{Navigation.navigate("Account")}}
              >
                <Text
                  style={{fontSize:20,fontWeight:800,color:'white'}}
                >
                  {name.charAt(0)}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={() => handleDashboard()}
        >
          <View
            style={styles.touchView}
          >
            <Icon name="view-dashboard-outline" size={25} color="white" />
            <Text
              style={styles.text}
            >
              Dashboard
            </Text>
            <Icon name="chevron-right" size={25} color="white" />
          </View>
          
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#1c1d1f" // Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >
         <View
            style={styles.touchView}
          >
            <Icon name="information" size={25} color="white" />
            <Text
              style={styles.text}
            >
              About
            </Text>
            <Icon name="chevron-right" size={25} color="white" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#1c1d1f"// Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >
         <View
            style={styles.touchView}
          >
            <Icon name="phone" size={25} color="white" />
            <Text
              style={styles.text}
            >
              Contact
            </Text>
            <Icon name="chevron-right" size={25} color="white" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#1c1d1f"// Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >
         <View
            style={styles.touchView}
          >
           <Icon name="book-account" size={25} color="white" />
            <Text
              style={styles.text}
            >
              Terms & Conditions
            </Text>
            <Icon name="chevron-right" size={25} color="white" />
          </View>
        </TouchableHighlight>
      </View>
    </>
  )
}

export default Profile