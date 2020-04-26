import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { WhiteSpace, SearchBar } from '@ant-design/react-native';

import Task from '../../components/Task';

const tasks = [
    { title: 'Turn off computer overnight', points: 5, color: '#59F8DB55' },
    { title: 'Plant a seed', points: 20, color: '#02D40A55' },
    { title: 'Take public transportation', points: 10, color: '#F8595955' },
    { title: 'Take a shower in under 10 mins', points: 5, color: '#59F8DB55' },
    { title: 'Buy a second hand item', points: 15, color: '#A899E455' },
    { title: 'Recycle a bottle or can', points: 5, color: '#02D40A55' },
    { title: 'Don\'t use a coffee stirer', points: 5, color: '#59F8DB55' },
];

const ChecklistPage = (props) => {
    return (
        <View>
            <WhiteSpace size="lg" />
            <Text style={{ fontSize: 32, textAlign: 'center', fontFamily: 'Avenir-Light' }}>Checklist</Text>
            <WhiteSpace size="lg" />
            <SearchBar defaultValue="" placeholder="Search" cancelText="Cancel"/>
            <WhiteSpace size="lg" />
            <ScrollView style={{height: '100%'}}>
                {tasks.map((task) => {
                    return (
                        <>
                            <Task style={{marginLeft: 32, marginRight: 32}} title={task.title} points={task.points} color={task.color} />
                            <WhiteSpace size="lg" />
                        </>
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default ChecklistPage;