import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavigationBar from '../../components/NavigationBar';
import LeaderboardEntry from '../../components/LeaderboardEntry';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Flex } from '@ant-design/react-native';

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

const LeaderboardPage = () => {
    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={{ backgroundColor: "#5FBA62", height: '90%' }}>
                    <Flex style={{ height: "8%" }}>
                        <Text style={{ fontSize: 34, color: "white", marginHorizontal: 16, fontFamily: 'Avenir-Light' }}>Leaderboard</Text>
                    </Flex>
                    <View style={{ height: "96%" }}>
                        <ScrollView>
                            {people.map((person, index) => {
                                return (
                                    <LeaderboardEntry key={index} place={index} title={person.title} scores={person.scores} position={person.position} />
                                );
                            })}
                        </ScrollView>
                    </View>
                </SafeAreaView>
                <NavigationBar />
            </SafeAreaProvider>
        </>
    );
}

export default LeaderboardPage;