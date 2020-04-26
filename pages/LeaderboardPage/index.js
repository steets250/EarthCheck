import React from 'react';
import { View, Text } from 'react-native';

import Leaderboard from '../../components/Leaderboard';

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
        <View style={{ backgroundColor: "green", height: "100%" }}>
            <Text style={{ textAlignVertical: "center", textAlign: "center", marginTop: 10, marginBottom: 10, fontWeight: "bold", fontSize: 24, color: "white" }}>Leaderboard</Text>
            {/* <View style={{ backgroundColor: "white", borderRadius: 20, justifyContent: "center", marginHorizontal: 40, marginBottom: 30, marginTop: 20 }}>
            </View> */}
            {people.map((person) => {
                return(
                    <Leaderboard title={person.title} scores={person.scores} position={person.position}></Leaderboard>
                );
            })}
        </View>
    );
}

export default LeaderboardPage;