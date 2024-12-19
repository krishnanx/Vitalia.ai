import React, { useState, useEffect,useRef } from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
// import { CameraView} from "expo-camera";
import { CameraView, Camera } from "expo-camera";
// import { Camera } from 'react-native-camera-kit';
import * as FileSystem from 'expo-file-system';
import sendBase64ToServer from '../components/SendPic'
import convertToBase64 from '../components/Convert';
import saveBase64ToFile from '../components/Save';

const Scanner = () => {
  const styles = StyleSheet.create({
      Main:{
          flex:1,
          backgroundColor: '#100E1B',
          width:'100%',
          height:'700',
          justifyContent:'center',
          alignItems:'center'

      },
      barcode:{
          height:'300',
          width:'300'
      },
      requestCamera:{
        //width:'100%',
        //height:'815',
        //backgroundColor:'#100E1B',
        //justifyContent:'center',
        //alignItems:'center',
        //flexDirection:'row',
        fontSize:20,
        color:'white',
      },
      viewPermission:{
        width:'100%',
        height:'100',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

      },
      ScannedResult:{
        fontSize:20,
        color:'white',
      }
  })
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [state,setState] = useState(-1);
  const [text,setText] = useState("");
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  },[]);
  useEffect(()=>{
    if (hasPermission === null) {
      setState(-1);
    }
    if (hasPermission === false) {
      setState(0);
    }
    if (hasPermission === true) {
      setState(1);
    }
    
    
  },[hasPermission])
  const handleBarcodeScanned = async({ type, data }) => {
    console.log(data)
    setScanned(true);
    setText(data);
    await onModernBarcodeScanned()
  };
  console.log('Hello')
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = {
          quality: 1,
          base64: true,
          exif: true,
        };
        const photo = await cameraRef.current.takePictureAsync(options);
        setPhotoUri(photo.uri); // Save the photo URI
        console.log(photo.uri); // Log photo details
        const response = await convertToBase64(photo.uri);
        await sendBase64ToServer(response)
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };



  return (
   <View style={styles.Main}>
        {(state===1)?(
          <View>
            {/*<CameraView
              onBarcodeScanned={handleBarcodeScanned}
              barcodeScannerSettings={{barcodeTypes: [
               'qr'
              ]}}
              style={styles.barcode}
            />*/}
            <CameraView ref={cameraRef} style={styles.barcode} onCameraReady={() => console.log("Camera ready")} />
            <Button title="Take Picture" onPress={takePicture} />
            <Image source={{ uri:`${photoUri}` }} style={{ width: 200, height: 200 }} />
            
          </View>
         
        ):(state===0)?(
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

        ):(
          <View
            style={styles.viewPermission}
          >
            <Text
              style={styles.requestCamera}
            > Waiting For Permisions..... </Text>
          </View>
          
        )}
        
   </View>
  )
}

export default Scanner