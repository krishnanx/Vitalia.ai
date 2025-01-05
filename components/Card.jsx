import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import ScoreView from './ScoreView';

const Card = ({ title, image, imageURL, score, onPress }) => {
    const styles = StyleSheet.create({
        card: {
          backgroundColor: '#1d1d1e',
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4,
          margin: 10,
          overflow: 'hidden',
          width:250
        },
        imageContainer:{
          flexDirection:"row",
          alignContent:"center",
        },
        image: {
          width: '40%',
          height: 100,
        },
        content: {
          marginTop:20,
          padding: 0,
          flexDirection:"row",
          justifyContent:"space-between"
        },
        title: {
          fontSize: 15,
          fontWeight: 'bold',
          marginBottom: 0,
          marginTop:10,
          color:"white",
          marginLeft:7
        },
        description: {
          fontSize: 14,
          color: '#666',
        },
        button: {
            width:"90%",
            fontSize:5
        },
        buttonText: {
          color: '#fff',
          fontSize: 10,
          fontWeight: 'bold',
        },
        box: {
          marginLeft:30,
          
        },
      });
      const [savePress , setSavePress] = useState(false);
      const handleOnSavePress =()=>{
        if(savePress){
            //If the button is already pressed/saved
            setSavePress(false);
            //add the backend logic
        }else{
            setSavePress(true); 

        }
      }
  return (
    <View style={styles.card}>
        <IconButton 
            icon={!savePress?"bookmark-outline":"bookmark"}
            style={{alignSelf:"flex-end"}}
            iconColor={savePress?"white":"#fff"}
            onPress={handleOnSavePress}
         />
        <View style={styles.imageContainer} >
            {imageURL && <Image source={{uri: imageURL}} style={styles.image} />}
            {image && !imageURL && <Image source={image} style={styles.image} />}
            <View style={styles.box}>
                <ScoreView HealthScore={score} />
            </View>
        </View>
      <View style={styles.content}>
        {title && <Text style={styles.title}>{title}</Text>}
        <IconButton icon="arrow-right" mode="outlined" iconColor='white' onPress={onPress}/>
      </View>
      
    </View>
  );
};



export default Card;
