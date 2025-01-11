import React,{createContext} from 'react'
import { useFonts } from 'expo-font';
import PoppinsBlack from '../assets/fonts/Poppins-Black.ttf';
import PoppinsBlackItalic from '../assets/fonts/Poppins-BlackItalic.ttf';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsBoldItalic from '../assets/fonts/Poppins-BoldItalic.ttf';
import PoppinsExtraBold from '../assets/fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraBoldItalic from '../assets/fonts/Poppins-ExtraBoldItalic.ttf';
import PoppinsExtraLight from '../assets/fonts/Poppins-ExtraLight.ttf';
import PoppinsExtraLightItalic from '../assets/fonts/Poppins-ExtraLightItalic.ttf';
import PoppinsItalic from '../assets/fonts/Poppins-Italic.ttf';
import PoppinsLight from '../assets/fonts/Poppins-Light.ttf';
import PoppinsLightItalic from '../assets/fonts/Poppins-LightItalic.ttf';
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf';
import PoppinsMediumItalic from '../assets/fonts/Poppins-MediumItalic.ttf';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';
import PoppinsSemiBoldItalic from '../assets/fonts/Poppins-SemiBoldItalic.ttf';
import PoppinsThin from '../assets/fonts/Poppins-Thin.ttf';
import PoppinsThinItalic from '../assets/fonts/Poppins-ThinItalic.ttf';
export const font = createContext();
const FontContext = ({children}) => {
    const {fontsLoaded} = useFonts({
        'Poppins-Black': PoppinsBlack,
        'Poppins-BlackItalic': PoppinsBlackItalic,
        'Poppins-Bold': PoppinsBold,
        'Poppins-BoldItalic': PoppinsBoldItalic,
        'Poppins-ExtraBold': PoppinsExtraBold,
        'Poppins-ExtraBoldItalic': PoppinsExtraBoldItalic,
        'Poppins-ExtraLight': PoppinsExtraLight,
        'Poppins-ExtraLightItalic': PoppinsExtraLightItalic,
        'Poppins-Italic': PoppinsItalic,
        'Poppins-Light': PoppinsLight,
        'Poppins-LightItalic': PoppinsLightItalic,
        'Poppins-Medium': PoppinsMedium,
        'Poppins-MediumItalic': PoppinsMediumItalic,
        'Poppins-Regular': PoppinsRegular,
        'Poppins-SemiBold': PoppinsSemiBold,
        'Poppins-SemiBoldItalic': PoppinsSemiBoldItalic,
        'Poppins-Thin': PoppinsThin,
        'Poppins-ThinItalic': PoppinsThinItalic,
      });
  return (
    <font.Provider value={{fontsLoaded}}>
        {children}
    </font.Provider>
  )
}

export default FontContext