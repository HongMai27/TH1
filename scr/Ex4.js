import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from "react-native";
import React,{useState} from "react";

export default () =>{
    const[pressCount,setPressCount]=useState(0);
    return(
        <View style={{alignItems: "center", marginTop: 20}}>
            <Text>Bạn Đã nhấn vào nút này:{pressCount} lần </Text>
            <Button
                title={`Pressed ${pressCount} time(s)`}
                onPress={()=> setPressCount(pressCount+1)}
            />
        </View>
    );
};