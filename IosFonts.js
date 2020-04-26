import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, StyleSheet, SafeAreaView} from 'react-native';

styles=StyleSheet.create({
    scroller: {
        flex: 1,
    }
});

export default class IosFonts extends Component{
  render (){
    return(
      <SafeAreaView>
        <Text style={{fontFamily: 'Avenir'}}>Avenir </Text>
        <Text style={{fontFamily: 'Avenir Next'}}>Avenir Next </Text>
        <Text style={{fontFamily: 'Avenir Next Condensed'}}>Avenir Next Condensed </Text>
        <Text style={{fontFamily: 'Avenir-Black'}}>Avenir-Black </Text>
        <Text style={{fontFamily: 'Avenir-BlackOblique'}}>Avenir-BlackOblique </Text>
        <Text style={{fontFamily: 'Avenir-Book'}}>Avenir-Book </Text>
        <Text style={{fontFamily: 'Avenir-BookOblique'}}>Avenir-BookOblique </Text>
        <Text style={{fontFamily: 'Avenir-Heavy'}}>Avenir-Heavy </Text>
        <Text style={{fontFamily: 'Avenir-HeavyOblique'}}>Avenir-HeavyOblique </Text>
        <Text style={{fontFamily: 'Avenir-Light'}}>Avenir-Light </Text>
        <Text style={{fontFamily: 'Avenir-LightOblique'}}>Avenir-LightOblique </Text>
        <Text style={{fontFamily: 'Avenir-Medium'}}>Avenir-Medium </Text>
        <Text style={{fontFamily: 'Avenir-MediumOblique'}}>Avenir-MediumOblique </Text>
        <Text style={{fontFamily: 'Avenir-Oblique'}}>Avenir-Oblique </Text>
        <Text style={{fontFamily: 'Avenir-Roman'}}>Avenir-Roman </Text>
      </SafeAreaView>
    );
  }
}