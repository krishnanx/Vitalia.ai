import React, { useEffect, useState,useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Routes/HomeStack';
import Footer from './components/Footer';
import StateContext from './Context/StateContext';
import { bgContext } from './Context/StateContext';
const App = () => {
   
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#100E1B',
        },
      });
     
  return (
    
      <SafeAreaView style={styles.container}>
        <StateContext>
          
          <NavigationContainer>
            <HomeStack />
            <Footer/>
          </NavigationContainer>
      

    
          </StateContext>
      </SafeAreaView>
    
  )
}

export default App

