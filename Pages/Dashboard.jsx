import React,{ useEffect,useContext, useState } from 'react'
import { View,StyleSheet,Text,Image,TouchableOpacity, ScrollView, TouchableHighlight,} from 'react-native'
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { bgContext } from '../Context/StateContext';
import Fav from "../assets/Fav.png";
import Fav2 from "../assets/Fav2.png"
import Profile from './Profile';
import onSave from '../functions/onSave';
import { AuthContext } from '../Context/AuthProvider';
import checkSave from '../functions/checkSave';
import onDelete from '../functions/onDelete';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
const Dashboard = () => {
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,click,setClicked,value,setValue] = useContext(bgContext);
    const [fav,setFav] = useState(true)
    const [bgcolor,setBackgroundColor] = useState('#EBF8FF');
    const [IngredientsColor,setIngredientsColor] = useState('transparent');
    const [NutrientsColor,setNutrientsColor] = useState('#1d1d1e');
    const [textColorN,setColorN] = useState('white');
    const [textColorI,setColorI] = useState('white');
    const [view,setView] = useState("Ingredients")
    const {user} = useContext(AuthContext);
    useEffect(() => {
        if (Navigation) {
            const state = Navigation.getState();
            ////console.log("navigation state:", state.routes[0].name);
            const Index = state.index;
            const location = state.routes[Index].name;
            location==="Dashboard"?(setLocation((prev) => [...prev, location]),setSize(60),setOpacity(1)) : (setLocation((prev) => [...prev, location]),setSize(0),setOpacity(0));
            ////console.log(state.routes[Index].name)
            } else {
            //console.log("Navigation context is undefined");
            }
      
        }, [Navigation]);

   
    useEffect(() => { 
        //console.log(data.HealthScore);
        if(info && info.score!=undefined){
           
            if(info.score==='A'){
                setBackgroundColor("#355e3b")
            }
            else if(info.score==='B'){
                setBackgroundColor("#32cd32")
            }
            else if(info.score==='C'){
                setBackgroundColor("#fdf718")
            }
            else if(info.score==='D'){
                setBackgroundColor("#ED7014")
            }
            else{
                setBackgroundColor("#AA0000")
            }
            //console.log("info",info.HealthScore);
            //console.log("bgColor",bgcolor);
        }
        if(info && info.code!=undefined){
            //console.log(info.barcode_info)
            const check = async() =>{
                const response = await checkSave(info.code, user);
                //console.log("response", response);
                setClicked(response);
            }   
            check()
        }

      }, [info]);
    useEffect(()=>{
        console.log("click",click)
        console.log("")
        console.log("mydataaa",info)
        console.log("")
        console.log("value:",value)
    },[click,info])
    const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor: '#141414',
            width:'100%',
            height:'700',
            //justifyContent:'space-around',
            //marginVertical:10,
            paddingTop:30,
            //alignItems:'center'

        },
        product:{
            width:340,
            height:234,
            backgroundColor:"#1d1d1e",
            marginVertical:5,
            //opacity:"0.5"
            borderRadius:20,
            justifyContent:'flex-start',
            //alignItems:'center',
            paddingHorizontal:5,
            // borderWidth:1.5,
            // borderColor:'black',
        },
        productName:{
            width:"100%",
            height:100,
            flexDirection:'colunm',
            //alignItems:'center',
            padding:10,
        },
        Top:{
            width:300,
            height:100,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            padding:10,
        },
        Middle:{
            width:325,
            height:100,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            padding:10,
        },
        save:{
            alignItems:'center',
            justifyContent:'flex-start',
            width:50,
            height:60,
            paddingRight:10

        },
        saveTouch:{
            width:45,
            height:40,
            justifyContent:"center",
            alignItems:"center",
        },
        picContainer:{
            width:150,
            height:170,
            justifyContent:'center',
            alignItems:'center',
            //padding:10,
            //backgroundColor:'black'
        },
       
        image:{
            width: "100%",
            height: "70%",
            objectFit:'scale-down'
            
        },
        
        Info:{
            width:"100%",
            minHeight:800,
            //backgroundColor:"#EBF8FF",
            marginVertical:10,
            //opacity:"0.5"
            //borderRadius:20,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingHorizontal:5,
            //borderTopWidth:1.5,
            //borderTopColor:'black',
        },
        heading:{
            width:"100%",
            height:50,
            flexDirection:"row",
            alignItems:'center',
            marginTop:10,
            //padding:10,
            justifyContent:'flex-start',
            marginLeft:30,
            //backgroundColor:"black"
            // borderColor:"white",
            // borderWidth:1.5,
            borderRadius:9,

        },
        TouchHeading:{
            width:"40%",
            height:47.5,
            justifyContent:'center',
            alignItems:'center',
            //color:'white',
            //backgroundColor:"#EBF8FF",
            //borderRadius:9,
            //marginHorizontal:0
            borderWidth:1
        },
        Ingredients:{
            width:"95%",
            //backgroundColor:"#EBF8FF",
            minHeight:500,
            //maxHeight:2000,
            marginVertical:20,
            borderRadius:20,
            alignItems:"center",
            justifyContent:"flex-start",
            paddingVertical:20,
            textAlign:'center',
            flexDirection: "column",
            

        },
        Nutrients:{
            width:"95%",
            //backgroundColor:"#EBF8FF",
            height:500,
            marginVertical:20,
            borderRadius:20,
            flexDirection: "column",
           
        },
        ingredientsView: {
            width: "100%",
            minHeight:60 ,
            marginVertical: 5,
            justifyContent: "center", // Centers vertically
            alignItems: "center", // Centers horizontally
            textAlign: "center", // Centers the text inside the View
            borderColor: "#2B2B2B",
            borderBottomWidth: 1.5,
            borderRadius:20,
            backgroundColor:'#141414'
          },
        navigator:{
            height:70,
            width:350,
            justifyContent:'flex-start',
            alignItems:'center',
            // borderWidth:1.5,
            // borderColor:'white'
            flexDirection:'row'
            
        },
        gradient: {
            flex: 1,
            
          },
        absoluteFill: {
            ...StyleSheet.absoluteFillObject,
        },
        Level:{
            //backgroundColor:'black',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: 100,
            height:100,
            marginLeft:10,
            margintop:0,
            flexDirection:'row',
            borderTopLeftRadius:20,
            
        },
        corner: {
        width:20,
        height:20,
        position: 'absolute',
        //backgroundColor:bgcolor,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        
        },
        topLeft: {
        top: 7,
        left:-4,
        
        },
        topRight: {
        top: 7,
        right:6,
        },
        bottomLeft: {
        bottom:-4,
        left: -4,
        },
        bottomRight: {
        bottom:-4,
        right:6,
        },
        viewSquare: {
        width:90,
        height:90,
        backgroundColor: '#1c1d1f',
        position: 'relative',
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',   
        //backgroundColor:'black'
        },
        gradientBorder: {
            padding: 3, // Width of the border
            borderRadius:40,
        },
        innerContent: {
            borderRadius:20, // Match the border radius minus padding
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width:130,


        },
    });
    const handleIngredients = () => { 
        setNutrientsColor("#1d1d1e")
        setIngredientsColor("transparent")
        setView("Ingredients")
        


    }
    const handleNutrients = () => { 
        setNutrientsColor("transparent")
        setIngredientsColor("#1d1d1e")
        setView("Nutrients")
       



}
    const handleFav = async() => {
        const response = click?(setClicked(false),await onDelete(user,info.code,info)):(setClicked(true),await onSave(user,info));
        console.log("info",response)
        setInfo(response)
    };
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([4,5,6]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

    const [items] = useState([
        {
          key: 1,
          name: 'Cupcake',
          calories: 356,
          fat: 16,
        },
        {
          key: 2,
          name: 'Eclair',
          calories: 262,
          fat: 16,
        },
        {
          key: 3,
          name: 'Frozen yogurt',
          calories: 159,
          fat: 6,
        },
        {
          key: 4,
          name: 'Gingerbread',
          calories: 305,
          fat: 3.7,
        },

       ]);
     
       const from = page * itemsPerPage;
       const to = Math.min((page + 1) * itemsPerPage, items.length);
     
        useEffect(() => {
         setPage(0);
       }, [itemsPerPage]);
    return (
    <ScrollView
        style={styles.Main}
        contentContainerStyle={{ alignItems: 'center' }} // Optional for centered content
    >
        <View
            style={styles.navigator}
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
                Dashboard
            </Text>
        </View>
        <View
           
            style={styles.product}
        >   
            
            <View
               style={styles.Top}
            >
                <View
                    style={styles.productName}
                >
                    <Text
                        style={{fontSize:15,color:'white',fontFamily:'Poppins-Medium'}}
                    >
                        {info && info.brandName}
                    </Text>
                    <Text
                        style={{fontSize:25,width:250,color:'white',fontFamily:'Poppins-Medium'}}
                    >
                        {info && info.name}
                    </Text>
                </View>
                <View
                    style={styles.save}
                >
                    <TouchableOpacity
                        style={styles.saveTouch}
                        onPress={()=>handleFav()}
                    >
                       {info && info.name?click?<Icon name="bookmark" color="white" size={35}/>:<Icon name="bookmark-outline" color="white" size={35}/>:<></>}
                    </TouchableOpacity>
                </View>
               
               
            </View>
            <View
                style={styles.Middle}
            >
                <View
                    style={styles.Level}
                >
                    
                    <View style={[styles.corner, styles.topLeft,{ backgroundColor:
                                                                    info.score === 'A' ? "#355e3b" :
                                                                    info.score === 'B' ? "#32cd32" :
                                                                    info.score === 'C' ? "#fdf718" :
                                                                    info.score === 'D' ? "#ED7014" : 
                                                                    "#AA0000",}]} />
                    <View style={[styles.corner, styles.topRight,{ backgroundColor:
                                                                    info.score === 'A' ? "#355e3b" :
                                                                    info.score === 'B' ? "#32cd32" :
                                                                    info.score === 'C' ? "#fdf718" :
                                                                    info.score === 'D' ? "#ED7014" : 
                                                                    "#AA0000",}]} />
                    <View style={[styles.corner, styles.bottomLeft,{ backgroundColor:
                                                                    info.score === 'A' ? "#355e3b" :
                                                                    info.score === 'B' ? "#32cd32" :
                                                                    info.score === 'C' ? "#fdf718" :
                                                                    info.score === 'D' ? "#ED7014" : 
                                                                    "#AA0000",}]} />
                    <View style={[styles.corner, styles.bottomRight,{ backgroundColor:
                                                                    info.score === 'A' ? "#355e3b" :
                                                                    info.score === 'B' ? "#32cd32" :
                                                                    info.score === 'C' ? "#fdf718" :
                                                                    info.score === 'D' ? "#ED7014" : 
                                                                    "#AA0000",}]} />
                    <View style={styles.viewSquare}>
                        
                        <Text
                            style={{fontSize:30,fontWeight:'400',color:
                            info.score === 'A' ? "#355e3b" :
                            info.score === 'B' ? "#32cd32" :
                            info.score === 'C' ? "#fdf718" :
                            info.score === 'D' ? "#ED7014" : 
                            "#AA0000",}}
                        >
                            {info.score}
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.picContainer}
                >
                   {info && <Image source={{ uri: info.image }} style={styles.image} />}
                </View>
            </View>                    
        </View>
       
        <View
            style={styles.Info}
        >
            <View
                style={styles.heading}
            >
                
                <LinearGradient
                    colors={['#954EDD', '#CD6AAB']}
                    style={[styles.gradientBorder,{marginRight:10}]}
                >
                    <TouchableHighlight
                        onPress={()=>handleIngredients()}
                        //underlayColor="#EBF8FF"
                        style={[styles.innerContent,{backgroundColor:IngredientsColor}]}
                    >
                        <Text
                            style={{fontSize:15,fontFamily:'Poppins-Light',color:textColorI}}
                        >
                            Ingredients
                        </Text>
                    </TouchableHighlight>
                </LinearGradient>
                <LinearGradient
                    colors={['#954EDD', '#CD6AAB']}
                    style={styles.gradientBorder}
                >
                    <TouchableHighlight
                        //underlayColor="#EBF8FF"
                        onPress={()=>handleNutrients()}
                        style={[styles.innerContent,{backgroundColor:NutrientsColor}]}
                    >
                        <Text
                            style={{fontSize:15,color:textColorN,fontFamily:'Poppins-Light'}}
                        >
                            Nutrition
                        </Text>
                    </TouchableHighlight>
                </LinearGradient>
                <TouchableOpacity
                    style={{width:40,height:40,marginLeft:20,justifyContent:"center",alignItems:'center',borderRadius:40}}
                >
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <Rect width="24" height="24" fill="#D9D9D9" />
                        </Mask>
                        <G mask="url(#mask0)">
                            <Path
                            d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                            fill="white"
                            />
                        </G>
                    </Svg>
                </TouchableOpacity>
                                
            </View>
            {view==="Ingredients"?
            <View
                style={styles.Ingredients}
            >
                {info && info.ingredients && info.ingredients.map((item,index)=>(
                    <View
                        style={styles.ingredientsView}
                        key={item}
                    >
                        <Text
                            style={{color:'white',width:"100%",fontSize:20, textAlign:'center',fontFamily:'Poppins-Light'}}
                           
                        >
                            {item}
                        </Text>
                    </View>
                ))}
            </View>
            :
            <View
            style={styles.Nutrients}
            >
                <DataTable> 
                    <DataTable.Header>
                        <DataTable.Title
                            textStyle={{ color:'white'}}
                        >
                            Typical Values
                        </DataTable.Title>
                        <DataTable.Title numeric 
                            textStyle={{ color:'white'}}
                        >
                            Per 100g    
                        </DataTable.Title>
                        {/*<DataTable.Title numeric>per portion (15g)</DataTable.Title>*/}
                    </DataTable.Header>

                    {info && info.nutrients["value"] && info.nutrients["value"].map((item) => (
                        <DataTable.Row key={item.key}>
                        <DataTable.Cell textStyle={{ color:'white'}} key={item.key}>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric textStyle={{ color:'white'}} key={item.key}>{item.value}</DataTable.Cell>
                        </DataTable.Row>
                    ))}

                   
                </DataTable>
            </View>}
        </View>
    </ScrollView>
  )
}

export default Dashboard