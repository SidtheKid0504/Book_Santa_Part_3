import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen";
import { TabNavigator } from "./component/BottomTab";
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}

const switchNavigator =  createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: TabNavigator}
});

const AppContainer = createAppContainer(switchNavigator)