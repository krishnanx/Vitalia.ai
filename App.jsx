import React, { useEffect, useState,useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Routes/HomeStack';
import Footer from './components/Footer';
import StateContext from './Context/StateContext';
import { createStackNavigator } from '@react-navigation/stack';
import { bgContext } from './Context/StateContext';
import LoginScreen from './Routes/LoginScreen';
import SignupScreen from './Routes/SignupScreen';
import Welcome from './Routes/Welcome';
import { Provider as PaperProvider } from 'react-native-paper';


// const App = () => {
   
//     const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           backgroundColor: '#100E1B',
//         },
//       });
     
//   return (
    
//       <SafeAreaView style={styles.container}>
//         <StateContext>
          
          
//           <NavigationContainer>
//             {/* <HomeStack />
//             <Footer/> */}
//             {/* <LoginScreen/> */}
//             {/* <SignupScreen/> */}
//             <Welcome/>
//           </NavigationContainer>
      

    
//           </StateContext>
//       </SafeAreaView>
    
//   )
// }

// export default App


const Stack = createStackNavigator();

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#100E1B',
    },
  });

  return (
    <PaperProvider>
    <SafeAreaView style={styles.container}>
      <StateContext>
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
        </NavigationContainer>
      </StateContext>
    </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

