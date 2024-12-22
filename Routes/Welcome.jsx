import React,{useEffect,useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput , Button, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { bgContext } from '../Context/StateContext';
import { StatusBar } from 'expo-status-bar';
import {
  useNavigation,
} from '@react-navigation/native';
export default function WelcomeScreen({ navigation }) {
  const [state,setState,Location,setLocation,size,setSize] = useContext(bgContext);
   const Navigation = useNavigation();
      useEffect(() => {
          if (Navigation) {
              const state = Navigation.getState();
              //console.log("navigation state:", state.routes[0].name);
              const Index = state.index;
              state.routes[Index].name==="Welcome" ? (setLocation(0),setSize(0)) : (setLocation(1),setSize(60));
            } else {
              console.log("Navigation context is undefined");
            }
          }, [Navigation]);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={'#f5f5f5'} />
      <View style={styles.subContainerTop}>
        <Icon name="alien" size={200} color="#007bff" />
        <Text style={styles.title}>Welcome!</Text>
      </View>
      
      <View style={styles.subContainerBottom}>
        <View style={styles.buttonContainer}>
            <Button
                icon={"login"}
                textColor='#fff'
                mode='elevated'
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            >
              Login to you account
            </Button>
            <Button
              style={styles.button}
              textColor='#fff'
              onPress={() => navigation.navigate('Signup')}
              icon={"account-plus"}
            >
              Create an account
            </Button>
        </View>
        <View style={styles.orContainer}>
            <View id='left-line' style={styles.line}></View>
            <Text style={{fontWeight:"light" , color:"gray"}}>or</Text>
            <View id='right-line' style={styles.line}></View>
        </View>

        <Button
            icon={"google"}
            textColor='#fff'
          style={styles.button}
        >
          Continue with Google
        </Button>
        <Text style={{width:"90%"}}>By signing in you are agreeing to our terms, conditions and privacy policy</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
    subContainerTop:{
        width:'100%',
        alignItems:'center',
        height:"50%",
        marginTop: 50,
    },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button:{
    width: '90%',
    backgroundColor: '#007bff',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subContainerBottom:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    gap:0,
  },
  buttonContainer:{
    width:'100%',
    alignItems:'center',
  },
  orContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  },
  line: {
    width: '40%',         // You can change this width as per your requirement
    height: 2,            // The height of the line
    backgroundColor: 'gray',  // The color of the line
  },
});
