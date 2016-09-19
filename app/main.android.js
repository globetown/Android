/* @flow */
'use strict';

import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import FCM from 'react-native-fcm';

class Main extends Component {

  componentDidMount() {
    // FCM.getFCMToken().then(console.log);
    console.log('FCM',FCM);
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
