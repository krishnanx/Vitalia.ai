import HomeStack from './Routes/HomeStack';
import Footer from './components/Footer';
import StateContext from './Context/StateContext';
///
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Saved from './Pages/Saved';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from './Pages/Scanner';
import Jane from './Pages/Jane';

import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { bgContext } from './Context/StateContext';
import LoginScreen from './Routes/LoginScreen';
import SignupScreen from './Routes/SignupScreen';
import Welcome from './Routes/Welcome';
import { Provider as PaperProvider , DefaultTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import React,{useRef, useState} from 'react';
import { AuthProvider, useAuth } from './Context/AuthProvider';
import AppNavigator from './Routes/AppNavigator';
import GetStarted from './Pages/getStarted';
import FontContext from './Context/fontContext';
const Stack = createStackNavigator();

const App = () => {
  //console.log('Firebase API Key:', Config.API_KEY);

  const screens = [
    { name: 'home', component: Home, index: 1 },
    { name:'jane', component: Jane, index:2 },
    { name: 'Scan', component: Scanner, index: 3 },
    { name: 'Saved', component: Saved, index: 4 },
    { name: 'Profile', component: Profile, index: 5 },
  ];
  //const [animation,setAnimation] = useState('');
  const previousIndex = useRef(0);
 

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#007bff', // Change this to your desired primary color
      accent: '#f1c40f',  // Optional: Customize accent color
    },
  };

  const [currentPage , setCurrentPage] = useState("");
  const handleStateChange = (state) => {
    setCurrentPage(state.routes[state.index].name);
    //console.log(state.routes[state.index].name)
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentPage === "Scan" ? "transparent" : "#141414",
    },
  });

  return (
    <AuthProvider>
    <PaperProvider theme={theme}>
    <SafeAreaView style={styles.container}>
      <StateContext>
        <FontContext>
          <StatusBar style="light" backgroundColor={'#141414'} />
          <NavigationContainer onStateChange={handleStateChange}>
            
          {/* {currentPage=="Home" || currentPage=="jane" ||currentPage=="Account" || currentPage=="Scan" || currentPage=="Saved"||
            currentPage=="Profile" || currentPage=="Pro"?
            <Header/>:<></>
            } */}
            <AppNavigator/>
            {currentPage=="Home" || currentPage=="jane" ||currentPage=="Account" || currentPage=="Scan" || currentPage=="Saved"||
            currentPage=="Profile" ||currentPage=="Dashboard" || currentPage=="MyHealthInfo" || currentPage=="changePassword"?
            <Footer/>:""
            }
          </NavigationContainer>
       
        </FontContext>
        
      </StateContext>
    </SafeAreaView>
    </PaperProvider>
    </AuthProvider>
  );
};

export default App;
