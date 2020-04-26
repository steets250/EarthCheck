import React, { Component, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { WhiteSpace, SearchBar } from '@ant-design/react-native';

import PageContainer from '../../components/PageContainer';
import Task from '../../components/Task';
import { getWays } from '../../actions/data';

class ChecklistPage extends Component {

    state = {
        ways: [],
    };

    componentDidMount() {
        getWays((data, error) => {
            if (!error) {
                this.setState({
                    ways: data.ways,
                });
            }
        })
    }

    render(props) {
        return (
            <PageContainer>
                <SafeAreaView style={{ height: '100%' }}>
                    <WhiteSpace size="lg" />
                    <Text style={{ fontSize: 32, textAlign: 'center', fontFamily: 'Avenir-Light' }}>Checklist</Text>
                    <WhiteSpace size="lg" />
                    <SearchBar defaultValue="" placeholder="Search" cancelText="Cancel" />
                    <WhiteSpace size="lg" />
                    <ScrollView style={{ height: '100%' }}>
                        {this.state.ways.map((task) => {
                            return (
                                <>
                                    <Task key={task.id} task={task} style={{ marginHorizontal: 32 }} />
                                    <WhiteSpace size="lg" />
                                </>
                            )
                        })}
                    </ScrollView>
                </SafeAreaView >
            </PageContainer>
        )
    }
}

export default ChecklistPage;