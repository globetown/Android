/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Main from './app/main';

class Android extends Component {
  render() {
    return <Main />;
  }
}

AppRegistry.registerComponent('Android', () => Android);
