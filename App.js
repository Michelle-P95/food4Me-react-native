import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import Router from "./src/navigation/Router";
import Home from "./src/screens/Home";
import { colors } from "./src/modal/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
  },
});
