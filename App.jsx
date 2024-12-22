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
import { Provider as PaperProvider } from 'react-native-paper';
import { useNavigationState } from '@react-navigation/native';
import React from 'react';
const Stack = createNativeStackNavigator();

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
  });


  return (
    <PaperProvider>
    <SafeAreaView style={styles.container}>
      <StateContext>
        <StatusBar style="light" backgroundColor={'#f5f5f5'} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home"
             component={HomeStack} 
             options={{ headerShown: false }} />
           
          </Stack.Navigator>
          <Footer/>
        </NavigationContainer>
       
      </StateContext>
    </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
