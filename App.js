import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignItems: 'center',
      }}>
        <Text>App</Text>
    </View>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        alignSelf: 'center',
      }}>
        <Text>App</Text>
      </View>
      </View>
    
  )
}
export default App;