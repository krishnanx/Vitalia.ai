const saveBase64ToFile = async (base64, fileName = 'image_base64.txt') => {
    try {
      const filePath = `${FileSystem.documentDirectory}${fileName}`;
      await FileSystem.writeAsStringAsync(filePath, base64, { encoding: FileSystem.EncodingType.UTF8 });
      console.log("Base64 saved at:", filePath);
      return filePath;
    } catch (error) {
      console.error("Error saving Base64 to file:", error);
      return null;
    }
  };
export default saveBase64ToFile;