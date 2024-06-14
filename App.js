import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex:1,
      flexDirection:'row',
    }}>
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        marginLeft:100,
      }}>
        <View style={{
          widht:100,
          height:50,
          backgroundColor:'red',
          borderRadius:8,
          justifyContent:'center',
        }}>
          <Text style={{
            fontSize:20,
            color:'white',
            textAlign:'center',
            fontWeight:'bold',
          }}>SingIn</Text>
        </View>
      </View>
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:100,
      }}>
        <View style={{
          widht:100,
          height:50,
          backgroundColor:'blue',
          borderRadius:8,
          justifyContent:'center'
        }}>
          <Text style={{
            fontSize:20,
            color:'white',
            textAlign:'center',
            fontWeight:'bold',
          }}>SingUp</Text>
        </View>
      </View>
    </View>
    
  )
}
export default App