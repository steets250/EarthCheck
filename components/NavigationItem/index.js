import React from "react";

import { View, Image } from "react-native";

const NavigationItem = (props) => {
    const color = props.selected ? '#EEE' : 'white';

    return(
        <View style={{width: props.width+'%', height: 50, backgroundColor: color, justifyContent: 'center', alignItems: 'center'}}>
            <props.image width={30} height={30} />
        </View>
    );
}

export default NavigationItem;