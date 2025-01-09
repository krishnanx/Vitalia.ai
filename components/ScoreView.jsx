import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const ScoreView = ({HealthScore}) => {
    const styles = StyleSheet.create({

          Level:{
            //backgroundColor:'black',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: 70,
            height: 70,
            marginLeft:10,
            margintop:0,
            flexDirection:'row',
            
          },
          corner: {
            width: 20,
            height: 20,
            position: 'absolute',
            //backgroundColor:bgcolor,
          },
          topLeft: {
            top: 1,
            left:-5,
          },
          topRight: {
            top: 1,
            right: -5,
          },
          bottomLeft: {
            bottom:-9,
            left: -5,
          },
          bottomRight: {
            bottom: -9,
            right: -5,
          },
          viewSquare: {
            width:70,
            height:70,
            backgroundColor: '#1c1d1f',
            position: 'relative',
            marginTop:10,
            justifyContent: 'center',
            alignItems: 'center',   
            //backgroundColor:'black'
          },
          
          scoreView:{
            width:'10%',
            height:10,
            //backgroundColor:'black',
            justifyContent:'flex-start',
            paddingTop:20
    
    
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
                                                         HealthScore === 'A' ? "#355e3b" :
                                                         HealthScore === 'B' ? "#32cd32" :
                                                         HealthScore === 'C' ? "#fdf718" :
                                                         HealthScore === 'D' ? "#ED7014" : 
                                                         "#AA0000",}]} />
          <View style={[styles.corner, styles.topRight,{ backgroundColor:
                                                           HealthScore === 'A' ? "#355e3b" :
                                                           HealthScore === 'B' ? "#32cd32" :
                                                           HealthScore === 'C' ? "#fdf718" :
                                                           HealthScore === 'D' ? "#ED7014" : 
                                                           "#AA0000",}]} />
          <View style={[styles.corner, styles.bottomLeft,{ backgroundColor:
                                                          HealthScore === 'A' ? "#355e3b" :
                                                          HealthScore === 'B' ? "#32cd32" :
                                                          HealthScore === 'C' ? "#fdf718" :
                                                          HealthScore === 'D' ? "#ED7014" : 
                                                          "#AA0000",}]} />
          <View style={[styles.corner, styles.bottomRight,{ backgroundColor:
                                                           HealthScore === 'A' ? "#355e3b" :
                                                           HealthScore === 'B' ? "#32cd32" :
                                                           HealthScore === 'C' ? "#fdf718" :
                                                           HealthScore === 'D' ? "#ED7014" : 
                                                           "#AA0000",}]} />
          <View style={styles.viewSquare}>
              <Text
                  style={{fontSize:50,fontWeight:'400',color:
                    HealthScore === 'A' ? "#355e3b" :
                    HealthScore === 'B' ? "#32cd32" :
                    HealthScore === 'C' ? "#fdf718" :
                    HealthScore === 'D' ? "#ED7014" : 
                    "#AA0000",}}
              >
                  {HealthScore}
              </Text>
        </View>
      </View>
    </View>
  )
}

export default ScoreView