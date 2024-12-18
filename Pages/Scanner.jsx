import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { CameraView, Camera } from "expo-camera";
//import { BarCodeScanner } from 'expo-barcode-scanner';


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
    const handleBarcodeScanned = ({ type, data }) => {
      setScanned(true);
      setText(data);
    };
  
    
  


  return (
   <View style={styles.Main}>
        {(state===1)?(
          <View>
            <CameraView
              onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
              barCodeTypes={[
                'aztec', 'ean13', 'ean8', 'qr', 'pdf417', 'upc_e', 'datamatrix',
                'code39', 'code93', 'itf14', 'codabar', 'code128', 'upc_a',
              ]}
              style={styles.barcode}
            />
            <Text
              style={styles.ScannedResult}
            >{text}</Text>

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