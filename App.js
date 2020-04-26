import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ChecklistPage from './pages/ChecklistPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { NativeRouter, Route } from 'react-router-native';

class App extends Component {
  state = { id: null }

  getStoredID = async callback => {
    try {
      const value = await AsyncStorage.getItem('user_id')
      callback(value);
    } catch (e) {
      console.log('oof');
    }
  }

  componentDidMount() {
    this.getStoredID((value) => {
      this.setState({id: value});
    })
  }

  render() {
    return (
      <NativeRouter>
        <Route path="/dashboard" render={() => {return <DashboardPage id={this.state.id}/>}} />
        <Route path="/checklist" render={() => {return <ChecklistPage id={this.state.id} />}} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        <Route path="/" render={() => {return <DashboardPage id={this.state.id}/>}} />
      </NativeRouter>
    );
  }
}

export default App;