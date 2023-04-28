import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Report from "../../pages/Report";
import Accounts from "../../pages/Accounts";
import Home from "../../pages/Home";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={props.initialRouteName}>
        <Tab.Screen name={Accounts.name} component={Accounts} />
        <Tab.Screen name={Home.name} component={Home} />
        <Tab.Screen name={Report.name} component={Report} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
