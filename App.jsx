import HomeStack from './Routes/HomeStack';
import Footer from './components/Footer';
import StateContext from './Context/StateContext';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { bgContext } from './Context/StateContext';
import LoginScreen from './Routes/LoginScreen';
import SignupScreen from './Routes/SignupScreen';
import Welcome from './Routes/Welcome';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import DetailsCollection from './Pages/DetailsCollection';
import { useNavigationState } from '@react-navigation/native';
import React from 'react';
import { AuthProvider, useAuth } from './Context/AuthProvider';
import AppNavigator from './Routes/AppNavigator';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
  });

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#007bff', // Change this to your desired primary color
      accent: '#f1c40f',  // Optional: Customize accent color
    },
  };

  return (
    <AuthProvider>
    <PaperProvider theme={theme}>
    <SafeAreaView style={styles.container}>
      <StateContext>
        <StatusBar style="light" backgroundColor={'#f5f5f5'} />
        <NavigationContainer>
          <AppNavigator/>
          <Footer/>
        </NavigationContainer>
       
      </StateContext>
    </SafeAreaView>
    </PaperProvider>
    </AuthProvider>
  );
};

export default App;
