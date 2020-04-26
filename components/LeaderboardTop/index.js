import React from 'react';
import { Text, Image, View } from 'react-native';
import { Flex } from '@ant-design/react-native';

const LeaderboardTop = (props) => {
    const people = props.people;

    return(

        <Flex style={{ height: 160, backgroundColor: "white", borderRadius: 20, justifyContent: 'space-around', marginHorizontal: 20, marginVertical: 15}}>
            <Flex direction="column" align="center" justify="end" style={{height: '100%', paddingVertical: 8}}>
                <Text style={{textAlign: 'center', fontSize: 32, fontFamily: 'Avenir-Light'}}>2nd</Text>
                <Image style={{borderRadius: 20, width: 40, height: 40}} source={require('../../assets/justin.jpg')}/>
                <Text style={{textAlign: 'center', fontSize : 20, fontFamily: 'Avenir-Light'}}>justin</Text>
            </Flex>
            <Flex direction="column" align="center" justify="start" style={{height: '100%', paddingVertical: 8}}>
                <Text style={{textAlign: 'center', fontSize: 32, fontFamily: 'Avenir-Light'}}>1st</Text>
                <Image style={{borderRadius: 20, width: 40, height: 40}} source={require('../../assets/justin.jpg')}/>
                <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Avenir-Light'}}>justin</Text>
            </Flex>
            <Flex direction="column" align="center" justify="end" style={{height: '100%', paddingVertical: 8}}>
                <Text style={{textAlign: 'center', fontSize: 32, fontFamily: 'Avenir-Light'}}>3rd</Text>
                <Image style={{borderRadius: 20, width: 40, height: 40}} source={require('../../assets/justin.jpg')}/>
                <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Avenir-Light'}}>justin</Text>
            </Flex>
        </Flex>
    );
}

export default LeaderboardTop;