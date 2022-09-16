import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Artist from "../screens/Artist";
import { colors } from "../modal/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const TabBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Einkaufen"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="camera" size={25} color={colors.grey} />
          ),
        }}
      />

      <Tab.Screen
        name={"Kochen"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cutlery" size={25} color={colors.grey} />
          ),
        }}
      />
      <Tab.Screen
        name={"info"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="navicon" size={25} color={colors.grey} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
