/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {AppRegistry, View, Text} from 'react-native';
import Index from './app/index';

class reactNativeDemo extends Component {
  render() {
    return (
       <Index />
    );
  }
}

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);
