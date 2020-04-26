import React from 'react';
import { View } from 'react-native';
import NavigationBar from '../NavigationBar';

const PageContainer = (props) => {
    return (
        <>
            <View style={{ height: '90%', backgroundColor: props.backgroundColor }}>
                {props.children}
            </View>
            <View style={{ height: '10%', backgroundColor: '#FFFFFF' }}>
                <NavigationBar />
            </View>
        </>
    );
}

export default PageContainer;