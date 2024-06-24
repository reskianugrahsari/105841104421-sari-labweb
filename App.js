import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

//Costum component,ButtonCostum
const BottonCostum=({text,color})=> {
  return (
    <View>
    <View style ={{
      widht:250,
      height:100,
      backgroundColor:color,
      borderRadius:10,
      borderBottom:20,
      justifyContent:'center',
      alignitems:'center',
    }}>
      <Text style={{
        textAlign:'center',
        color:'white',
        fontSize:30,
        fontWeight:'bold',
      }}>{text}
      </Text>
    </View>
    </View>
  )
}
//costum component,TextInputCustom
const TextInputCostum=({placeholder,color,typeKeyboard})=>{
  return(
    <TextInput
    keyboardType={typeKeyboard}
    placeholder={placeholder}
    style={{
      width:250,
      height:50,
      borderColor:color,
      borderWidth:3,
      borderRadius:5,
      marginBottom:10,
      paddingLeft:10,
    }}/>

  )
}

export default function App(){
  return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <BottonCostum text="LOGIN" color="blue"/>
      <BottonCostum text="SIGN IN" color="green"/>
      <BottonCostum text="REGISTER" color="red"/>
      <TextInputCostum placeholder="Enter text" color="pink" typeKeyboard="default"/>
      <TextInputCostum placeholder="Enter number" color="yellow" typeKeyboard="numeric"/>

    </View>
  )
}