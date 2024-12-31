import React,{useContext,useEffect,useState} from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthProvider';
import handlePull from '../functions/handlePull';
const Saved = () => {
  const {user} = useContext(AuthContext)
  const Navigation = useNavigation();
  const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,data,setData,value,setValue,click,setClicked] = useContext(bgContext);
  const [bgcolor,setBackgroundColor] = useState('pink');
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
  useEffect(()=>{
    const check = async() =>{
      const response = await handlePull(user);

      ////console.log(response)
      setValue(response);
    }
    check()
  
  },[click])
  const styles = StyleSheet.create({
      Main:{
          flex:1,
          backgroundColor: 'black',
          width:'100%',
          height:700,
          padding:20,
      },
      blocks:{
        width:'85%',
        height:350,
        backgroundColor:'#ADE2FF',
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        borderRadius:20,
        borderWidth:1.5,
        borderColor:'black',
        flexDirection:'column'

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
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginLeft:20,
        margintop:20,
      },
      name:{
        width:'100%',
        height:50,
      },
      product:{
        //backgroundColor:'black',
        width:'100%',
        height:250,
        flexDirection:'row'
      },
      info:{
        width:150,
        justifyContent:'center',
        alignItems:'center',
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
        width: 100,
        height: 100,
        backgroundColor: '#ADE2FF',
        position: 'relative',
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',   
    },

  })
  return (
  <ScrollView 
    style={styles.Main}
    contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
  >
    {value.length > 0 ? 
    
    (value.map((item,index)=>{
      
      return(
      <View
        style={styles.blocks}
      >
        <View
          style={styles.name}
        >
          <Text
            style={{textAlign:'center',fontSize:25}}
          >
            {item.name}
          </Text>
        </View>
        <View
          style={styles.product}
        >
          <View
            style={styles.info}
          >
            <View
              style={styles.Level}
            >
              <View style={[styles.corner, styles.topLeft,{backgroundColor:bgcolor}]} />
              <View style={[styles.corner, styles.topRight,{backgroundColor:bgcolor}]} />
              <View style={[styles.corner, styles.bottomLeft,{backgroundColor:bgcolor}]} />
              <View style={[styles.corner, styles.bottomRight,{backgroundColor:bgcolor}]} />
              <View style={styles.viewSquare}>
                  <Text
                      style={{fontSize:50,fontWeight:'400',color:bgcolor}}
                  >
                      {item.score}
                  </Text>
              </View>
            </View>
          </View>
         
          <View
            style={styles.imageView}
          >
            <Image source={{ uri: item.image }} style={styles.image}/>
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