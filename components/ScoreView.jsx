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
            //width:'10%',
            //height:10,
            //backgroundColor:'black',
            //justifyContent:'flex-start',
            marginTop:30
            
    
    
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
                  style={{fontSize:30,fontWeight:'400',color:
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