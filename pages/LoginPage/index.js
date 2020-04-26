import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, InputItem } from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createUser } from '../../actions/data';
const background = require("../../assets/Bubbles.png");

const storeData = async (id) => {
    try {
        await AsyncStorage.setItem('user_id', id)
    } catch (e) {
        alert('Issue saving login credentials.')
    }
}

const handleClick = () => {
    createUser('noname', (data, error) => {
        if (!error) {
            storeData(data.id);
            // signin!
        }
    })
}

const LoginPage = () => {
    return (
        <View style={{ backgroundColor: "#E5E5E5", height: "100%" }}>
            <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center", marginTop: 175, marginBottom: 25, fontSize: 45, fontFamily: 'Avenir-Light' }}>EarthCheck</Text>
                <View style={{ height: 60, marginHorizontal: 80, backgroundColor: "white", borderRadius: 20, marginBottom: 15}}>
                    <InputItem style={{paddingTop: 15}} last="true" placeholder="Enter Your Name"></InputItem>
                </View>
                <Button onPress={handleClick} type="primary" style={{ backgroundColor: "#5FBA62", borderRadius: 20, marginHorizontal: 80, height: 60 }}>Sign In</Button>
            </ImageBackground>
        </View>
    );
}

export default LoginPage;