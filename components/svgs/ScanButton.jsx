import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle, G, Defs, Filter, FeFlood, FeColorMatrix, FeMorphology, FeOffset, FeGaussianBlur, FeComposite, FeBlend, Mask, Path, Rect } from 'react-native-svg';

const ScanButton = () => {
  return (
    <Svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="33" cy="33" r="33" fill="#D9D9D9"/>
        <Mask id="mask0_166_51" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="13" y="13" width="40" height="40">
            <Rect x="13" y="13" width="40" height="40" fill="#D9D9D9"/>
        </Mask>
        <G mask="url(#mask0_166_51)">
            <Path d="M14.6665 48V39.6667H17.9998V44.6667H22.9998V48H14.6665ZM42.9998 48V44.6667H47.9998V39.6667H51.3332V48H42.9998ZM19.6665 43V23H22.9998V43H19.6665ZM24.6665 43V23H26.3332V43H24.6665ZM29.6665 43V23H32.9998V43H29.6665ZM34.6665 43V23H39.6665V43H34.6665ZM41.3332 43V23H42.9998V43H41.3332ZM44.6665 43V23H46.3332V43H44.6665ZM14.6665 26.3333V18H22.9998V21.3333H17.9998V26.3333H14.6665ZM47.9998 26.3333V21.3333H42.9998V18H51.3332V26.3333H47.9998Z" fill="black"/>
        </G>
    </Svg>

  )
}

export default ScanButton