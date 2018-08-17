import React from "react";
import { StackNavigator } from "react-navigation";

import Main from "./main";
import styles, { COLOR } from "../styles";

const nullHeader = ({ navigation }) => ({
  header: null
});

const ROUTE_CONFIG = {
  Main: {
    screen: Main,
    navigationOptions: nullHeader
  }
};
const STACK_NAVIGATOR_CONFIG = {
  initialRouteName: "Main",
  navigationOptions: {
    headerStyle: styles.bgApp,
    headerBackTitleStyle: COLOR.WHITE,
    headerTintColor: COLOR.WHITE,
    headerTitleStyle: styles.cWhite
  }
};

export default StackNavigator(ROUTE_CONFIG, STACK_NAVIGATOR_CONFIG);
