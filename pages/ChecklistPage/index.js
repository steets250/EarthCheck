import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { WhiteSpace, SearchBar } from '@ant-design/react-native';

import Task from '../../components/Task';

import { getData } from '../../actions/data';

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
    const [ways, setWays] = useState([]);

    getData((data, error) => {
        if (error) {
            return;
        }

        setWays(data.ways);
    });

    return (
        <SafeAreaView>
            <WhiteSpace size="lg" />
            <Text style={{ fontSize: 32, textAlign: 'center', fontFamily: 'Avenir-Light' }}>Checklist</Text>
            <WhiteSpace size="lg" />
            <SearchBar defaultValue="" placeholder="Search" cancelText="Cancel"/>
            <WhiteSpace size="lg" />
            <ScrollView style={{height: '100%'}}>
                {ways.map((task) => {
                    return (
                        <>
                            <Task key={task.id} task={task} style={{marginHorizontal: 32}} />
                            <WhiteSpace size="lg" />
                        </>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default ChecklistPage;