import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Flex, Progress } from '@ant-design/react-native';
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
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light', fontWeight: "bold", marginTop: 15}}>Justin Nguyen</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light',  marginTop: 10}}>Level 10</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light',  }}>Solider of Gaia</Text>
                    <Progress percent={80} style={{ marginHorizontal: 120, marginTop: 20, }}></Progress>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default DashboardPage;