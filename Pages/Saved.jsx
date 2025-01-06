import React,{useContext,useEffect,useState} from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthProvider';
import handlePull from '../functions/handlePull';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import onDelete from '../functions/onDelete';
import checkSave from '../functions/checkSave';
import { useRoute } from '@react-navigation/native';

const Saved = () => {
  const {user} = useContext(AuthContext)

  const Navigation = useNavigation();
  const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,code,setCode,click,setClicked,value,setValue,bookmarks,setBookmarks,scanned,setScanned] = useContext(bgContext);
  const [bgcolor,setBackgroundColor] = useState('#ADE2FF');
  const route = useRoute();
  console.log("Route Object in Saved:", route);
  const { bookmarks: routeBookmarks } = route.params || {};
  const object = routeBookmarks["_j"]
  const [bookmarkss, setBookmarkss] = useState(object);
  useEffect(()=>{
    console.log(bookmarkss)
  },[bookmarkss])
  console.log("Route Bookmarks:", routeBookmarks['_j']);
  const toggleBookmark = async (item) => {
    await onDelete(user, item.code, []);
    check();
    
    
  };
  
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
  }, [Navigation]);
  /*useEffect(()=>{
    const checkK = async() =>{
      const response = await handlePull(user);
      console.log("value:",response)
      setValue(response);
    }
    checkK()
  
},[fav])*/

  const check = async() => {
    const response = await handlePull(user,"Saved");
    console.log("footer response:",response);
    setValue(response);
  }
  const [fav,setFav] = useState(true)
  /*useEffect(()=>{
    console.log("saved value:",value)

  },[value])*/
  const styles = StyleSheet.create({
      Main:{
        flex:1,
        backgroundColor: 'black', 
        width:'100%',
        height:700,
        padding:10,
      },
      blocks:{
        width:'100%',
        height:200,
        backgroundColor:'#1c1d1f',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderRadius:15,
        //borderWidth:1.5,
        //borderColor:'pink',
        flexDirection:'row',
        padding:0,

      },
      image:{
        width: "100%",
        height: "80%",
        objectFit:'scale-down'
      },
      imageView:{
        width:"50%",
        height:250,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
      },
      Level:{
        //backgroundColor:'black',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 70,
        height: 70,
        marginLeft:20,
        margintop:20,
        flexDirection:'row',
        
      },
      product:{
        //backgroundColor:'black',
        width:'100%',
        height:250,
        flexDirection:'row'
      },
      corner: {
        width: 20,
        height: 20,
        position: 'absolute',
        //backgroundColor:bgcolor,
      },
      topLeft: {
        top: 1,
        left:-5,
      },
      topRight: {
        top: 1,
        right: -5,
      },
      bottomLeft: {
        bottom:-9,
        left: -5,
      },
      bottomRight: {
        bottom: -9,
        right: -5,
      },
      viewSquare: {
        width:70,
        height:70,
        backgroundColor: '#1c1d1f',
        position: 'relative',
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',   
        //backgroundColor:'black'
      },
      info:{    
        width:'70%',
        height:200,
        justifyContent:'center',
        alignItems:'center',
        //borderWidth:1.5,
        //borderColor:'pink',
        flexDirection:'row',

      },
      Score:{
        width:'25%',
        height:200,
        justifyContent:'space-between',
        alignItems:'center',
        //borderWidth:1,
        //borderColor:'black',

      },
      imageContainer:{
        width:100,
        height:150,
        //borderWidth:1.5,
        //borderColor:'pink',
        justifyContent:'center',
        alignItems:'center',
      },
      name:{
        width:160,
        height:200,
        //borderWidth:1.5,
        //borderColor:'pink',
        justifyContent:'center'
      },
      scoreView:{
        width:'100%',
        height:150,
        //backgroundColor:'black',
        justifyContent:'flex-start',
        paddingTop:20


      },
      save:{
        width:"100%",
        height:50,
        //backgroundColor:'pink',
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        padding:10
      },
      saveFunc:{
        //backgroundColor:'black',
        width:30,
        height:40,
        justifyContent:'center',
        alignItems:'center'
      }

  })
  return (
  <ScrollView 
    style={styles.Main}
    contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
  >
    {Array.isArray(value) && value.length > 0 ? 
    
    (value.map((item,index)=>{
      //console.log('Item Code:', item.code);
      //console.log('Bookmark Status:', bookmarks[`${item.code}`]);
      //console.log('Bookmarks Object:', bookmarks);


      return(
      <View
        style={styles.blocks}
        key={item.code}
      >
        <View
          style={styles.info}
        >
          <View
            style={styles.imageContainer}
          >
           <Image source={{uri: item.image}} style={styles.image}/>
          </View>
          <View
            style={styles.name}
          >
            <Text
               style={{textAlign:'center',fontSize:22,color:'white'}}
            >
              {item.brandName}
            </Text>
            <Text
              style={{textAlign:'center',fontSize:20,color:'white'}}
            >
              {item.name}
            </Text>
          </View>
        </View>
        <View
          style={styles.Score}
        >
          <View
            style={styles.save}
          >
            <TouchableOpacity
              style={styles.saveFunc}
              onPress={() => toggleBookmark(item)} // Correct usage
              activeOpacity={0.5}
            >
                <Icon
                  name="trash-can-outline"
                  size={30}
                  color="white"
                />
            </TouchableOpacity>
          </View>
          <View
            style={styles.scoreView}
          >
            <View
                style={styles.Level}
              >
                <View style={[styles.corner, styles.topLeft,{ backgroundColor:
                                                              item.HealthScore < 50
                                                                ? '#FF0000'
                                                                : item.HealthScore > 80
                                                                ? '#01ff01'
                                                                : '#f5f501',}]} />
                <View style={[styles.corner, styles.topRight,{ backgroundColor:
                                                                item.HealthScore < 50
                                                                  ? '#FF0000'
                                                                  : item.HealthScore > 80
                                                                  ? '#01ff01'
                                                                  : '#f5f501',}]} />
                <View style={[styles.corner, styles.bottomLeft,{ backgroundColor:
                                                                item.HealthScore < 50
                                                                  ? '#FF0000'
                                                                  : item.HealthScore > 80
                                                                  ? '#01ff01'
                                                                  : '#f5f501',}]} />
                <View style={[styles.corner, styles.bottomRight,{ backgroundColor:
                                                                item.HealthScore < 50
                                                                  ? '#FF0000'
                                                                  : item.HealthScore > 80
                                                                  ? '#01ff01'
                                                                  : '#f5f501',}]} />
                <View style={styles.viewSquare}>
                    <Text
                        style={{fontSize:50,fontWeight:'400',color:
                          item.HealthScore < 50
                            ? '#FF0000'
                            : item.HealthScore > 80
                            ? '#01ff01'
                            : '#f5f501',}}
                    >
                        {item.score}
                    </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )}))
    :
    <Text
      style={{justifyContent:'center',alignItems:'center'}}
    >
      NO
    </Text>}
  </ScrollView>
  )
}

export default Saved