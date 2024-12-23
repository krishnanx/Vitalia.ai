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
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import React,{useRef} from 'react';
const Stack = createStackNavigator();

const App = () => {
  
  const screens = [
    { name: 'home', component: Home, index: 1 },
    { name:'jane', component: Jane, index:2 },
    { name: 'Scan', component: Scanner, index: 3 },
    { name: 'Saved', component: Saved, index: 4 },
    { name: 'Profile', component: Profile, index: 5 },
  ];
  //const [animation,setAnimation] = useState('');
  const previousIndex = useRef(0);
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
          <Header/>
          <Stack.Navigator initialRouteName="Welcome"
             //initialRouteName="home"
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
            
          
            {screens.map((screen) => (
                <Stack.Screen
                  key={screen.name}
                  name={screen.name}
                  component={screen.component}
                  //options={{animation:animation}}
                />
              ))}
            
      
           
          </Stack.Navigator>
          <Footer/>
        </NavigationContainer>
       
      </StateContext>
    </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
