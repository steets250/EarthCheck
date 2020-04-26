import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Flex } from '@ant-design/react-native';

import PageContainer from '../../components/PageContainer';
import LeaderboardEntry from '../../components/LeaderboardEntry';

import { getLeaderboard } from '../../actions/data';

const people = [
    { title: "justin", scores: "10000", position: "1.", },
    { title: "thang", scores: "9000", position: "2.", },
    { title: "sumeet", scores: "8000", position: "3.", },
    { title: "steven", scores: "7000", position: "4.", },
    { title: "stanley", scores: "6000", position: "5.", },
    { title: "emily", scores: "5000", position: "6.", },
    { title: "jeffrey", scores: "4000", position: "7.", },
    { title: "kendall", scores: "3000", position: "8.", },
    { title: "amy", scores: "2000", position: "9.", },
    { title: "daniel", scores: "1000", position: "10.", },
];

class LeaderboardPage extends Component {
    state = { leaders: [] }

    componentDidMount() {
        getLeaderboard((data) => {
            if (!data.leaderboard) {
                return;
            }

            data.leaderboard.sort(function(a, b) {
                var keyA = a.points.allTime;
                var keyB = b.points.allTime;
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
              });

            this.setState({leaders: data.leaderboard})
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