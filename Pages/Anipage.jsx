import React, { useEffect,useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { font } from "../Context/fontContext";
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from "react-native-svg";
import {Mask, Rect, G, Path } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
const Anipage = () => {
    const navigation = useNavigation();
    const {fontsLoaded} = useContext(font)
    useEffect(() => {
        // Automatically navigate to the next page after 3 seconds
        const timer = setTimeout(() => {
        navigation.navigate("Welcome"); // Replace 'NextScreen' with your actual screen name
        }, 5000); // 3000ms = 3 seconds

        return () => clearTimeout(timer); // Cleanup timer
    }, [navigation]);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
        },
        textContainer: {
            alignItems: "center",
        },
       
        highlight: {
            fontWeight: "bold",
        },
    })
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={'black'} />
            <Animatable.View animation="fadeIn" duration={3000} easing="ease-in-out" style={[styles.textContainer,{marginBottom:40}]}>
                
                <Svg height="100" width="300">
                    <Defs>
                        <LinearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                            <Stop offset="0" stopColor="#944EE0" stopOpacity="1" />
                            <Stop offset="1" stopColor="#CD6AAB" stopOpacity="1" />
                        </LinearGradient>
                    </Defs>
                        <SvgText
                            fill="url(#gradient)" // Use the gradient as the fill
                            fontSize="50"
                            fontWeight="bold"
                            x="150"
                            y="50"
                            textAnchor="middle"
                            >
                            NUTRIGEN
                        </SvgText>
                </Svg>
            </Animatable.View> 
            <Animatable.View animation="fadeIn" duration={3000} easing="ease-in-out" style={styles.textContainer}>
                <Text style={{fontWeight: "300",color: "white",fontSize: 30}}>UNLOCK</Text>
                <Text style={{fontWeight: "300",color: "white",fontSize: 30}}>THE TRUTH BEHIND</Text>
                <Text style={[styles.highlight,{color: "white",fontSize: 30}]}>EVERY BITE</Text>
            </Animatable.View>
           
        </View>
      );
    };


export default Anipage
