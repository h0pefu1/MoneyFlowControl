import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Report from "./pages/Report";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigation from "./components/general/BottomNavigation";
const Tab = createBottomTabNavigator();

export default function App() {
  return <BottomNavigation initialRouteName={Home.name} />;
}
