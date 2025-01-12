const fs = require('fs');
const path = require('path');

function convertBase64ToJson(base64Data, directory) {
    try {
        // Decode Base64 to string
        const jsonString = atob(base64Data);
        // Parse string to JSON
        const jsonObject = JSON.parse(jsonString);

        // Specify the file path
        const filePath = path.join(directory, 'google-services.json');

        // Write the JSON object to the file
        fs.writeFileSync(filePath, JSON.stringify(jsonObject, null, 2), 'utf8');

        console.log(`File created successfully at ${filePath}`);
        return filePath;
    } catch (error) {
        console.error("Error processing Base64 or writing to file:", error);
    }
}


export default {
  expo: {
    name: "Nutrigen",
    slug: "Mobile-App",
    entryPoint: "./index.js",
    version: "1.1.0",
    orientation: "portrait",
    icon: "./assets/Ellipse 5.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image:"./assets/Ellipse 5.png",
      resizeMode: "contain",
      backgroundColor: "#141414",
    },
    ios: {
      supportsTablet: true,
    },
    plugins: [
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
          microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
          recordAudioAndroid: true,
        },
      ],
      "expo-secure-store",
      "@react-native-firebase/auth",
      "@react-native-firebase/app"
    ],
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/Ellipse 5.png",
        backgroundColor: "pink",
      },
      permissions: [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO",
      ],
      package: "com.meclab.nutrigen",
      versionCode: 1,
      googleServicesFile: "./google-services.json"
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "33621821-3d87-49be-9afc-46463d5c88d4",
      },
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_API,
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID,
      OPEN_AI_KEY:process.env.OPEN_AI_KEY,
      SERVER:process.env.SERVER
    },
    assetBundlePatterns: ["**/*"], // Include all assets, including fonts
  },
};
