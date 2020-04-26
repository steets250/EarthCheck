import React from "react";

import { View, Text } from "react-native";
import Icon from 'react-native-ionicons';
import { Link } from "react-router-native";

const NavigationBar = () => {
    return (
        <View>
        <Link
          to='/dashboard'
          underlayColor="#f0f4f7"
        >
          <Text>Rendering with React</Text>
        </Link>
        <Link
          to='/checklist'
          underlayColor="#f0f4f7"
        >
          <Text>Components</Text>
        </Link>
        <Link
          to='/leaderboard'
          underlayColor="#f0f4f7"
        >
          <Text>Props v. State</Text>
        </Link>
      </View>
    );
  }
export default NavigationBar;