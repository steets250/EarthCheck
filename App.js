import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ChecklistPage from './pages/ChecklistPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { NativeRouter, Route } from 'react-router-native';

class App extends Component {
  state = { id: null, auth: false }

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
        {/* <Route path="/" render={() => {return <DashboardPage id={this.state.id}/>}} /> */}
        <Route path="/" render={() => {return <ChecklistPage id={this.state.id} />}} />
        {/* <Route path="/" component={LeaderboardPage} /> */}
        {/* <Route path="/" component={LoginPage} /> */}
      </NativeRouter>
    );
  }
}

export default App;