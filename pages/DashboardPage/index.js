import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '@ant-design/react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const DashboardPage = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text style={{ textAlign: "left", fontSize: 34, fontFamily: 'Avenir-Light', marginLeft: 20 }}>Dashboard</Text>
                    
                    
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default DashboardPage;