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
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft:10,
            marginBottom:20,
            marginTop:10
        },
        detailBox:{
            marginBottom:10
        },
        features:{
            alignItems:"center",
            width:"100%",
            flexDirection:"row",
        },
        pricing:{
            height:"50%",
            backgroundColor:'black',
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
            color:"white"
        },
        price:{
            fontSize:16,
            fontWeight:"bold"
        },
        button:{
        width: '90%',
        backgroundColor: '#007bff',
    
      },
    })
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Unlock NutriGen</Text>
      <View style={styles.detailBox}>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' colr size={20}/>
            <Text>Get Personalised Recommendations</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text>Unlock Allergies</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text>Uncover Potential Carcinogens</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text>Decipher ingredient and Nutrition list</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text>Access 1500+ Recipes</Text>
        </View>
        <View style={styles.features}>
            <IconButton icon="check-circle" iconColor='#007bff' size={20}/>
            <Text>Access special offers and discounts</Text>
        </View>
        
      </View>
      <View style={styles.pricing}>
        <Text style={{fontSize:16, color:"white"}}>SUBSCRIBE & GET UNLIMITED BENEFITS</Text>
        <View style={styles.priceContainer}>
            <Button style={{
                    height:150,
                    width:120,
                    backgroundColor:"gray",
                    borderRadius:10,
                    flexDirection:"column",
                    borderWidth:3,
                    borderColor: plan.monthly?'#007bff':"gray"
                }} onPress={handleOnSelection1}>
                <View style={styles.insideButton }>
                    <Text style={styles.time}>Monthly</Text>
                    <Text style={styles.price}>Rs 199/-</Text>
                </View>
            </Button>
            <Button style={{
                    height:150,
                    width:120,
                    backgroundColor:"gray",
                    borderRadius:10,
                    flexDirection:"column",
                    borderWidth:3,
                    borderColor: plan.quarterly?'#007bff':"gray"
                }} onPress={handleOnSelection2}>
                <View style={styles.insideButton}>
                    <Text style={styles.time}>Quarterly</Text>
                    <Text style={styles.price}>Rs 499/-</Text>
                </View>
            </Button>
            <Button style={{
                    height:150,
                    width:120,
                    backgroundColor:"gray",
                    borderRadius:10,
                    flexDirection:"column",
                    borderWidth:3,
                    borderColor: plan.yearly?'#007bff':"gray"
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