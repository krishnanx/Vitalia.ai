import React from 'react';
import { Text, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StyledButton = ({
  title,
  onPress,
  isLoading = false, // New prop to indicate loading state
  height = 80,
  width = 333,
  radius = 22,
}) => {
  return (
    <TouchableHighlight
      style={{ borderRadius: radius }}
      onPress={isLoading ? null : onPress} // Disable button if loading
      //underlayColor="rgba(255, 255, 255, 0.3)"
    >
      <LinearGradient
        colors={['#944EE0', '#CD6AAB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.button,
          {
            height,
            width,
            borderRadius: radius,
          },
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width:333
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StyledButton;
