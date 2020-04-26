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
                    <Flex direction="row" justify="center" align="center" style={{marginTop: 30}}>
                        <Image source={profile} style={{width: 100, height: 100, borderRadius: 50, }}></Image>
                    </Flex>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light', fontWeight: "bold", marginTop: 15}}>Justin Nguyen</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light',  marginTop: 5}}>Level 10</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light',  }}>Solider of Gaia</Text>
                    <Flex direction="row" justify="center" align="center" style={{marginTop: 20}}>
                        <View style={{ height: 12, width: 140, backgroundColor: "#DCD41B"}}></View>
                        <View style={{ height: 12, width: 40, backgroundColor: "white"}}></View>
                    </Flex>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 5}}>50 points to next level</Text>
                    <Flex direction="row" justify="center" align="center" style={{marginTop: 20}}>
                        <View style={{ height: 130, width: 300, backgroundColor: "#6CC4F5", borderRadius: 25}}>
                            <Text style={{ textAlign: "left", fontSize: 28, fontFamily: 'Avenir-Light', marginLeft: 25, marginTop: 15}}>Daily Tip</Text>
                            <Text style={{ textAlign: "left", fontSize: 13, fontFamily: 'Avenir-Light', marginLeft: 26, marginTop: 5, marginRight: 25}}>You didn't turn off the lights in 3 days! You should do it when you have the chance! Earth will thank you!</Text>
                        </View>
                    </Flex>
                    <Flex direction="column" justify="center" align="center" style={{marginTop: 40}}>
                        <View style={{ height: 50, width: 350, backgroundColor: "#5FBA62", borderRadius: 20}}>
                            <Text style={{ textAlign: "left", fontSize: 18, fontFamily: 'Avenir-Light', marginLeft: 15, marginTop: 13}}>You have earned <Text style={{fontWeight: "bold"}}>20 points</Text> today</Text>
                        </View>
                        <View style={{ height: 50, width: 350, backgroundColor: "#5FBA62", borderRadius: 20, marginTop: 15}}>
                            <Text style={{ textAlign: "left", fontSize: 18, fontFamily: 'Avenir-Light', marginLeft: 15, marginTop: 13}}>You have earned <Text style={{fontWeight: "bold"}}>45 points</Text> this week</Text>
                        </View>
                        <View style={{ height: 50, width: 350, backgroundColor: "#5FBA62", borderRadius: 20, marginTop: 15}}>
                            <Text style={{ textAlign: "left", fontSize: 18, fontFamily: 'Avenir-Light', marginLeft: 15, marginTop: 13}}>You have earned <Text style={{fontWeight: "bold"}}>100 points</Text> overall</Text>
                        </View>
                    </Flex>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default DashboardPage;