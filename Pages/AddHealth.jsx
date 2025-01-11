import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { RadioButton, IconButton, Button } from 'react-native-paper';
import AllergyButton from '../components/AllergyButton';
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../Context/AuthProvider';
import addSupaDetails from '../functions/addSupaDetails';
const AddHealth = ({ route, navigation }) => {
  const { email, password, userDetails } = route.params;
  const [details, setDetails] = useState(userDetails);
  const [allergy , setAllergy] = useState("");
  const {user} = useContext(AuthContext)

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'black',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      color: 'white',
      textAlign: 'center',
    },
    subContainer: {
      width: '100%',
      alignItems: 'center',
    },
    subTitle: {
      fontSize: 16,
      color: 'white',
      alignSelf: 'flex-start',
      marginTop: 25,
      marginLeft: 10,
    },
    options: {
      marginTop: 20,
      width: '100%',
    },
    icons: {
      flexWrap: 'wrap',
      width: '100%',
      flexDirection: 'row',
      marginLeft:30
    },
    button: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray',
      height: 100,
      width: 100,
      marginTop: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button2:{
      borderRadius:3
    }
  });
  const handleNext = async()=>{
    
    if(!details.diet){
      alert("Please select a diet")
      return
    }
    if(!details.lifestyle){
      alert("Please select a lifestyle goal")
      return
    }
    const response = await addSupaDetails(user,details)
    console.log(details);
    //the details contains all the health data
    //add the supabse logic here
    navigation.navigate("GetStarted");
  }

  return (
    <ScrollView style={styles.mainContainer} >
      <Text style={styles.title}>Add Health Info</Text>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Dietary Preferences</Text>
        <View style={styles.options}>
          <RadioButton.Group
            onValueChange={(newValue) =>
              setDetails({ ...details, diet: newValue })
            }
            value={details.diet}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <RadioButton value="vegetarian" />
              <Text style={{ color: 'gray' }}>Vegetarian</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <RadioButton value="vegan" />
              <Text style={{ color: 'gray' }}>Vegan</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="non vegetarian" />
              <Text style={{ color: 'gray' }}>Non Vegetarian</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="jain" />
              <Text style={{ color: 'gray' }}>Jain</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Health and Lifestyle Goals</Text>
        <View style={styles.options}>
          <RadioButton.Group
            onValueChange={(newValue) =>
              setDetails({ ...details, lifestyle: newValue })
            }
            value={details.lifestyle}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <RadioButton value="weight loss" />
              <Text style={{ color: 'gray' }}>Weight Loss</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <RadioButton value="cardio training" />
              <Text style={{ color: 'gray' }}>Cardio Training</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="strength training" />
              <Text style={{ color: 'gray' }}>Strength Training</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="healthy heart" />
              <Text style={{ color: 'gray' }}>Healthy Heart</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Allergies and Aversions</Text>
          <View style={styles.icons}>
            
            {/* <TouchableHighlight>
              <View style={styles.button}>
                <IconButton icon="barley" size={50} />
                <Text style={{ color: 'gray', fontSize: 10 }}>Gluten</Text>
              </View>
            </TouchableHighlight> */}
            <AllergyButton buttonIcon="barley" text="Gluten" selected={details.disease=="Gluten"} onPress={()=>setDetails({...details,disease:"Gluten"})}/>
            <AllergyButton buttonIcon="corn" text="Corn" selected={details.disease=="Corn"} onPress={()=>setDetails({...details,disease:"Corn"})}/>
            <AllergyButton buttonIcon="egg-outline" text="Egg" selected={details.disease=="Egg"} onPress={()=>setDetails({...details,disease:"Egg"})}/>
            <AllergyButton buttonIcon="fish" text="Fish" selected={details.disease=="Fish"} onPress={()=>setDetails({...details,disease:"Fish"})}/>
            <AllergyButton buttonIcon="food-steak" text="Meat" selected={details.disease=="Meat"} onPress={()=>setDetails({...details,disease:"Meat"})}/>
            <AllergyButton buttonIcon="peanut-outline" text="Peanut" selected={details.disease=="Peanut"} onPress={()=>setDetails({...details,disease:"Peanut"})}/>
            <AllergyButton buttonIcon="bottle-soda" text="Milk" selected={details.disease=="Milk"} onPress={()=>setDetails({...details,disease:"Milk"})}/>
            <AllergyButton buttonIcon="duck" text="Poultry" selected={details.disease=="Poultry"} onPress={()=>setDetails({...details,disease:"Poultry"})}/>
            <AllergyButton buttonIcon="carrot" text="Root Vegetable" selected={details.disease=="Root Vegetable"} onPress={()=>setDetails({...details,disease:"Root Vegetable"})}/>
            <AllergyButton buttonIcon="soy-sauce" text="Soy" selected={details.disease=="Soy"} onPress={()=>setDetails({...details,disease:"Soy"})}/>
            <AllergyButton buttonIcon="yeast" text="Yeast" selected={details.disease=="Yeast"} onPress={()=>setDetails({...details,disease:"Yeast"})}/>
            <AllergyButton buttonIcon="beehive-outline" text="Honey" selected={details.disease=="Honey"} onPress={()=>setDetails({...details,disease:"Honey"})}/>
            <AllergyButton buttonIcon="mushroom" text="Fungus" selected={details.disease=="Fungus"} onPress={()=>setDetails({...details,disease:"Fungus"})}/>
            <AllergyButton buttonIcon="liquor" text="Alcohol"selected={details.disease=="Alcohol"} onPress={()=>setDetails({...details,disease:"Alcohol"})}/>
            <AllergyButton buttonIcon="close" text="Clear Selection"selected={false} onPress={()=>setDetails({...details,disease:""})}/>
          </View>
          <View style={{width:"85%" , flexDirection:"row" ,justifyContent:"space-between", marginTop:15}}>
            <Button mode="contained" style={styles.button2} onPress={()=>handleNext()}>Back</Button>
            <Button mode="contained" style={styles.button2} onPress={()=>handleNext()}>Next</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddHealth;
