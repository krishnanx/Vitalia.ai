import { View, Text, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import React from 'react'
import Svg from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient'

const AllergyButton = ({buttonIcon , onPress , text , selected}) => {
    const styles = StyleSheet.create({
        button: {
            borderRadius: 10,
            // borderWidth: 1,
            // borderColor: !selected?"gray":"#944EE0",
            height: 105,
            width: 105,
            // marginTop: 10,
            // marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
        innerbutton:{
          backgroundColor: '#1d1d1e', // Inner button color
          borderRadius: 10, // Slightly smaller than gradient borde
          alignItems: 'center',
          height:100,
          width:100,
        }
    })
  return (
    <View style={[styles.button, { borderWidth: 2, borderColor: 'transparent' }]}>
      <LinearGradient
        colors={selected ? ['#944EE0', '#CD6AAB'] : ['gray', 'gray']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ ...StyleSheet.absoluteFillObject, borderRadius: 10 }}
      />
      <TouchableOpacity activeOpacity={1} onPress={onPress || undefined} style={styles.innerbutton}>
        <IconButton icon={buttonIcon} size={50} iconColor={!selected ? "gray" : "#944EE0"} />
        <Text style={{ color: 'gray', fontSize: 10 }}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AllergyButton