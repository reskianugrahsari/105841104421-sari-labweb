import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
   <View style = {{
    flex:1,
   }}>
    <View style = {{
      flex:1,
      flexDirection: 'row',
    }}>
      <View style = {{
        flex:1,
        backgroundColor: 'red',
      }}>
     </View>
    <View style = {{
        flex:1,
        backgroundColor: 'yellow',
      }}>
    </View>
    </View>
    <View style = {{
        flex:1,
        backgroundColor: 'green',
      }}>
    </View>
    
    <View style = {{
        flex:1,
        backgroundColor: 'pink',
      }}>
    </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})