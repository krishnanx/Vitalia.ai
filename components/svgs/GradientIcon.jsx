import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

const GradientIcon = ({height=20 , width=20}) => {
  return (
    <View style={styles.iconContainer}>
      <Svg height={height} width={width} viewBox="0 0 24 24">
        <Defs >
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#C65BFD" />
            <Stop offset="100%" stopColor="#C65BFD" />
          </LinearGradient>
        </Defs>
        <Path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"
          fill="url(#grad)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});

export default GradientIcon;
