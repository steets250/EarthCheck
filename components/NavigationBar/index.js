import React from "react";
import { Flex } from '@ant-design/react-native';
import { View, Text, Image } from "react-native";
import { Link } from "react-router-native";

const dashboard = require("../../assets/icons/dashboard.png");
const checklist = require("../../assets/icons/checklist.png");
const leaderboard = require("../../assets/icons/leaderboard.png");

const NavigationBar = () => {
    return (
      <Flex direction="row">
        <View style={{marginLeft: 55, marginRight: 45, marginTop: 15}}>
          <Link
            to='/dashboard'
            underlayColor="#f0f4f7"
          >
            <Image source={dashboard} style={{ width: 40, height: 40,}}></Image>
          </Link>
        </View>
        <View style={{marginLeft: 45, marginRight: 45, marginTop: 15}}>
          <Link
            to='/checklist'
            underlayColor="#f0f4f7"
          >
            <Image source={checklist} style={{ width: 40, height: 40,}}></Image>
          </Link>
        </View>
        <View style={{marginLeft: 45, marginTop: 15}}>
          <Link
            to='/leaderboard'
            underlayColor="#f0f4f7"
          >
        
            <Image source={leaderboard} style={{ width: 40, height: 40,}}></Image>
          </Link>
        </View>
      </Flex>
    );
  }
export default NavigationBar;