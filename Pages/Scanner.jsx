import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CameraView, Camera } from "expo-camera";
import sendBase64ToServer from '../functions/SendPic'
import convertToBase64 from '../functions/Convert';
import { bgContext } from '../Context/StateContext';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import history from '../functions/history';
import { AuthContext } from '../Context/AuthProvider';
import Svg, { Rect, Mask, G, Path } from "react-native-svg";

const Scanner = () => {
  const [state, setState, Location, setLocation, size, setSize, opacity, setOpacity, routes, setRoutes, info, setInfo] = useContext(bgContext);
  const Navigation = useNavigation();
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (Navigation) {
      const state = Navigation.getState();
      const Index = state.index;
      const location = state.routes[Index].name;
      location === "home" || location === "jane" || location === "Scan" || location === "Saved" || location === "Profile" ? (setLocation((prev) => [...prev, location]), setSize(60), setOpacity(1)) : (setLocation((prev) => [...prev, location]), setSize(0), setOpacity(0));
    }
  }, [Navigation]);
  const [Torch, setTorch] = useState(false);
  const [flash, setFlash] = useState('off')
  const styles = StyleSheet.create({
    Main: {
      flex: 1,
      backgroundColor: '#141414',
      width: '100%',
      height: 870,
      justifyContent: 'center',
      alignItems: 'center'

    },
    barcode: {
      height: 250,
      width: 250,
    },
    barcodeView: {
      height: 255,
      width: 255,
      borderWidth: 1.5,
      borderColor: 'white',
    },
    requestCamera: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 20,
      color: 'white',

    },
    viewPermission: {
      width: '100%',
      height: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'

    },
    ScannedResult: {
      fontSize: 20,
      color: 'white',
    },
    Scanner: {
      width: '100%',
      height: 870,
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative'
    },
    torchView: {
      width: 50,
      height: 50,
      backgroundColor: Torch ? 'yellow' : 'transparent',
      borderStyle: 'solid',
      borderRadius: 25, // Half of width/height for a perfect circle
      position: 'relative', // Required for child absolute positioning
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      borderWidth: 1.5,
      borderColor: 'white',
    },
    Torch: {
      position: 'absolute', // Required for zIndex to work
      zIndex: 20,
      width: 30, // Adjust size as needed
      height: 30, // Adjust size as needed
    },
    PicContainer: {
      height: 500,
      width: 330,
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginTop: 50
    },
    torchFeedback: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60, // Adjust size as needed
      height: 60,
      zIndex: 15,
    },
    TakePic: {
      width: 80,
      height: 80,
      backgroundColor: 'white',
      borderRadius: 50
    },
    TakePicView: {
      width: 85,
      height: 85,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    activity: {
      position: "absolute",
      zIndex: 6,
      top: 550,

    },
    activityView: {
      height: 100,
      width: 250,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
      paddingHorizontal: 10,
      marginBottom: 20

    },
    viewSquare: {
      width: 100,
      height: 100,
      backgroundColor: 'transparent',
      position: 'relative',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    corner: {
      width: 20,
      height: 20,
      position: 'absolute',
      backgroundColor: 'white',
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
    Level: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,

    },


  })
  const [bgcolor, setBackgroundColor] = useState('black');
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [work, setWork] = useState(0);
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);
  useEffect(() => {
    if (hasPermission === null) {
      setState(-1);
      setBackgroundColor("#141414");
    }
    if (hasPermission === false) {
      setState(0);
      setBackgroundColor("#141414");
    }
    if (hasPermission === true) {
      setState(1);
      setBackgroundColor("transparent")
    }
  }, [hasPermission])
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const handleTorch = () => {
    Torch ? (setTorch(false), setFlash('off')) : (setTorch(true), setFlash('on'))

  }
  const takePicture = async () => {
    if (cameraRef.current) {
      console.log("pic taken")
      setWork(1)
      try {
        const options = {
          quality: 1,
          base64: true,
          exif: true,
        };
        const photo = await cameraRef.current.takePictureAsync(options);
        setPhotoUri(photo.uri); // Save the photo URI
        const response = await convertToBase64(photo.uri);
        const uid = user.uid
        const result = await sendBase64ToServer(response, uid)
        if (result.status === "success") {
          setInfo(result)
          await history(user, result)
          Navigation.navigate("Dashboard")

        }
        result.status === "success" ? (setWork(2), setState(2)) : setWork(3);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };



  return (
    <View style={styles.Main}>
      <StatusBar style="light" backgroundColor={bgcolor} />
      {(state === 1) ? (
        <View
          style={styles.Scanner}
        >
          <CameraView
            ref={cameraRef}
            style={[StyleSheet.absoluteFillObject, { height: 870 }]}
            //onCameraReady={() => console.log("Camera ready")} 
            animateShutter={false}
            enableTorch={Torch}
            autofocus={'on'}
            shutterSound={false}
          />
          <View
            style={styles.PicContainer}
          >

            <View
              style={{ width: 320, height: 100, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}
            >
              <View
                style={styles.torchView}
              >
                <TouchableOpacity
                  style={styles.torchFeedback}
                  onPress={handleTorch}
                >
                  <Flash Torch={Torch} />
                </TouchableOpacity>

              </View>
              <TouchableOpacity
                style={{ width: 40, height: 40, paddingRight: 30 }}
                onPress={() => navigation.pop()}
              >
                <Svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 -960 960 960" fill="white">
                  <Path d="M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </Svg>
              </TouchableOpacity>
            </View>
            <View
              style={{ width: 320, height: 250, justifyContent: 'center', alignItems: 'center' }}
            >
              <Svg width={237} height={237} viewBox="0 0 237 237" fill="none">
                {/* Define the mask */}
                <Mask
                  id="mask0_66_65"
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={237}
                  height={237}
                >
                  {/* Rounded rectangle with a stroke */}
                  <Rect
                    x={1.5}
                    y={1.5}
                    width={234}
                    height={234}
                    rx={27.5}
                    stroke="white"
                    strokeWidth={3}
                  />
                </Mask>
                {/* Use the mask */}
                <G mask="url(#mask0_66_65)">
                  {/* Top-left rectangle */}
                  <Rect
                    x={-25.5811}
                    y={-16.5522}
                    width={85.7714}
                    height={80.5048}
                    fill="white"
                  />
                  {/* Top-right rectangle */}
                  <Rect
                    x={174.552}
                    y={-16.5522}
                    width={86.5238}
                    height={80.5048}
                    fill="white"
                  />
                  {/* Bottom-right rectangle */}
                  <Rect
                    x={177.562}
                    y={171.543}
                    width={85.7714}
                    height={80.5048}
                    fill="white"
                  />
                  {/* Bottom-left rectangle */}
                  <Rect
                    x={-26.3333}
                    y={171.543}
                    width={85.7714}
                    height={80.5048}
                    fill="white"
                  />
                </G>
              </Svg>

            </View>

          </View>

          {work === 3 ?
            <View
              style={styles.activityView}
            >
              <Text
                style={styles.requestCamera}
              >Please scan again....</Text>
            </View>
            :
            work === 2 ?
              <View
                style={styles.activityView}
              >
                <Text
                  style={styles.requestCamera}
                >
                  Scanned
                </Text>
              </View>
              : work === 1 ?

                <View
                  style={styles.activityView}
                >
                  <Text
                    style={{ fontSize: 20, color: 'white', textAlign: "center", paddingTop: 5 }}
                  >
                    Scanning....
                  </Text>
                  <ActivityIndicator animating={true} color={MD2Colors.red800} style={{ zIndex: 6, justifyContent: 'center', alignItems: 'center', paddingLeft: 5 }} size={50} />
                </View>
                :
                <View
                  style={styles.activityView}
                >

                </View>
          }
          <View
            style={styles.TakePicView}
          >
            <TouchableOpacity
              onPress={() => { work !== 1 ? takePicture() : null }}
              style={[styles.TakePic, { opacity: work === 1 ? 0.5 : 1 }]}
              activeOpacity={0.5}
            >

            </TouchableOpacity>
          </View>

        </View>


      ) : (state === 0) ? (
        <View
          style={styles.viewPermission}
        >
          <Text
            style={styles.requestCamera}
          > Camera Permission Denied! </Text>
          <Text
            style={styles.requestCamera}
          >Try Again</Text>
        </View>

      ) : (state === -1) ? (
        <View
          style={styles.viewPermission}
        >
          <Text
            style={styles.requestCamera}
          > Waiting For Permisions..... </Text>
        </View>

      ) : (<></>)}

    </View>
  )
}

export default Scanner

const Flash = (Torch) => {
  console.log(Torch)
  return (
    <>
      {Torch.Torch ? <Svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="black">
        <Path d="M320-80v-440l-80-120v-240h480v240l-80 120v440H320Zm160-260q-25 0-42.5-17.5T420-400q0-25 17.5-42.5T480-460q25 0 42.5 17.5T540-400q0 25-17.5 42.5T480-340ZM320-760h320v-40H320v40Zm320 80H320v16l80 120v384h160v-384l80-120v-16ZM480-480Z" />
      </Svg> :
        <Svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="white">
          <Path d="M320-80v-440l-80-120v-240h480v240l-80 120v440H320Zm160-260q-25 0-42.5-17.5T420-400q0-25 17.5-42.5T480-460q25 0 42.5 17.5T540-400q0 25-17.5 42.5T480-340ZM320-760h320v-40H320v40Zm320 80H320v16l80 120v384h160v-384l80-120v-16ZM480-480Z" />
        </Svg>}
    </>

  )
}