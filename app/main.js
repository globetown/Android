/* @flow */
'use strict';

import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello, Bes!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
