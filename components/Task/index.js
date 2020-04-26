import React from "react";

import { View, Text } from "react-native";
import { Flex, Checkbox, Row } from "@ant-design/react-native";

const Task = (props) => {
    let color = '#88888855';
    switch (props.task.category) {
        case 'Gardening':
            color = '#7CFC0055';
            break;
        case 'Household':
            color = '#C0C0C055';
            break;
        case 'Personal':
            color = '#DC143C55';
            break;
        case 'Shopping':
            color = '#4169E155';
            break;
        case 'Technology':
            color = '#FF634755';
            break;
        case 'Transportation':
            color = '#8B451355';
            break;
        default:
            color = '#80008055';
    }

    return (
        <View style={{ ...props.style, height: 65, backgroundColor: color, borderRadius: 20, justifyContent: 'center' }}>
            <Flex direction="row" justify="between" align="center" style={{ padding: 16 }}>
                <View style={{ width: '15%' }}>
                    <Checkbox />
                </View>
                <Text style={{ width: '65%', textAlign: 'left', fontFamily: 'Avenir-Light' }}>{props.task.title}</Text>
                <Text style={{ width: '10%', fontFamily: 'Avenir-Heavy' }}>{props.task.pointValue}</Text>
            </Flex>
        </View>
    );
}

export default Task;