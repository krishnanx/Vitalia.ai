import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Rect, Path, Mask, G, Defs, LinearGradient, Stop } from 'react-native-svg';

const Yearly = () => {
  return (
    <Svg width="180" height="199" viewBox="0 0 180 199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 38C0 17.0132 17.0132 0 38 0H90H112.973C123.039 0 131.043 8.44838 130.5 18.5C128.474 37.2389 144.676 52.8519 163.327 50.1345L165.834 49.7692C166.277 49.7046 166.725 49.6721 167.173 49.6721H167.412C174.364 49.6721 180 55.3079 180 62.2599V99.3443V160.689C180 181.675 162.987 198.689 142 198.689H38C17.0132 198.689 0 181.675 0 160.689V38Z" fill="url(#paint0_linear_188_250)"/>
        <Defs>
        <LinearGradient id="paint0_linear_188_250" x1="180" y1="0" x2="-1.28515e-05" y2="199" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EDCBB0"/>
        <Stop offset="1" stopColor="#944EE0"/>
        </LinearGradient>
        </Defs>
    </Svg>

  )
}

export default Yearly