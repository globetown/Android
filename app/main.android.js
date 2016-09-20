/* @flow */
'use strict';

import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import FCM from 'react-native-fcm';

class Main extends Component {

  componentDidMount() {
    console.log('FCM',FCM);
    // FCM.getFCMToken()
    console.log(FCM.getBadgeNumber())
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Hello, Bes (Android)!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default Main;
