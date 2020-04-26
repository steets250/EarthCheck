import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';

const background = require("../../assets/Bubbles.png");

const handleClick = () => {
    
}

const storeData = async (id) => {
    try {
        await AsyncStorage.setItem('user_id', id)
    } catch (e) {
        alert('Issue saving login credentials.')
    }
}

const LoginPage = () => {
    return (
        <View style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
            <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center", marginTop: 350, marginBottom: 350, fontSize: 45, fontFamily: 'Avenir-Light' }}>EarthCheck</Text>
                <Button onPress={handleClick} type="primary" style={{ backgroundColor: "#5FBA62", borderRadius: 20, marginHorizontal: 80, height: 60 }}>login</Button>
            </ImageBackground>
        </View>
    );
}

export default LoginPage;