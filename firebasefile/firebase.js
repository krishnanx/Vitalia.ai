// Import the Firebase SDKs
import { initializeApp} from "firebase/app";
import { initializeAuth, getReactNativePersistence,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import Expo Constants for secure environment variables
import Constants from "expo-constants";

// Firebase configuration
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.API_KEY,
  authDomain: Constants.expoConfig.extra.AUTH_DOMAIN,
  projectId: Constants.expoConfig.extra.PROJECT_ID,
  storageBucket: Constants.expoConfig.extra.STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig.extra.MESSAGING_SENDER_ID,
  appId: Constants.expoConfig.extra.APP_ID,
  measurementId: Constants.expoConfig.extra.MEASUREMENT_ID,
};

console.log("check",firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app)
const firestore = getFirestore(app);

// Export Firebase instances
export { app, auth, firestore };
