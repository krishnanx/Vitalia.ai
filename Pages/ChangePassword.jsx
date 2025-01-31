import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Svg, Mask, Rect, G, Path } from 'react-native-svg';
import StyledButton from '../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import CustomDialog from '../components/CustomDialog';
import { useChangePassword } from '../firebaseHooks/useChangePassword';

const ChangePasswordData = () => {
  const [dialogMessage, setDialogMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [changePasswordData, setchangePasswordData] = useState({
    current: "",
    newPass: "",
    confirmNewPass: ""
  });
  const { loading, error, success, changePassword } = useChangePassword();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#141414",
    },
    navigator: {
      height: 70,
      width: 350,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30

    },
    input: {
      height: 80, // Adjust height as needed
      backgroundColor: "#252930",
      borderRadius: 22, // Change the border radius here
      paddingHorizontal: 10, // Inner padding for text
      color: "white"
    },
  })
  const navigation = useNavigation();
  const handlechangePasswordData = async () => {
    if (changePasswordData.newPass.length <= 5) {
      setDialogMessage("New password must be atleast 6 characters");
      setIsDialogOpen(true);
      return;
    }
    if (!changePasswordData.current || !changePasswordData.newPass || !changePasswordData.confirmNewPass) {
      setDialogMessage("Enter all inputs");
      setIsDialogOpen(true);
      return;
    }
    if (changePasswordData.newPass != changePasswordData.confirmNewPass) {
      setDialogMessage("Passwords are not matching");
      setIsDialogOpen(true);
      return;
    }
    try {
      const result = await changePassword(changePasswordData.current, changePasswordData.newPass);

      if (result.success) {
        setDialogMessage("Password changed successfully!");
        setIsDialogOpen(true);
        setChangePasswordData({ current: "", newPass: "", confirmNewPass: "" });
        navigation.navigate("Home")
      }


    } catch (error) {
      setDialogMessage(error.message.split("/")[1].split(")")[0]);
      setIsDialogOpen(true);
    }

  }
  return (
    <View style={styles.mainContainer}>
      <CustomDialog message={dialogMessage} visible={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      <View style={styles.navigator} >
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
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
          Change Password
        </Text>
      </View>
      <View style={{ width: "90%", gap: 10, marginTop: 50 }}>
        <TextInput
          style={styles.input}
          placeholder='Current Password'
          secureTextEntry
          placeholderTextColor={"#686868"}
          value={changePasswordData.current}
          onChangeText={(text) => setchangePasswordData({ ...changePasswordData, current: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter New Password'
          secureTextEntry
          placeholderTextColor={"#686868"}
          value={changePasswordData.newPass}
          onChangeText={(text) => setchangePasswordData({ ...changePasswordData, newPass: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm New Password'
          secureTextEntry
          placeholderTextColor={"#686868"}
          value={changePasswordData.confirmNewPass}
          onChangeText={(text) => setchangePasswordData({ ...changePasswordData, confirmNewPass: text })}
        />

        <StyledButton isLoading={loading} title="Confirm" onPress={handlechangePasswordData} />
      </View>
    </View>
  )
}

export default ChangePasswordData