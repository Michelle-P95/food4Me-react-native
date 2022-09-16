import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const PostItem = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Artist");
      }}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.postImage}
        ></Image>
        <View style={{ justifyContent: "space-around", paddingVertical: 5 }}>
          <View>
            <Text>This is the Title</Text>
            <Text>Location</Text>
          </View>
          <Text>€€€€</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostItem;
