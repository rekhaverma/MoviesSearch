import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Index from "./src/scenes";
import { COLOR } from './src/styles'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={COLOR.APP_DARK}
          barStyle="light-content"
        />
        <Index />
      </View>
    );
  }
}
