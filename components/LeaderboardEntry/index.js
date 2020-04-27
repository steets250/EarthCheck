import React from 'react';
import { Text, Image, View } from 'react-native';
import { Flex } from '@ant-design/react-native';

const Annie = require('../../assets/annie.jpg');
const Brian = require('../../assets/brian.jpg');
const Justin = require('../../assets/justin.jpg');
const Keshav = require('../../assets/keshav.jpg');
const Steven = require('../../assets/steven.jpg');
const Sumeet = require('../../assets/sumeet.jpg');
const Thang = require('../../assets/thang.jpg');
const River = require('../../assets/river.jpg');

const LeaderboardEntry = (props) => {
    let backgroundColor = "#EEE";

    if (props.place == 0) {
        backgroundColor = "#d4af37";
    } else if (props.place == 1) {
        backgroundColor = "#bec2cb"
    } else if (props.place == 2) {
        backgroundColor = "#b5915a"
    }

    images = [Steven, Thang, Justin, Sumeet, River, Annie, Keshav, Brian]

    return (
        <View style={{ height: 60, backgroundColor: backgroundColor, borderRadius: 20, justifyContent: 'center', marginHorizontal: 40, marginVertical: 13, borderColor: 'black', borderWidth: 1.5 }}>
            <Flex direction="row" justify="between" align="center" style={{ padding: 16 }}>
                <Text style={{ width: "7%" }}>#{props.place + 1}</Text>
                <Image style={{ borderRadius: 20, width: 40, height: 40 }} source={images[props.place]} />
                <Text style={{ width: "43%" }}>{props.person.name}</Text>
                <Text style={{ width: "25%" }}>{props.person.points.alltime} pts</Text>
            </Flex>
        </View>
    );
}

export default LeaderboardEntry;