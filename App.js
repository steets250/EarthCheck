import React from "react";
import { StyleSheet, Text, View, AppRegistry, SafeAreaView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { Button, WhiteSpace, SearchBar } from '@ant-design/react-native';

import ChecklistPage from './pages/ChecklistPage';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return(
    <SafeAreaView style={{backgroundColor: '#F6F5F5'}}>
      <ChecklistPage />
      <NavigationBar />
   </SafeAreaView>
  );
} 

export default App;