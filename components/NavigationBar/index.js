import React from "react";

import { View, Text} from "react-native";
import { Flex, Checkbox, Row } from "@ant-design/react-native";

import NavigationItem from '../NavigationItem';

import Checklist from "../../assets/icons/checklist.svg";
import Dashboard from "../../assets/icons/dashboard.svg";
import Leaderboard from "../../assets/icons/leaderboard.svg";

const NavigationBar = (props) => {
    const items = [{image: Dashboard}, {image: Checklist}, {image: Leaderboard}];//props.items;
    const width = 100/items.length;
    return(
        <View style={{height: 50, justifyContent: 'center'}}>
            <Flex direction="row" justify="between" align="center">
                {items.map((item) => {
                    return (
                        <NavigationItem image={item.image} width={width}/>
                    );
                })}
            </Flex>
        </View>
    );
}

export default NavigationBar;