import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const StyledText = ({ text, colors, start, end, style }) => {
  return (
    <MaskedView maskElement={<Text style={[styles.text, style]}>{text}</Text>}>
      <LinearGradient
        colors={colors ||['#944EE0', '#CD6AAB']}
        start={start || { x: 0, y: 0 }}
        end={end || { x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={{color:"transparent"}}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24, // Default size, can be overridden by props
    fontWeight: 'bold',
  },
  gradient: {
    flex: 1,
  },
});

export default StyledText;
