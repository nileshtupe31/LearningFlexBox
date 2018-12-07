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
  SafeAreaView,
  View
} from 'react-native';

import { Bat, Hat, Cat } from "./Res/icons";


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.boxContainer, styles.boxBat]}>
          <Bat />
          <Bat />
          <Bat />

        </View>
        <View style={[styles.boxContainer, styles.boxHat]}>
          <Hat />
        </View>
        <View style={[styles.boxContainer, styles.boxCat]}>
          <Cat />
          <Cat />
        </View>
      </SafeAreaView>
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
  boxBat: {
    flex: 3, // 1:2
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor: '#FFEEE4',
  },
  boxHat: {
    backgroundColor: '#F17F42'
  },
  boxCat: {
    flex: 2, // 1:3
    flexDirection:'row',
    alignItems:'flex-end',
    backgroundColor: '#CE6D39',
  },
});
