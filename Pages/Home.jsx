import React,{useEffect,useContext} from 'react'
import { bgContext } from '../Context/StateContext';
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import trial from "../assets/trial.png";
import Burger from "../assets/burger.png"
import useLogOut from '../firebaseHooks/useLogOut';
import { useNavigation } from '@react-navigation/native';
import Auth from '../firebasefile/Auth';
import Card from '../components/Card';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthProvider';
import handlePull from '../functions/handlePull';
const Home = () => {
    const route = useRoute();
    const {history: his } = route.params || {};
    const {user} = useContext(AuthContext)
    //console.log("his:",his["_j"]);
    const {logout , loading , error} = useLogOut();
    //const navigation = useNavigation();
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,code,setCode,click,setClicked,value,setValue,bookmarks,setBookmarks,scanned,setScanned] = useContext(bgContext);
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
    useEffect(()=>{
        //console.log("HOME HISTORY:",scanned)
        const check = async() => {
            const response = await handlePull(user,"History")
            console.log("response???:",response)
            setScanned(response)
            return response;
        }
        const response = check();
        

    },[user])
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column', // Main axis is vertical
            paddingTop:10,
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
                        {/* <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/> */}
                        {scanned && Array.isArray(scanned) && scanned.length>0?(
                            scanned.map((item,index)=>{
                                return(
                                    <Card
                                        title={item.name}
                                        imageURL={item.image}
                                        score={20}
                                        onPress={() => alert('Learn More Pressed!')}
                                    />
                                )
                            })
                        ):(<Text style={{color:'white'}}>NONE</Text>)}
                        
                        
                       
                    </ScrollView>
                </View>
                <View  style={styles.HeroBottom}>
                    <Text style={styles.textHero}>
                        RECOMMENDER FOR YOU
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
                        {/* <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/> */}
                        <Card
                            title="American Burger"
                            image={Burger}
                            score={20}
                            onPress={() => alert('Learn More Pressed!')}
                        />
                        <Card
                            title="American Burger"
                            image={Burger}
                            score={50}
                            onPress={() => alert('Learn More Pressed!')}
                        />
                        <Card
                            title="American Burger"
                            image={Burger}
                            score={50}
                            onPress={() => alert('Learn More Pressed!')}
                        />
                        <Card
                            title="American Burger"
                            image={Burger}
                            score={50}
                            onPress={() => alert('Learn More Pressed!')}
                        />
                    </ScrollView>
                </View>
           </View>
        </View>
       
  )
}

export default Home