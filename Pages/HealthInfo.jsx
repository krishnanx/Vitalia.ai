import { View, Text, StyleSheet, TextInput } from 'react-native'

import React from 'react'
import AllergyButton from '../components/AllergyButton'

const HealthInfo = () => {
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
    mainContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#141414"
    },
    title: {
      color: "white",
      fontSize: 24,
      fontFamily: "Poppins-Bold"
    },
    box: {
      flexDirection: "row",
      width: "95%",
      justifyContent: "space-between"
    },
    input: {
      height: 45, // Adjust height as needed
      backgroundColor: "#252930",
      borderRadius: 10, // Change the border radius here
      color: "white",
      width: "99%",
      justifyContent: "center"
    },
    inputBox: {
      width: "45%",
    },
    inputText: {
      color: "#818181",
      fontSize: 12,
      marginLeft: 3
    },
    allergyBox: {
      flexWrap: "wrap",
      width: "95%",
      marginTop: 10,
      height: "40%"
    },
    textValue: {
      fontSize: 16,
      color: "white",
      marginLeft: 5
    }
  })
  return (
    <View style={styles.mainContainer}>
      <View style={{ alignItems: "center", justifyContent: "flex-start", gap: 10 }}>
        <Text style={styles.title}>Health Info</Text>

        <View style={styles.box}>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Gender</Text>
            <View style={styles.input}>
              <Text style={styles.textValue}>Male</Text>
            </View>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Age</Text>
            <View style={styles.input}></View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Height(cm)</Text>
            <View style={styles.input}></View>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Weight(KG)</Text>
            <View style={styles.input}></View>
          </View>

        </View>
        <View style={styles.box}>
          <View style={{ width: "99%" }}>
            <Text style={styles.inputText}>Activity Level</Text>
            <View style={styles.input}></View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{ width: "99%" }}>
            <Text style={styles.inputText}>LifeStyle</Text>
            <View style={styles.input}></View>
          </View>
        </View>
      </View>
      <View style={styles.allergyBox}>
        <Text style={styles.inputText}>Allergies</Text>
        <AllergyButton buttonIcon="barley" text="Gluten" selected={true} onPress={() => console.log("")} />
      </View>

    </View>
  )
}

export default HealthInfo



