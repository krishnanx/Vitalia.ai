import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'
import React from 'react'
import Svg from 'react-native-svg'

const AllergyButton = ({buttonIcon , onPress , text , selected}) => {
    const styles = StyleSheet.create({
        button: {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: !selected?"gray":"#007bff",
            height: 100,
            width: 100,
            marginTop: 10,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
    })
  return (
    <TouchableHighlight onPress={onPress || (() => { console.log(`${text} Button pressed`) })}>
        <View style={styles.button}>
          <IconButton icon={buttonIcon} size={50} iconColor={!selected?"gray":"#007bff"} />
          <Text style={{ color: 'gray', fontSize: 10 }}>{text}</Text>
        </View>
    </TouchableHighlight>
  )
}

export default AllergyButton