import React from 'react';
import { useAuth } from '../Context/AuthProvider'; // Correct path to AuthProvider
import { createNativeStackNavigator, TransitionPresets,CardStyleInterpolators} from '@react-navigation/native-stack';
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
import Anipage from '../Pages/Anipage';
import { Easing } from 'react-native';
import HealthInfo from '../Pages/HealthInfo';
import ChangePassword from '../Pages/ChangePassword';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const { user, newUser } = useAuth();
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
          name="AnimationPage"
          component={Anipage}
          options={{animation:'fade'}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{animation:'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{animation:'fade_from_bottom' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{animation:'fade_from_bottom' }}
        />
         
       
      </>:
      <>
        <Stack.Screen name="Details"
          component={DetailsCollection}
          options={{animation:'fade' }}
        />
        <Stack.Screen name="AddHealthInfo"
          component={AddHealth}
          options={{animation:'fade_from_bottom' }}
        />
        <Stack.Screen 
          name="GetStarted"
          component={GetStarted}
          options={{animation: 'fade_from_bottom'}}
        />
        <Stack.Screen name="Home"
            component={Home} 
            options={{animation:'fade' }}
        />
        <Stack.Screen name="jane"
          component={Jane} 
          options={{animation:'fade' }}
        />
        <Stack.Screen name="Scan"
          component={Scanner}
          options={{animation:'fade' }} 
        />
        <Stack.Screen name="Saved"
          component={Saved}
          options={{animation:'fade' }} 
       />
        <Stack.Screen name="Profile"
          component={Profile}
          options={{animation:'fade' }} 
       />
        <Stack.Screen name="Dashboard"
          component={Dashboard}
          options={{animation:'fade' }} 
       />
       <Stack.Screen name = "Pro"
          component={Pro}
          options={{animation:'fade' }}
       />
       <Stack.Screen name='Account'
          component={Account}
          options={{animation:'fade' }}
       />
       <Stack.Screen name='MyHealthInfo'
          component={HealthInfo}
          options={{animation:'fade' }}
       />
       <Stack.Screen name='ChangePassword'
          component={ChangePassword}
          options={{animation:'fade' }}
       />
      </>
     
      }
    </Stack.Navigator>
  )
}

export default AppNavigator;