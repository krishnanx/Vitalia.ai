import * as FileSystem from 'expo-file-system';
const convertToBase64 = async (uri) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
      return base64; // Return the Base64 string
    } catch (error) {
      console.error("Error converting to Base64:", error);
      return null;
    }
  };
export default convertToBase64;
