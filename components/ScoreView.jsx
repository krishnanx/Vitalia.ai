import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const ScoreView = ({HealthScore}) => {
    const styles = StyleSheet.create({

          Level:{
            //backgroundColor:'black',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: 50,
            height: 50,
            marginLeft:10,
            margintop:0,
            flexDirection:'row',
            borderTopLeftRadius:20,
            
          },
          corner: {
            width:15,
            height:15,
            position: 'absolute',
            //backgroundColor:bgcolor,
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
            
          },
          topLeft: {
            top: 7,
            left:-4,
            
          },
          topRight: {
            top: 7,
            right:6,
          },
          bottomLeft: {
            bottom:-4,
            left: -4,
          },
          bottomRight: {
            bottom:-4,
            right:6,
          },
          viewSquare: {
            width:40,
            height:40,
            backgroundColor: '#1c1d1f',
            position: 'relative',
            marginTop:10,
            justifyContent: 'center',
            alignItems: 'center',   
            //backgroundColor:'black'
          },
          
          scoreView:{
            width:65,
            height:70,
            //backgroundColor:'black',
            //justifyContent:'flex-start',
            marginTop:30,
            // borderWidth:1.5,
            // borderColor:'white'
    
    
          },
      })
  return (
    <View
      style={styles.scoreView}
    >
      <View
          style={styles.Level}
        >
          <View style={[styles.corner, styles.topLeft,{ backgroundColor:
                                                       HealthScore > 90 ? "#FF5733" : // good green for score greater than 90
                                                       HealthScore >= 60 && HealthScore <= 90 ? "#32cd32" : // light green for score between 60 and 90
                                                       HealthScore >= 40 && HealthScore < 60 ? "#ED7014" : // orange for score between 40 and 60
                                                       HealthScore < 40 ? "#AA0000" : // red for score less than 40
                                                       "transparent"}]} />
          <View style={[styles.corner, styles.topRight,{ backgroundColor:
                                                           HealthScore > 90 ? "#FF5733" : // good green for score greater than 90
                                                           HealthScore >= 60 && HealthScore <= 90 ? "#32cd32" : // light green for score between 60 and 90
                                                           HealthScore >= 40 && HealthScore < 60 ? "#ED7014" : // orange for score between 40 and 60
                                                           HealthScore < 40 ? "#AA0000" : // red for score less than 40
                                                           "transparent"}]} />
          <View style={[styles.corner, styles.bottomLeft,{ backgroundColor:
                                                          HealthScore > 90 ? "#FF5733" : // good green for score greater than 90
                                                          HealthScore >= 60 && HealthScore <= 90 ? "#32cd32" : // light green for score between 60 and 90
                                                          HealthScore >= 40 && HealthScore < 60 ? "#ED7014" : // orange for score between 40 and 60
                                                          HealthScore < 40 ? "#AA0000" : // red for score less than 40
                                                          "transparent"}]} />
          <View style={[styles.corner, styles.bottomRight,{ backgroundColor:
                                                          HealthScore > 90 ? "#FF5733" : // good green for score greater than 90
                                                          HealthScore >= 60 && HealthScore <= 90 ? "#32cd32" : // light green for score between 60 and 90
                                                          HealthScore >= 40 && HealthScore < 60 ? "#ED7014" : // orange for score between 40 and 60
                                                          HealthScore < 40 ? "#AA0000" : // red for score less than 40
                                                          "transparent"}]} />
          <View style={styles.viewSquare}>
              <Text
                  style={{fontSize:30,fontWeight:'400',color:
                    HealthScore > 90 ? "#FF5733" : // good green for score greater than 90
                    HealthScore >= 60 && HealthScore <= 90 ? "#32cd32" : // light green for score between 60 and 90
                    HealthScore >= 40 && HealthScore < 60 ? "#ED7014" : // orange for score between 40 and 60
                    HealthScore < 40 ? "#AA0000" : // red for score less than 40
                    "transparent"}}
              >
                  {HealthScore}
              </Text>
        </View>
      </View>
    </View>
  )
}

export default ScoreView