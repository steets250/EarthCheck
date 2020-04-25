import React from "react";

import { View, Text } from "react-native";
import { Flex, Checkbox, Row } from "@ant-design/react-native";

import style from './style.less';

const Task = (props) => {
    const color = props.color;
    return(
        <View style={{...style.task, backgroundColor: color, borderRadius: 20, justifyContent: 'center'}}>
            <Flex direction="row" justify="between" align="center" style={{padding: 16}}>
                <Checkbox style={style.check}/>
                <Text style={{...style.title}}>{props.title}</Text>
                <Text style={style.points}>{props.points}</Text>
            </Flex>
        </View>
    );
}

export default Task;