import React from 'react';
import { useAuth } from '../Context/AuthProvider'; // Correct path to AuthProvider
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Welcome from './Welcome';
import DetailsCollection from '../Pages/DetailsCollection';
import Home from '../Pages/Home';

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
      <Stack.Screen name="Details"
       component={DetailsCollection} 
       options={{ headerShown: false }} />
       </>:

      <Stack.Screen name="home"
       component={Home} 
       options={{ headerShown: false }} />

       
        }
    </Stack.Navigator>
  )
}

export default AppNavigator