import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, IconButton, Button } from 'react-native-paper'
import React ,{useState} from 'react'



const Pro = () => {

    const [plan , setPlan] =useState({
        monthly:false, //means button1
        quarterly:false, //Quarterly
        yearly:false //Yearly
    })
    
    const handleOnSelection1 = ()=>{
        setPlan({
            monthly:true,
            quarterly:false,
            yearly:false
        })
    }
    
    const handleOnSelection2 = ()=>{
        setPlan({
            monthly:false,
            quarterly:true,
            yearly:false
        })
    }
    
    const handleOnSelection3 = ()=>{
        setPlan({
            monthly:false,
            quarterly:false,
            yearly:true
        })
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
            marginTop:10,
            color:"white"
        },
        detailBox:{
            marginBottom:0,
        },
        features:{
            alignItems:"center",
            width:"100%",
            flexDirection:"row",
        },
        pricing:{
            height:"50%",
            backgroundColor:'#070707',
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
        color:"white"
      }
    })
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Unlock NutriGen</Text>
      <View style={styles.detailBox}>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' colr size={20}/>
            <Text style={styles.featuresText}>Get Personalised Recommendations</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text style={styles.featuresText}>Unlock Allergies</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text style={styles.featuresText}>Uncover Potential Carcinogens</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text style={styles.featuresText}>Decipher ingredient and Nutrition list</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text style={styles.featuresText}>Access 1500+ Recipes</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text style={styles.featuresText}>Access special offers and discounts</Text>
        </View>
        
      </View>
      <View style={styles.pricing}>
        <Text style={{fontSize:16, color:"white"}}>SUBSCRIBE & GET UNLIMITED BENEFITS</Text>
        <View style={styles.priceContainer}>
            <Button style={{
                    height:150,
                    width:120,
                    backgroundColor:"#1d1d1e",
                    borderRadius:10,
                    flexDirection:"column",
                    borderWidth:3,
                    borderColor: plan.monthly?'#007bff':"#1d1d1e"
                }} onPress={handleOnSelection1}>
                <View style={styles.insideButton }>
                    <Text style={styles.time}>Monthly</Text>
                    <Text style={styles.price}>Rs 199/-</Text>
                </View>
            </Button>
            <Button style={{
                    height:150,
                    width:120,
                    backgroundColor:"#1d1d1e",
                    borderRadius:10,
                    flexDirection:"column",
                    borderWidth:3,
                    borderColor: plan.quarterly?'#007bff':"#1d1d1e"
                }} onPress={handleOnSelection2}>
                <View style={styles.insideButton}>
                    <Text style={styles.time}>Quarterly</Text>
                    <Text style={styles.price}>Rs 499/-</Text>
                </View>
            </Button>
            <Button style={{
                    height:150,
                    width:120,
                    backgroundColor:"#1d1d1e",
                    borderRadius:10,
                    flexDirection:"column",
                    borderWidth:3,
                    borderColor: plan.yearly?'#007bff':"#1d1d1e"
                }} onPress={handleOnSelection3}>
                <View style={styles.insideButton}>
                    <Text style={styles.time}>Yearly</Text>
                    <Text style={styles.price}>Rs 1499/-</Text>
                </View>
            </Button>
        </View>
        <Button
            textColor='#fff'
            style={styles.button}
            onPress={onhandleSubscribe}
            >
            SUBSCRIBE
        </Button>
        <Text style={{color:"white", fontSize:10}}>Terms and Conditions Applied</Text>
      </View>
    </View>
  )
}



export default Pro