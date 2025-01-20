import * as Cookies from '@react-native-cookies/cookies';
import DeviceInfo from 'react-native-device-info';
// Set cookie
const getDeviceCookieName = async () => {
    // Use the device's unique ID (or name) as the cookie name
    const deviceId = await DeviceInfo.getUniqueId();  // Or use DeviceInfo.getDeviceName() for a device name
    return `device_${deviceId}`;  // This creates a unique cookie name for each device
};
export const setLoginCookie = async (user) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 10); // 10 days from now
    const cookieName = await getDeviceCookieName(); // Ensure this function is correctly implemented

    await Cookies.set('https://nutrigen.myprojects.studio', {
        name: cookieName,
        value: JSON.stringify({ uid: user.uid, email: user.email }),
        path: '/', // Cookie path
        expires: expiryDate.toISOString(), // ISO format for expiry
        secure: true, // Use only for HTTPS
        httpOnly: false, // Set to true if you don't want it accessible from JavaScript
        sameSite: 'Lax', // SameSite attribute
    });
};

// Get cookie
export const checkLoginStatus = async () => {
    const cookies = await Cookies.get('https://nutrigen.myprojects.studio');
    //console.log(cookies)
    const cookieName = await getDeviceCookieName(); 
    if (cookies && cookies[cookieName]) {
        const jsonObject = JSON.parse(cookies[cookieName].value);
        //console.log("user:",jsonObject)
        // User is logged in
        console.log('User is logged in');
        //console.log(cookies[cookieName])
        return [true,jsonObject]
    } else {
        // User is not logged in
        console.log('User is not logged in');
        return [false,false]
    }
};
export const deleteDeviceCookie = async () => {
    try {
        const cookieName = await getDeviceCookieName(); // Get the dynamic cookie name
        // Overwrite the cookie with an expired date
        await Cookies.set('https://nutrigen.myprojects.studio', {
            name: cookieName,
            value: '', // Set the value to an empty string
            path: '/',
            expires: new Date(0).toISOString(), // Set an expiration date in the past
        });

        console.log(`Cookie '${cookieName}' has been deleted.`);
    } catch (error) {
        console.error('Error deleting device cookie:', error);
    }
};