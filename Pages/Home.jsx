import React,{useEffect,useContext} from 'react'
import { bgContext } from '../Context/StateContext';
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import trial from "../assets/trial.png";
import useLogOut from '../firebaseHooks/useLogOut';
import { useNavigation } from '@react-navigation/native';
import Auth from '../firebasefile/Auth';


const Home = () => {

    const {logout , loading , error} = useLogOut();
    const navigation = useNavigation();
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity] = useContext(bgContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            ////console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="Home"||location==="jane"||location==="Scan"||location==="Saved"||location==="Profile"? (setLocation((prev) => [...prev, location]),setSize(60),setOpacity(1)) : (setLocation((prev) => [...prev, location]),setSize(0),setOpacity(0));
            ////console.log(state.routes[Index].name)
          } else {
            //console.log("Navigation context is undefined");
          }
      }, [Navigation]);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column', // Main axis is vertical
            paddingTop:40,
            backgroundColor: 'black',
            justifyContent:"space-between"
        },
        header:{
            //marginTop:40,
            height:'50', // Fixed height
            backgroundColor: '#D6F1FF',
            alignItems: 'center',
            borderBottomWidth:0.5,
            justifyContent:"space-around",
            borderBottomColor:'white',
            flexDirection:"row"
        },
       
        image: {
            width: 200,
            height: 200,
        },
        scanbox:{
            height:'50',
            position:'relative'
        },
        Scan:{
            position: 'absolute',
            
        },
   
        text:{
            color:'#C7D1C8',
            fontSize:20,
            fontFamily: 'Arial',
            textAlign:'center',
            alignItems:'center'
        },
        textHero:{
            color:'#C7D1C8',
            fontSize:20,
            fontFamily: 'Arial',
            marginBottom:'20',
           
        },
        hero:{
            //backgroundColor:'white',
            width:'100%',
            height:'730',
            flexDirection:'column',
            justifyContent:'space-between',
            paddingHorizontal:'20',
            paddingVertical:'50',
        },
        HeroTop:{
            height:'300'
        },
        HeroBottom:{
            height:'300'
        },
        trial:{
            marginHorizontal: 10,
        },
        button:{
            width: '10%',
            backgroundColor: '#007bff',
            marginTop: 10,
          },
        
    });

   
    
    

      
  return (
       <View style={styles.container}>
           <View style={styles.hero}>
                <View style={styles.HeroTop}>
                    <Text style={styles.textHero}>
                        SCANNED HISTORY
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                    </ScrollView>
                </View>
                <View  style={styles.HeroBottom}>
                    <Text style={styles.textHero}>
                        RECOMMENDER FOR YOU
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                    </ScrollView>
                </View>
           </View>
        </View>
       
  )
}

export default Home