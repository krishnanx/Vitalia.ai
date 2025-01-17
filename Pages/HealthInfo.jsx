import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';

import React from 'react'
import AllergyButton from '../components/AllergyButton'
import { useNavigation } from '@react-navigation/native';

const HealthInfo = () => {
  const navigation = useNavigation()
  const allergyButtons = {
    "Gluten": "barley",
    "Corn": "corn",
    "Egg": "egg-outline",
    "Fish": "fish",
    "Meat": "food-steak",
    "Peanut": "peanut-outline",
    "Milk": "bottle-soda",
    "Poultry": "duck",
    "Root Vegetable": "carrot",
    "Soy": "soy-sauce",
    "Yeast": "yeast",
    "Honey": "beehive-outline",
    "Fungus": "mushroom",
    "Alcohol": "liquor"
  };

    const styles = StyleSheet.create({
        mainContainer:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#141414"
        },
        title:{
            color:"white",
            fontSize:24,
            fontFamily:"Poppins-Bold"
        },
        box:{
            flexDirection:"row",
            width:"95%",
            justifyContent:"space-between"
        },
        input: {
            height: 45, // Adjust height as needed
            backgroundColor:"#252930",
            borderRadius: 10, // Change the border radius here
            color:"white",
            width:"99%",
            justifyContent:"center"
          },
        inputBox:{
            width:"45%",
        },
        inputText:{
            color:"#818181" ,
            fontSize:12,
            marginLeft:3 
        },
        allergyBox:{
          flexWrap:"wrap",
          width:"95%",
          marginTop:10,
          height:"40%"
        },
        textValue:{
          fontSize:16,
          color:"white",
          marginLeft:5
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
    })
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navigator} >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
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
              <G mask="url(#mask0_82_433)">
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
          Health Info
        </Text>
        </View>
      <View style={{alignItems:"center" , justifyContent:"flex-start",gap:10}}>

      <View  style={styles.box}>
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Gender</Text>
            <View style={styles.input}>
              <Text style={styles.textValue}>Male</Text>
            </View>
        </View>

        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Age</Text>
            <View style={styles.input}>
              <Text style={styles.textValue}>50</Text>
            </View>
        </View>
      </View>
      <View style={styles.box}>
      <View style={styles.inputBox}>
            <Text style={styles.inputText}>Height(cm)</Text>
            <View style={styles.input}>
            <Text style={styles.textValue}>158</Text>
            </View>
        </View>

        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Weight(KG)</Text>
            <View style={styles.input}>
            <Text style={styles.textValue}>122</Text>
            </View>
        </View>
        
      </View>
      <View style={styles.box}>
        <View style={{width:"99%"}}>
            <Text style={styles.inputText}>Activity Level</Text>
            <View style={styles.input}>
            <Text style={styles.textValue}>Insanely Active</Text>
            </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={{width:"99%"}}>
            <Text style={styles.inputText}>LifeStyle</Text>
            <View style={styles.input}>
            <Text style={styles.textValue}>Non Vegetarian</Text>
            </View>
        </View>
      </View>
      </View>
      <View style={styles.allergyBox}>
        <Text style={styles.inputText}>Allergies</Text>
        <AllergyButton buttonIcon="barley" text="Gluten" selected={true}/>
      </View>
      
    </View>
  )
}

export default HealthInfo



