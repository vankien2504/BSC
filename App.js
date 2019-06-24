

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import WelcomeScreen from './src/login/WelcomeScreen';
import DashboardScreen from './src/screens/dashboard/DashboardScreen';
import Feed from './src/login/Feed';
import Settings from './src/login/Settings';
import Profile from './src/login/Profile';
import LoginScreen from './src/login/LoginScreen';
import LoginPrepare from './src/login/LoginPrepare';
import { setCustomText, setCustomView } from 'react-native-global-props';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

const customViewProps = {
  style: {
    // backgroundColor: '#ecf0f1' // light gray
  }
};
const customTextProps = {
  style: {
    fontSize: 13,
    fontFamily: 'Muli',
    fontFamily: Platform.OS === 'ios' ? 'Muli' : 'Muli',
    color: '#5d5d5d'
  }
};
setCustomView(customViewProps);
setCustomText(customTextProps);
// phần này làm cho tab navigator
// const DashboardTabNavigator = createBottomTabNavigator({
//   Feed,
//   Profile,
//   Settings
// })
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: { screen: DashboardScreen },
  Profile: { screen: Profile },
  // HightChart:{screen:HightChart}
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
  Login: { screen: LoginScreen },
  LoginPrepare: { screen: LoginPrepare }
},
  {
    initialRouteName: "Welcome",
  });

const AppContainer = createAppContainer(AppSwitchNavigator);