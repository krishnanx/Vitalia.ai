import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import ScoreView from './ScoreView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Card = ({ title, image, imageURL, score, onPress }) => {
    const styles = StyleSheet.create({
        card: {
          backgroundColor: '#1d1d1e',
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4,
          margin: 10,
          overflow: 'hidden',
          width:"90%",
          height:250
        },
        middleContainer:{
          flexDirection:"row",
          alignItems:"center",
          width:350,
          // borderWidth:1.5,
          // borderColor:'white',
          height:130,
          justifyContent:'flex-start',
          paddingLeft:20,
         
        },
        imageContainer:{
          height:130,
          width:220,
          justifyContent:"flex-start",
          alignItems:'center',
          flexDirection:"row",
          // borderWidth:1.5,
          // borderColor:'white',
          paddingLeft:10,
          paddingTop:10,
        },
        image: {
          width: '40%',
          height: 100,
          objectFit:'scale-down'
        },
        content: {
          //marginTop:20,
          padding: 0,
          flexDirection:"row",
          justifyContent:"flex-end",
          height:50,
          // borderWidth:1.5,
          // borderColor:'white',
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20

        },
        title: {
          fontSize:20,
          fontWeight: 'bold',
          marginBottom: 0,
          marginTop:13,
          color:"white",
          marginLeft:13,
          // borderWidth:1.5,
          // borderColor:'white',
          textAlign:'center',
          paddingTop:10,
         
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
          justifyContent:'center',
          alignItems:"center",
          width:120,
          height:50,
          // borderWidth:1.5,
          // borderColor:'white'
          
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
      {/* <IconButton 
          icon={!savePress?"bookmark-outline":"bookmark"}
          style={{alignSelf:"flex-end"}}
          iconColor={savePress?"white":"#fff"}
          onPress={handleOnSavePress}
      /> */}
      <View
        style={{width:350,height:70/*,borderWidth:1.5,borderColor:'white'*/,borderTopLeftRadius:20,borderTopRightRadius:20,justifyContent:'space-evenly',flexDirection:'row'}}
      >
        <View
          style={{width:200,height:70,justifyContent:'flex-start',flexDirection:'row',marginLeft:10}}
        >
          {title && <Text style={styles.title}>{title}</Text>}
        </View>
        <View style={styles.box}>
            <ScoreView HealthScore={score} />
        </View>
       
      </View>
      <View 
      style={styles.middleContainer} 
      >
        <View
          style={styles.imageContainer} 
        >
          {imageURL && <Image source={{uri: imageURL}} style={styles.image} />}
          {image && !imageURL && <Image source={image} style={styles.image} />}
        </View>
        {/* <View style={styles.box}>
            <ScoreView HealthScore={score} />
        </View> */}
      </View>
      <View style={styles.content}>
       
        <View
          style={{flexDirection:'row'}}
        >
          <Text
            style={{color:'white',textAlign:'center',paddingTop:15}}
          >
            More details
          </Text>
          <IconButton icon="arrow-right" mode="outlined" iconColor='white' onPress={onPress}/>
        </View>
      </View>
      
    </View>
  );
};



export default Card;
