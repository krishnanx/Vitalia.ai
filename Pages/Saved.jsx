import React from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
const Saved = () => {
    const styles = StyleSheet.create({
        Main:{
            flex:1,
            backgroundColor: '#100E1B',
            width:'100%',
            height:'700',
            justifyContent:'center'

        },
    })
  return (
   <View style={styles.Main}>
        <Text style={{color:'white'}}>
            saved
        </Text>
   </View>
  )
}

export default Saved