import React,{useEffect,useContext,useState} from 'react'
import { bgContext } from '../Context/StateContext';
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Burger from "../assets/burger.png"
import useLogOut from '../firebaseHooks/useLogOut';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';
import { useRoute } from '@react-navigation/native';
import { AuthContext, useAuth } from '../Context/AuthProvider';
import handlePull from '../functions/handlePull';
import { Searchbar } from 'react-native-paper';
import Search from "../assets/icons/search.svg"
import Svg, { Path } from "react-native-svg";
import { font } from '../Context/fontContext'
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
const Home = () => {
    const route = useRoute();
    
    const {fontsLoaded} = useContext(font)
    const [searchQuery, setSearchQuery] = React.useState('');
    const {history: his } = route.params || {};
    const {user} = useContext(AuthContext)
    //console.log("his:",his["_j"]);
    //const {logout , loading , error} = useLogOut();
    //const navigation = useNavigation();
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,code,setCode,click,setClicked,value,setValue,bookmarks,setBookmarks,scanned,setScanned,name,setName] = useContext(bgContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            // console.log("navigation state:", state.routes[0]);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="Home"||location==="jane"||location==="Scan"||location==="Saved"||location==="Profile"? (setLocation((prev) => [...prev, location]),setSize(60),setOpacity(1)) : (setLocation((prev) => [...prev, location]),setSize(0),setOpacity(0));
            console.log(state.routes)
          } else {
            //console.log("Navigation context is undefined");
          }
      }, [Navigation]);
    useEffect(()=>{
        //console.log("HOME HISTORY:",scanned)
        const check = async() => {
            //console.log("user in home",user)
            const response = await handlePull(user,"History")
            const value = await handlePull(user,"Users")
            // console.log("response???:",response)
            // console.log(value[0])
            setName(value[0].Fname)
            setScanned(response)
            //console.log(user)
            return response;

        }
        const response = check();
        

    },[user])
    
    const handleHistory = (item) => {
        setInfo(item);
        Navigation.navigate("Dashboard")
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexGrow:1,
            flexDirection: 'column', // Main axis is vertical
            backgroundColor: '#141414',
            //justifyContent:"space-between",
            //alignItems:"center",
            width:'100%',
            paddingTop:10
        },
        header:{
            //marginTop:40,
            height:50, // Fixed height
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
            height:50,
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
            marginBottom:20,
           
        },
        hero:{
            //backgroundColor:'white',
            width:'100%',
            height:730,
            flexDirection:'column',
            justifyContent:'space-between',
            paddingHorizontal:20,
            paddingVertical:20,
        },
        HeroTop:{
            height:400,
            marginTop:40,
            alignItems:"center",
            flexDirection:'column',
            width:'100%'
        },
        HeroBottom:{
            height:300
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

    const loading = false;
    const insets = useSafeAreaInsets();
    

      
  return (
       <SafeAreaProvider>
            <ScrollView
                style={[
                    styles.container,
                  ]}
                contentContainerStyle={{alignItems:"center",height:1000}}               
            >
            <View style={styles.HeroTop}>
                    <Searchbar
                        style={{padding:0,margin:0,width:350}}
                        icon={()=>(
                            <View
                                style={{width:40,height:40,backgroundColor:'black',borderRadius:0,justifyContent:'center',alignItems:'center'}}
                            >
                                <Svg width={30} height={30} viewBox="0 -960 960 960">
                                    <Path
                                        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
                                        fill="white"
                                    />
                                </Svg>
                            </View>   
                            
                        )}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                   
                    <View
                        style={{width:"90%",height:100,marginTop:50,justifyContent:'center',padding:10}}
                    >
                        <Text
                            style={{fontSize:40,color:'white',fontFamily:'Poppins-Medium',textAlign:'left'}}
                        >
                        {name!=""?"Hi, "+`${name}`+"!":""}
                        </Text>
                        <View
                            style={{flexDirection:'row',height:20,justifyContent:'flex-start',alignItems:'center'}}
                        >
                           
                            <Svg width={20} height={20} viewBox="0 -960 960 960">
                                    <Path
                                        d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"
                                        fill="#FFC300"
                                    />
                                </Svg>
                            <Text
                                style={{fontSize:10,color:'white',fontFamily:'Poppins-Medium',textAlign:'left',marginLeft:5}}
                            >
                                Prime member
                            </Text>
                        </View>
                       
                    </View>
                    {/* {<Text style={styles.textHero}>
                        SCANNED HISTORY
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
                        {/* <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>}
                        {scanned && Array.isArray(scanned) && scanned.length>0?(
                            scanned.map((item,index)=>{
                                return(
                                    <Card
                                        key = {item.code}
                                        title={item.name}
                                        imageURL={item.image}
                                        score={item.score}
                                        onPress={() => handleHistory(item)}
                                    />
                                )
                            })
                        ):(<Text style={{color:'white'}}>NONE</Text>)}
                        
                        
                       
                    </ScrollView>*/}
                    <View
                        style={{width:'95%',/*borderWidth:1.5,borderColor:"white"*/justifyContent:'center'}}
                    >
                        <Text
                            style={{color:'white',fontSize:25,fontFamily:'Poppins-SemiBold',paddingLeft:20}}
                        >
                            Scanned History
                        </Text>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={{alignItems:'center',justifyContent:'center'}}
                        >
                            {scanned && !loading && Array.isArray(scanned) && scanned.length>0?(
                                scanned.map((item,index)=>{
                                    return(
                                        <Card
                                            key = {item.code}
                                            title={item.name}
                                            imageURL={item.image}
                                            score={item.score}
                                            onPress={() => handleHistory(item)}
                                            
                                        />
                                    )
                                })
                            ):(
                                <View
                                    style={{width:380,height:200,justifyContent:'center',alignItems:'center'}}
                                >
                                    <ActivityIndicator animating={true} color={MD2Colors.white} style={{zIndex:6,justifyContent:'center',alignItems:'center',paddingLeft:5}} size={50}/> 
                                </View>
                            )}
                        </ScrollView>
                       
                    </View>
                </View>
                <View
                    style={{width:'95%',/*borderWidth:1.5,borderColor:"white"*/justifyContent:'center',marginTop:130}}
                >
                    <Text
                        style={{color:'white',fontSize:25,fontFamily:'Poppins-SemiBold',paddingLeft:20}}
                    >
                       Recommended for you
                    </Text>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{alignItems:'center',justifyContent:'center'}}
                    >
                        {scanned && !loading && Array.isArray(scanned) && scanned.length>0?(
                            scanned.map((item,index)=>{
                                return(
                                    <Card
                                        key = {item.code}
                                        title={item.name}
                                        imageURL={item.image}
                                        score={item.score}
                                        onPress={() => handleHistory(item)}
                                        
                                    />
                                )
                            })
                        ):(
                            <View
                                style={{width:380,height:200,justifyContent:'center',alignItems:'center'}}
                            >
                                <ActivityIndicator animating={true} color={MD2Colors.white} style={{zIndex:6,justifyContent:'center',alignItems:'center',paddingLeft:5}} size={50}/> 
                            </View>
                        )}
                    </ScrollView>
                </View>
                {/* <View  style={styles.HeroBottom}>
                    <Text style={styles.textHero}>
                        RECOMMENDER FOR YOU
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
                        {/* <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>}
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
                </View> */}
            </ScrollView>
        </SafeAreaProvider>
       
  )
}

export default Home