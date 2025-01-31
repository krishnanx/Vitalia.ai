import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthProvider';
import handlePull from '../functions/handlePull';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import onDelete from '../functions/onDelete';
import checkSave from '../functions/checkSave';
import { useRoute } from '@react-navigation/native';
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';
import Card from '../components/Card';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
const Saved = () => {
  const { user } = useContext(AuthContext)
  const Navigation = useNavigation();
  const [state, setState, Location, setLocation, size, setSize, opacity, setOpacity, routes, setRoutes, info, setInfo, code, setCode, click, setClicked, value, setValue, bookmarks, setBookmarks, scanned, setScanned] = useContext(bgContext);
  const [bgcolor, setBackgroundColor] = useState('#ADE2FF');
  useEffect(() => {
    if (Navigation) {
      const state = Navigation.getState();
      const Index = state.index;
      const location = state.routes[Index].name;
      location === "home" || location === "jane" || location === "Scan" || location === "Saved" || location === "Profile" ? (setLocation((prev) => [...prev, location]), setSize(60), setOpacity(1)) : (setLocation((prev) => [...prev, location]), setSize(0), setOpacity(0));
    }
  }, [Navigation]);
  useEffect(() => {
    const check = async () => {
      const response = await handlePull(user, "saved")
      setValue(response)
      return response;
    }
    const response = check();


  }, [user])
  const handleHistory = (item) => {
    setInfo(item);
    Navigation.navigate("Dashboard")
  }

  const styles = StyleSheet.create({
    Main: {
      flex: 1,
      backgroundColor: '#141414',
      width: '100%',
      height: 700,
      paddingTop: 50,
      alignItems: 'center'
    },
    blocks: {
      width: '100%',
      height: 200,
      backgroundColor: '#1c1d1f',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 15,
      flexDirection: 'row',
      padding: 0,
    },
    image: {
      width: "100%",
      height: "80%",
      objectFit: 'scale-down'
    },
    imageView: {
      width: "50%",
      height: 250,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Level: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 70,
      height: 70,
      marginLeft: 20,
      margintop: 20,
      flexDirection: 'row',

    },
    product: {
      width: '100%',
      height: 250,
      flexDirection: 'row'
    },
    corner: {
      width: 20,
      height: 20,
      position: 'absolute',
    },
    topLeft: {
      top: 1,
      left: -5,
    },
    topRight: {
      top: 1,
      right: -5,
    },
    bottomLeft: {
      bottom: -9,
      left: -5,
    },
    bottomRight: {
      bottom: -9,
      right: -5,
    },
    viewSquare: {
      width: 70,
      height: 70,
      backgroundColor: '#1c1d1f',
      position: 'relative',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    info: {
      width: '70%',
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',

    },
    Score: {
      width: '25%',
      height: 200,
      justifyContent: 'space-between',
      alignItems: 'center',

    },
    imageContainer: {
      width: 100,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      width: 160,
      height: 200,
      justifyContent: 'center'
    },
    scoreView: {
      width: '100%',
      height: 150,
      justifyContent: 'flex-start',
      paddingTop: 20
    },
    save: {
      width: "100%",
      height: 50,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    },
    saveFunc: {
      width: 30,
      height: 40,
      justifyContent: 'center',
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
    <View
      style={styles.Main}
    >
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
          Saved
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {value && Array.isArray(value) && value.length > 0 ? (
          value.map((item, index) => {
            return (
              <Card
                key={item.code}
                title={item.name}
                imageURL={item.image}
                score={item.score}
                onPress={() => handleHistory(item)}

              />
            )
          })
        ) : (
          <View
            style={{ width: 380, height: 200, justifyContent: 'center', alignItems: 'center' }}
          >

          </View>
        )}
      </ScrollView>
    </View>


  )
}

export default Saved