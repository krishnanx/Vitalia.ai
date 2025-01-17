import { View , Text} from 'react-native';
import React from 'react';
import Svg, { Circle, G, Defs, Filter, FeFlood, FeColorMatrix, FeMorphology, FeOffset, FeGaussianBlur, FeComposite, FeBlend } from 'react-native-svg';

const CircleBookmarkStar = () => {
  return (
    <>
    <Svg width="99" height="99" viewBox="0 0 99 99" fill="none">
      <G filter="url(#filter0_d_188_253)">
        <Circle cx="44.5" cy="53.5" r="22.5" fill="#DFB7B7" />
      </G>
      <Defs>
        <Filter id="filter0_d_188_253" x="0.8" y="0.8" width="97.4" height="97.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <FeMorphology radius="7" operator="erode" in="SourceAlpha" result="effect1_dropShadow_188_253" />
          <FeOffset dx="5" dy="-4" />
          <FeGaussianBlur stdDeviation="16.6" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_188_253" result="shape" />
        </Filter>
      </Defs>
    </Svg>
    <View style={{width:400, position:"relative" , right:100 , bottom:50}}>
      <Text style={{fontFamily:"Poppins-Bold" , fontSize:16}}>Annually</Text>
      <Text style={{textDecorationLine:"line-through" }}>Rs 2,388</Text>
      <View>
        <View style={{flexDirection:"row" , alignItems:"center" ,marginTop:10, marginLeft:15}}>
          <Text style={{ fontSize:14, marginTop:5, fontFamily:"Poppins-Bold"}}>Rs</Text>
          <Text style={{ fontSize:24, fontFamily:"Poppins-Bold"}}> 1,499/-</Text>
        </View>
      </View>
    </View>
    
    </>
  );
};

export default CircleBookmarkStar;



