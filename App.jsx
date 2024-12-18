import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Routes/HomeStack';
import Footer from './components/Footer';

const App = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
      });
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeStack />
        <Footer/>
      </NavigationContainer>
     
    </SafeAreaView>
  )
}

export default App

