import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Flex } from '@ant-design/react-native';

import PageContainer from '../../components/PageContainer';
import LeaderboardEntry from '../../components/LeaderboardEntry';
import { getLeaderboard } from '../../actions/data';

class LeaderboardPage extends Component {

    state = {
        leaders: []
    }

    componentDidMount() {
        getLeaderboard((data) => {
            if (!data.leaderboard) {
                return;
            }

            data.leaderboard.sort(function (a, b) {
                var keyA = a.points.allTime;
                var keyB = b.points.allTime;
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });

            this.setState({ leaders: data.leaderboard })
        });
    }

    render() {
        return (
            <PageContainer>
                <SafeAreaProvider>
                    <SafeAreaView style={{ backgroundColor: "#5FBA62" }}>
                        <Flex style={{ height: "8%" }}>
                            <Text style={{ fontSize: 34, color: "white", marginHorizontal: 16, fontFamily: 'Avenir-Light' }}>Leaderboard</Text>
                        </Flex>
                        <View style={{ height: "96%" }}>
                            <ScrollView>
                                {this.state.leaders.map((person, index) => {
                                    return (
                                        <LeaderboardEntry key={index} place={index} person={person} />
                                    );
                                })}
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </SafeAreaProvider>
            </PageContainer>
        );
    }
}

export default LeaderboardPage;