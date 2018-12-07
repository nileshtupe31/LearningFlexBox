/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Bat, Hat, Cat } from "./Res/icons";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <Bat />
        </View>
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Hat />
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
          <Cat />
          <Cat />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1, // 1:3
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    backgroundColor: '#FFEEE4',
  },
  boxTwo: {
    backgroundColor: '#F17F42'
  },
  boxThree: {
    backgroundColor: '#CE6D39',
  },
});
