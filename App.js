import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ChecklistPage from './pages/ChecklistPage';
import LeaderboardPage from './pages/LeaderboardPage';

import { getUser } from './actions/data';

class App extends Component {
  state = { user: null }

  getStoredID = async callback => {
    try {
      const value = await AsyncStorage.getItem('user_id')
      callback('0lDYjLs5XaNvMUkOjuQv'); //test
    } catch (e) {
      console.log('oof');
    }
  }

  componentDidMount() {
    this.getStoredID(() => {
      if (value) {
        getUser(id, (data, error) => {
          if (!error) {
            console.log(data);
            this.setState({
              user: data
            });
          }
        })
      }
    })
  }

  render() {
    return (
      //<LoginPage />
      <DashboardPage user={this.state.user}/>
      // <ChecklistPage />
      // <LeaderboardPage />
    );
  }
}

export default App;