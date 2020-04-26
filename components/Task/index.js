import React from "react";

import { View, Text } from "react-native";
import { Flex, Checkbox, Row } from "@ant-design/react-native";

const Task = (props) => {
    const color = props.color;
    return(
        <View style={{...props.style, height: 65, backgroundColor: color, borderRadius: 20, justifyContent: 'center'}}>
            <Flex direction="row" justify="between" align="center" style={{padding: 16}}>
                <View style={{width: '15%'}}>
                    <Checkbox/>
                </View>
                <Text style={{width: '65%', textAlign: 'left', fontFamily: 'Avenir-Light'}}>{props.title}</Text>
                <Text style={{width: '10%', fontFamily: 'Avenir-Heavy'}}>{props.points}</Text>
            </Flex>
        </View>
    );
}

export default Task;