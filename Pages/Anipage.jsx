import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { font } from "../Context/fontContext";
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from "react-native-svg";
import { Mask, Rect, G, Path } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../Context/AuthProvider';
import auth from '@react-native-firebase/auth';
import { checkLoginStatus } from "../Cookies/Cookie";

const Anipage = () => {
    const { user, setUser, newUser, signedIn, dispatchSignedIn } = useAuth();
    const navigation = useNavigation();
    const { fontsLoaded } = useContext(font)
    useEffect(() => {

        const timer = setTimeout(() => {
            const response = async () => {
                const [value, user] = await checkLoginStatus()
                if (value) {
                    setUser(user);
                    console.log("bro")
                    navigation.navigate("Home");
                }
                else {
                    console.log("nah bro")
                    navigation.navigate("Login");
                }
            }
            response()
        }, 5000);

        return () => clearTimeout(timer);
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
            <Animatable.View animation="fadeIn" duration={4000} easing="ease-in-out" style={[styles.textContainer, { marginBottom: 40 }]}>

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
                        VITALIA
                    </SvgText>
                </Svg>
            </Animatable.View>
            <Animatable.View animation="fadeIn" duration={3000} easing="ease-in-out" style={styles.textContainer}>
                <Text style={{ fontWeight: "300", color: "white", fontSize: 30 }}>UNLOCK</Text>
                <Text style={{ fontWeight: "300", color: "white", fontSize: 30 }}>THE TRUTH BEHIND</Text>
                <Text style={[styles.highlight, { color: "white", fontSize: 30 }]}>EVERY BITE</Text>
            </Animatable.View>

        </View>
    );
};


export default Anipage
