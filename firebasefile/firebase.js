// Import the Firebase SDKs
import { initializeApp} from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Import Expo Constants for secure environment variables
import Constants from "expo-constants";

// Firebase configuration
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.API_KEY || "AIzaSyC3aUKwPUlqWmlMQH7E__gzcFqECshJMZE",
  authDomain: Constants.expoConfig.extra.AUTH_DOMAIN || "nutrigen-5a799.firebaseapp.com",
  projectId: Constants.expoConfig.extra.PROJECT_ID || "nutrigen-5a799",
  storageBucket: Constants.expoConfig.extra.STORAGE_BUCKET || "nutrigen-5a799.firebasestorage.app",
  messagingSenderId: Constants.expoConfig.extra.MESSAGING_SENDER_ID || "88146310673",
  appId: Constants.expoConfig.extra.APP_ID || "1:88146310673:web:52e0bbf433727d5fdd63b0",
  measurementId: Constants.expoConfig.extra.MEASUREMENT_ID || "G-FBL817H359",
};

console.log("check",firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const firestore = getFirestore(app);

// Export Firebase instances
export { app, auth, firestore };
