import React from 'react';
  import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';

  const StyledRadioButton = ({ selected, onPress , text="" }) => {
    return (
      <View style={{flexDirection:"row" , alignItems:"center" , gap:5}}>
      <TouchableOpacity
        style={[styles.radioButton, selected && styles.selected]}
        onPress={onPress}
      >
        {selected && 
          <LinearGradient
            colors={['#944EE0', '#CD6AAB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.innerCircle}
          />
        }

      </TouchableOpacity>
      <Text style={{color:"#818181"}}>{text}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    radioButton: {
      width: 20,
      height: 20,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    selected: {
      backgroundColor: '#252930',
    },
    innerCircle: {
      width: 19,
      height: 19,
      borderRadius: 3,
      backgroundColor: 'white',
    },
  });

  export default StyledRadioButton;
