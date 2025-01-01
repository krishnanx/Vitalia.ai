import Constants from 'expo-constants';
const sendBase64ToServer = async (base64) => {
  try {
    const response = await fetch(`${Constants.expoConfig.extra.SERVER}`, {
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