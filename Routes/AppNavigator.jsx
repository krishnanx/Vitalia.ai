import React from 'react';
import { useAuth } from '../Context/AuthProvider'; // Correct path to AuthProvider
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Welcome from './Welcome';
import DetailsCollection from '../Pages/DetailsCollection';
import Home from '../Pages/Home';
import Saved from '../Pages/Saved';
import Scanner from '../Pages/Scanner';
import Jane from '../Pages/Jane';
import Profile from '../Pages/Profile';
import Dashboard from '../Pages/Dashboard';
import Pro from '../Pages/Pro';
import Account from '../Pages/Account';
import AddHealth from '../Pages/AddHealth';
import GetStarted from '../Pages/getStarted';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const { user } = useAuth();
    return (
      <Stack.Navigator
        screenOptions={{
        headerShown: false, // Hide header if you want
        gestureEnabled: true, // Enable gestures for swipe-back
        animationEnabled: true, // Enable animation for transition
      }}
    >
      {!user?
      <>
        
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          //options={{ headerShown: false }}
        />
       
      </>:
      <>
      <Stack.Screen name="Details"
        component={DetailsCollection}
        />
       <Stack.Screen 
          name="GetStarted"
          component={GetStarted}
        />
      <Stack.Screen name="Home"
          component={Home} 
       />
        <Stack.Screen name="AddHealthInfo"
        component={AddHealth}/>

        <Stack.Screen name="jane"
          component={Jane} 
       />
        <Stack.Screen name="Scan"
          component={Scanner} 
       />
        <Stack.Screen name="Saved"
          component={Saved} 
       />
        <Stack.Screen name="Profile"
          component={Profile} 
       />
        <Stack.Screen name="Dashboard"
          component={Dashboard} 
       />
       <Stack.Screen name = "Pro"
          component={Pro}
       />
       <Stack.Screen name='Account'
       component={Account}
       />
      </>
     
      }
    </Stack.Navigator>
  )
}

export default AppNavigator;