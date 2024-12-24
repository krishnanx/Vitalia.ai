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
const Profile = () => {
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            //console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="home"||location==="jane"||location==="Scan"||location==="Saved"||location==="Profile"? (setLocation((prev) => [...prev, location]),setSize(60),setOpacity(1)) : (setLocation((prev) => [...prev, location]),setSize(0),setOpacity(0));
            //console.log(state.routes[Index].name)
          } else {
            console.log("Navigation context is undefined");
          }
      },[Navigation]);
    const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor: '#D6F1FF',
            width:'100%',
            height:'700',
            //justifyContent:'space-around',
            //marginVertical:10,
            paddingTop:50,
            alignItems:'center'

        },
        dashboardButton:{
          width:340,
          height:50,
          backgroundColor:"#EBF8FF",
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
          alignItems:'center'
        },

       
    })
    const handleDashboard = () => {
      Navigation.navigate('Dashboard')
    };
  return (
    <>
      <View style={styles.Main}>
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#ADE2FF" // Color when the button is pressed
            onPress={() => handleDashboard()}
        >
          <View
            style={styles.touchView}
          >
            <Image source={dashboard}/>
            <Text
              style={styles.text}
            >
              Dashboard
            </Text>
            <Image source={next} />
          </View>
          
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#ADE2FF" // Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >
         <View
            style={styles.touchView}
          >
            <Image source={info}/>
            <Text
              style={styles.text}
            >
              About
            </Text>
            <Image source={next} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#ADE2FF"// Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >
         <View
            style={styles.touchView}
          >
            <Image source={contact}/>
            <Text
              style={styles.text}
            >
              Contact
            </Text>
            <Image source={next} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.dashboardButton}
            underlayColor="#ADE2FF"// Color when the button is pressed
            onPress={() => console.log('Button Pressed')}
        >
         <View
            style={styles.touchView}
          >
            <Image source={terms}/>
            <Text
              style={styles.text}
            >
              Terms & Conditions
            </Text>
            <Image source={next} />
          </View>
        </TouchableHighlight>
      </View>
    </>
  )
}

export default Profile