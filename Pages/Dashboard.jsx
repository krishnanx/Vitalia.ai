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

const Dashboard = () => {
    const Navigation = useNavigation();
    const [state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,click,setClicked,value,setValue] = useContext(bgContext);
    const [fav,setFav] = useState(true)
    const [bgcolor,setBackgroundColor] = useState('#EBF8FF');
    const [IngredientsColor,setIngredientsColor] = useState('#ADE2FF');
    const [NutrientsColor,setNutrientsColor] = useState('transparent');
    const [textColorN,setColorN] = useState('white');
    const [textColorI,setColorI] = useState('black');
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
        if(info && info.HealthScore!=undefined){
           
            info.HealthScore<50?setBackgroundColor('#FF0000'):info.HealthScore>80?setBackgroundColor('#01ff01'):setBackgroundColor('#f5f501');
            //console.log("info",info.HealthScore);
            //console.log("bgColor",bgcolor);
        }
        if(info && info.barcode_info!=undefined){
            //console.log(info.barcode_info)
            const check = async() =>{
                const response = await checkSave(info.barcode_info, user);
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
            backgroundColor: 'black',
            width:'100%',
            height:'700',
            //justifyContent:'space-around',
            //marginVertical:10,
            paddingTop:20,
            //alignItems:'center'

        },
        product:{
            width:340,
            height:300,
            backgroundColor:"#EBF8FF",
            marginVertical:5,
            //opacity:"0.5"
            borderRadius:20,
            justifyContent:'flex-start',
            //alignItems:'center',
            paddingHorizontal:5,
            borderWidth:1.5,
            borderColor:'black',
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
        Level:{
            //backgroundColor:'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            marginLeft:20,
            margintop:20,
        },
        image:{
            width: "100%",
            height: "100%",
            objectFit:'scale-down'
            
        },
        viewSquare: {
            width: 100,
            height: 100,
            backgroundColor: '#EBF8FF',
            position: 'relative',
            marginTop:10,
            justifyContent: 'center',
            alignItems: 'center',   
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
            justifyContent:'center',
            //backgroundColor:"black"
            borderColor:"white",
            borderWidth:1.5,
            borderRadius:9,

        },
        TouchHeading:{
            width:"50%",
            height:47.5,
            justifyContent:'center',
            alignItems:'center',
            //color:'white',
            //backgroundColor:"#EBF8FF",
            //borderRadius:9,
            //marginHorizontal:0
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
            borderColor: "black",
            borderWidth: 1.5,
            borderRadius:20,
            backgroundColor:'#EBF8FF'
          },
    });
    const handleIngredients = () => { 
        setNutrientsColor("transparent")
        setIngredientsColor("#ADE2FF")
        setView("Ingredients")
        setColorI("black")
        setColorN("white")


    }
    const handleNutrients = () => { 
        setNutrientsColor("#ADE2FF")
        setIngredientsColor("transparent")
        setView("Nutrients")
        setColorI("white")
        setColorN("black")



}
    const handleFav = async() => {
        const response = click?(setClicked(false),await onDelete(user,info.barcode_info,info)):(setClicked(true),await onSave(user,info));
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
            style={styles.product}
        >
            <View
               style={styles.Top}
            >
                <View
                    style={styles.productName}
                >
                    <Text
                        style={{fontSize:15}}
                    >
                        {info && info.Brand}
                    </Text>
                    <Text
                        style={{fontSize:25,width:250}}
                    >
                        {info && info.Name}
                    </Text>
                </View>
                <View
                    style={styles.save}
                >
                    <TouchableOpacity
                        style={styles.saveTouch}
                        onPress={()=>handleFav()}
                    >
                       {info && info.Name?click?<Image source={Fav2} style={{width:20,height:30}}/>: <Image source={Fav} style={{width:20,height:30}}/>:<></>}
                    </TouchableOpacity>
                </View>
               
               
            </View>
            <View
                style={styles.Middle}
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
                            {info && info.HealthScore}
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.picContainer}
                >
                   {info && <Image source={{ uri: info.Image }} style={styles.image} />}
                </View>
            </View>
        </View>
        <View
            style={styles.Info}
        >
            <View
                style={styles.heading}
            >
               <TouchableHighlight
                    onPress={()=>handleIngredients()}
                    //underlayColor="#EBF8FF"
                    style={[styles.TouchHeading, {borderTopLeftRadius:10, borderBottomLeftRadius:10,backgroundColor:IngredientsColor}]}
               >
                    <Text
                        style={{fontSize:15,fontWeight:500,color:textColorI}}
                    >
                        Ingredients
                    </Text>
               </TouchableHighlight>
               <TouchableHighlight
                    //underlayColor="#EBF8FF"
                    onPress={()=>handleNutrients()}
                    style={[styles.TouchHeading,{borderBottomRightRadius:10, borderTopRightRadius:10,backgroundColor:NutrientsColor}]}
               >
                    <Text
                         style={{fontSize:15,fontWeight:500,color:textColorN}}
                    >
                        Nutrition
                    </Text>
               </TouchableHighlight>
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
                            style={{color:'black',width:"100%",fontSize:20, textAlign:'center'}}
                           
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

                    {info && info.Nutrients && info.Nutrients.map((item) => (
                        <DataTable.Row key={item.key}>
                        <DataTable.Cell textStyle={{ color:'white'}}>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric textStyle={{ color:'white'}}>{item.value}</DataTable.Cell>
                        </DataTable.Row>
                    ))}

                   
                </DataTable>
            </View>}
        </View>
    </ScrollView>
  )
}

export default Dashboard