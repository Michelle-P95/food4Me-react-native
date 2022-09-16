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
import TabBar from "./TabBar";

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.yellowLight,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Artist" component={Artist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
