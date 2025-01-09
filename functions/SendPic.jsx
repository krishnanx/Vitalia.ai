import Constants from 'expo-constants';
const sendBase64ToServer = async (base64) => {
  try {
    console.log("gug",Constants.expoConfig.extra.SERVER)
    const response = await fetch(`http://192.168.1.42:5000/upload-base64`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: base64 }),
    });

    // Log the raw response
    const textResponse = await response.text();
    //console.log('Raw Response:', textResponse); 

    // Parse the JSON response
    const result = JSON.parse(textResponse);
    //console.log('Upload successful:', result);
    //console.log('Data:', result);
    return result;
   
  } catch (error) {
    console.error('Error uploading Base64:', error);
  }
};

export default sendBase64ToServer;