import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Flex } from '@ant-design/react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const profile = require("../../assets/justin.jpg");

const DashboardPage = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: "#5FBA62", height: "50%"}}>
                <View>
                    <Text style={{ color: "white", textAlign: "left", fontSize: 34, fontFamily: 'Avenir-Light', marginLeft: 20 }}>Dashboard</Text>
                    <Flex direction="row" justify="center" align="center" style={{marginTop: 60}}>
                        <Image source={profile} style={{width: 100, height: 100, borderRadius: 50, }}></Image>
                    </Flex>
                    
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default DashboardPage;