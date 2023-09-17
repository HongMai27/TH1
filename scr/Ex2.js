import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const  Ex2=() => {
  return (
    <View style={{flex: 1, justifyContent:'center' }}>
      <Button title='Button 1' onPress={() => alert ("Hello!")}/>
      <TouchableOpacity
      onPress={() => alert ("Hello 2! ")}
      style= {
        {
          backgroundColor: "pink",
          padding: 10,
          alignItems: "center",
          marginTop: 10,
        }
      }>
        <Text style={{color: "white", fontSize:18}}>Button 2</Text>
      </TouchableOpacity>
    </View> 
  );
};

export default Ex2;

<View style={
  {
    width: 100,
    heigt: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
}
}>
  <Text style= {{ color:'#fff'}}> Hello world</Text>
  </View>

const MyStyle =   StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent:"center"
    },
    button:{
      backgroundColor:"blue",
      marginTop: 10,
      alignItems:"center",
      padding:10
    },
    text:{
      color:"white",
      fontSize:18
    }
}
)