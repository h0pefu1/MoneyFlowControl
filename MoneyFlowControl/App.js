import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Report from "./pages/Report";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./components/general/BottomNavigation";
import { View } from "react-native";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
export default function App() {
  return <BottomNavigation initialRouteName={Home.name} />;
}
