import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import PostItem from "../../components/PostItem";

const Home = () => {
  return (
    <>
      <PostItem />
    </>
  );
};

export default Home;
