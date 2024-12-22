import React, { useState,useRef } from 'react'
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';
import Saved from '../Pages/Saved';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from '../Pages/Scanner';
import Jane from '../Pages/Jane';
import Footer from '../components/Footer';
import { NavigationContainer } from '@react-navigation/native';
const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    const screens = [
        { name: 'home', component: Home, index: 1 },
        { name:'jane', component: Jane, index:2 },
        { name: 'Scan', component: Scanner, index: 3 },
        { name: 'Saved', component: Saved, index: 4 },
        { name: 'Profile', component: Profile, index: 5 },
      ];
    //const [animation,setAnimation] = useState('');
    const previousIndex = useRef(0);
  return (
    

    
      <Stack.Navigator  initialRouteName="home"
          screenOptions={({route,navigation})=>{
              const currentIndex = screens.findIndex((screen) => screen.name === route.name);
              const nextIndex = previousIndex.current;
              previousIndex.current = currentIndex;
              const animation=currentIndex>nextIndex?'slide_from_right':'slide_from_left';
              return {
                  animation, // Pass the animation dynamically
                  headerShown: false,
                };
          }}
      >
          
        {screens.map((screen) => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              //options={{animation:animation}}
            />
          ))}
      </Stack.Navigator>
      
   
    
  )
}

export default HomeStack





