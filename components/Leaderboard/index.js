import React from 'react';
import { Text, Image, ScrollView, View, SafeAreaView } from 'react-native';
import { List, Flex, Row } from '@ant-design/react-native';

const Leaderboard = (props) => {
    
    return(
        <View style={{ backgroundColor: "white", borderRadius: 20, justifyContent: 'center', marginHorizontal: 40, marginVertical:10}}>
            <Flex direction="row" justify="between" align="center" style={{padding: 16}}>
                <Text style={{width: "20%"}}>{props.position}</Text>
                <Text style={{width: "65%"}}>{props.title}</Text>
                <Text style={{width: "20%"}}>{props.scores}</Text>
            </Flex>
        </View>
    );
}

export default Leaderboard;