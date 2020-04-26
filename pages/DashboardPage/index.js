import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import PageContainer from '../../components/PageContainer';
import { getUser } from '../../actions/data';

const profile = require("../../assets/justin.jpg");

class DashboardPage extends Component {

    state = {
        name: '',
        points: {
            alltime: 0,
            month: [],
            week: []
        },
        ways: [

        ]
    }

    componentDidMount() {
        getUser(this.props.id, (data) => {
            this.setState({ ...data.user });
        })
    }

    render() {
        weekSum = this.state.points.week.reduce(function (a, b) {
            return a + b;
        }, 0);

        return (
            <PageContainer>
                <SafeAreaProvider>
                    <SafeAreaView style={{ backgroundColor: "#5FBA62", height: "50%" }}>
                        <Text style={{ color: "white", textAlign: "left", fontSize: 34, fontFamily: 'Avenir-Light', marginLeft: 20 }}>Dashboard</Text>
                        <Flex direction="row" justify="center" align="center" style={{ marginTop: 15 }}>
                            <Image source={profile} style={{ width: 100, height: 100, borderRadius: 50, }}></Image>
                        </Flex>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light', fontWeight: "bold", marginTop: 10 }}></Text>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light', }}>Level {this.state.points.alltime % 100}</Text>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontFamily: 'Avenir-Light', }}>Solider of Gaia</Text>
                        <Flex direction="row" justify="center" align="center" style={{ marginTop: 15 }}>
                            <View style={{ height: 12, width: 140, backgroundColor: "#DCD41B" }}></View>
                            <View style={{ height: 12, width: 40, backgroundColor: "white" }}></View>
                        </Flex>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 18, fontFamily: 'Avenir-Light', marginTop: 5 }}>{100 - (this.state.points.alltime % 100)} points to next level</Text>
                    </SafeAreaView>
                    <View style={{ backgroundColor: "#FFFFFF", height: "50%", paddingVertical: 20 }}>
                        <Flex direction="row" justify="center" align="center" style={{ marginTop: -60, marginBottom: 30 }}>
                            <View style={{ height: 130, width: 300, backgroundColor: "#6CC4F5", borderRadius: 25 }}>
                                <Text style={{ textAlign: "left", fontSize: 28, fontFamily: 'Avenir-Light', marginLeft: 25, marginTop: 15 }}>Daily Tip</Text>
                                <Text style={{ textAlign: "left", fontSize: 13, fontFamily: 'Avenir-Light', marginLeft: 25, marginTop: 5, marginRight: 25 }}>You didn't turn off the lights in 3 days! You should do it when you have the chance! Earth will thank you!</Text>
                            </View>
                        </Flex>
                        <Flex direction="column" justify="center" align="center" style={{ marginTop: 20 }}>
                            <View style={{ height: 50, width: 350, backgroundColor: "#5FBA62", borderRadius: 20 }}>
                                <Text style={{ textAlign: "left", fontSize: 18, fontFamily: 'Avenir-Light', marginLeft: 15, marginTop: 13 }}>You have earned <Text style={{ fontWeight: "bold" }}>{this.state.points.week[6]} points</Text> today</Text>
                            </View>
                            <View style={{ height: 50, width: 350, backgroundColor: "#5FBA62", borderRadius: 20, marginTop: 15 }}>
                                <Text style={{ textAlign: "left", fontSize: 18, fontFamily: 'Avenir-Light', marginLeft: 15, marginTop: 13 }}>You have earned <Text style={{ fontWeight: "bold" }}>{weekSum} points</Text> this week</Text>
                            </View>
                            <View style={{ height: 50, width: 350, backgroundColor: "#5FBA62", borderRadius: 20, marginTop: 15 }}>
                                <Text style={{ textAlign: "left", fontSize: 18, fontFamily: 'Avenir-Light', marginLeft: 15, marginTop: 13 }}>You have earned <Text style={{ fontWeight: "bold" }}>{this.state.points.alltime} points</Text> overall</Text>
                            </View>
                        </Flex>
                    </View>
                </SafeAreaProvider>
            </PageContainer>
        );
    }
}

export default DashboardPage;