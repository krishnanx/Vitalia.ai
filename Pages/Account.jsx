import { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import useLogOut from '../firebaseHooks/useLogOut';
import { bgContext } from '../Context/StateContext';
import GoPro from '../components/svgs/GoPro';
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';
import CustomDialog from '../components/CustomDialog';
import { AuthContext } from '../Context/AuthProvider';

const Account = () => {
    const [state, setState, Location, setLocation, size, setSize, opacity, setOpacity, routes, setRoutes, info, setInfo, code, setCode, click, setClicked, value, setValue, bookmarks, setBookmarks, scanned, setScanned, name, setName] = useContext(bgContext);
    const [dialogMessage, setDialogMessage] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            justifyContent: "center",
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#141414',
            width: '100%',
            margin: 0,
            padding: 0,
            gap: 50
        },
        TopCard: {
            width: '90%',
            height: 100,
            gap: 10,
            backgroundColor: '#1d1d1e',
            borderRadius: 8,
            elevation: 5,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
        },
        topTexts: {
            width: "100%",
            alignSelf: "flex-start",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
        },
        boxTitle: {
            color: "white",
            fontSize: 25,
        },
        buttonContainer: {
            width: "100%",
            alignItems: "center"
        },
        dashboardButton: {
            width: "90%",
            height: 50,
            backgroundColor: "#1c1d1f",
            marginVertical: 5,

            borderRadius: 20,
            justifyContent: 'center',

            paddingHorizontal: 5,
            borderWidth: 1.5,
            borderColor: 'black',

        },
        touchView: {
            width: "99%",
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        navigator: {
            height: 70,
            width: 350,
            justifyContent: 'flex-start',
            alignItems: 'center',

            flexDirection: 'row'

        },
    })
    const navigation = useNavigation()
    const { logout, loading, error } = useLogOut();
    const handleLogOut = async () => {
        try {
            setUser(false)
            await logout()
        } catch (error) {
            setDialogMessage(error.message);
            setIsDialogOpen(true);
        }
    }
    return (
        <View style={styles.mainContainer}>
            <CustomDialog message={dialogMessage} visible={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
            <View style={styles.navigator} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">

                        <Mask
                            id="mask0_82_433"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={24}
                            height={24}
                        >
                            <Rect width={24} height={24} fill="#D9D9D9" />
                        </Mask>


                        <G mask="url(#mask0_82_433)">

                            <Path
                                d="M10 18L4 12L10 6L11.4 7.45L7.85 11H20V13H7.85L11.4 16.55L10 18Z"
                                fill="white"
                            />
                        </G>
                    </Svg>
                </TouchableOpacity>
                <Text
                    style={{ fontSize: 25, color: 'white', fontFamily: 'Poppins-SemiBold', textAlign: 'center', marginLeft: 20 }}
                >
                    Account
                </Text>
            </View>
            <View style={styles.TopCard}>
                <View style={styles.topTexts}>
                    <View>
                        <Text style={{ color: "white", fontSize: 15 }}>welcome,</Text>
                        <Text style={styles.boxTitle}>{name} 👋</Text>
                    </View>
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => { navigation.navigate("Pro") }}
                    >
                        <GoPro />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.dashboardButton}
                    underlayColor="#1c1d1f"
                    onPress={() => navigation.navigate("MyHealthInfo")}
                >
                    <View style={styles.touchView}>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                            <Icon name="medical-bag" size={25} color="white" />
                            <Text style={{ color: "white", paddingTop: 3 }}>My Health Info</Text>
                        </View>
                        <Icon name="chevron-right" size={25} color="white" />
                    </View>

                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.dashboardButton}
                    underlayColor="#1c1d1f"
                    onPress={() => console.log('Button Pressed')}
                >
                    <View style={styles.touchView}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Icon name="information-outline" size={25} color="white" />
                            <Text style={{ color: "white", paddingTop: 3 }}>Edit Personal Info</Text>
                        </View>
                        <Icon name="chevron-right" size={25} color="white" />
                    </View>

                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.dashboardButton}
                    underlayColor="#1c1d1f"
                    onPress={() => console.log('Button Pressed')}
                >
                    <View style={styles.touchView}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Icon name="pencil" size={25} color="white" />
                            <Text style={{ color: "white", paddingTop: 3 }}>Edit Health Info</Text>
                        </View>
                        <Icon name="chevron-right" size={25} color="white" />
                    </View>

                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.dashboardButton}
                    underlayColor="#1c1d1f"
                    onPress={() => console.log('Button Pressed')}
                >
                    <View style={styles.touchView}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Icon name="crown" size={25} color="white" />
                            <Text style={{ color: "white", paddingTop: 3 }}>My Subscription</Text>
                        </View>
                        <Icon name="chevron-right" size={25} color="white" />
                    </View>

                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.dashboardButton}
                    underlayColor="#1c1d1f"
                    onPress={() => navigation.navigate("ChangePassword")}
                >
                    <View style={styles.touchView}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Icon name="lock" size={25} color="white" />
                            <Text style={{ color: "white", paddingTop: 3 }}>Change Password</Text>
                        </View>
                        <Icon name="chevron-right" size={25} color="white" />
                    </View>

                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.dashboardButton}
                    underlayColor="#1c1d1f"
                    onPress={() => handleLogOut()}
                >
                    <View style={styles.touchView}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Icon name="logout" size={25} color="white" />
                            <Text style={{ color: "white", paddingTop: 3 }}>Log Out</Text>
                        </View>
                        <Icon name="chevron-right" size={25} color="white" />
                    </View>

                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Account