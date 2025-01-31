import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';
const Jane = () => {
  const Navigation = useNavigation();
  const [state, setState, Location, setLocation, size, setSize, opacity, setOpacity] = useContext(bgContext);
  useEffect(() => {
    if (Navigation) {
      const state = Navigation.getState();
      const Index = state.index;
      const location = state.routes[Index].name;
      location === "home" || location === "jane" || location === "Scan" || location === "Saved" || location === "Profile" ? (setLocation((prev) => [...prev, location]), setSize(60), setOpacity(1)) : (setLocation((prev) => [...prev, location]), setSize(0), setOpacity(0));
    }
  }, [Navigation]);
  const styles = StyleSheet.create({
    Main: {
      flex: 1,
      backgroundColor: '#141414',
      width: '100%',
      height: 700,
      paddingTop: 50,
      alignItems: 'center'
    },
    navigator: {
      height: 70,
      width: 350,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row'

    },

  })
  return (
    <View style={styles.Main}>
      <View
        style={styles.navigator}
      >
        <TouchableOpacity
          onPress={() => Navigation.goBack()}
        >
          <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
            {/* Define the mask */}
            <Mask
              id="mask0_82_433"
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={24}
              height={24}
            >
              <Rect width={24} height={24} fill="#D9D9D9" />
            </Mask>

            {/* Apply the mask */}
            <G mask="url(#mask0_82_433)">
              {/* Arrow Path */}
              <Path
                d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z"
                fill="white"
              />
            </G>
          </Svg>
        </TouchableOpacity>
        <Text
          style={{ fontSize: 25, color: 'white', fontFamily: 'Poppins-SemiBold', textAlign: 'center', marginLeft: 20 }}
        >
          Search
        </Text>
      </View>
    </View>
  )
}

export default Jane