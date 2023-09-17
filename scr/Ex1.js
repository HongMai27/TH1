import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const Ex1 = ()=>
{
  return(
    <View style={
      MyStyle.ViewStyle
    }>
      <Text style={MyStyle.TextStyle}>Hello World</Text>
    </View>
  );
}

export default Ex1;



var MyStyle = StyleSheet.create(
  {
    ViewStyle:{
      width:100,
      height:100,
      backgroundColor:'aqua',
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,

    },
    TextStyle:{
      color:'black'
    }
  }
)