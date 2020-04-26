import React from 'react';
import { StyleSheet, Text, View, AppRegistry, SafeAreaView } from "react-native"
import { NativeRouter, Route, Link } from "react-router-native";
import { Button, WhiteSpace, SearchBar } from '@ant-design/react-native';

import ChecklistPage from './pages/ChecklistPage';
import LeaderboardPage from './pages/LeaderboardPage';

const App = () => (
  // <LeaderboardPage />
  <ChecklistPage></ChecklistPage>
);

export default App;