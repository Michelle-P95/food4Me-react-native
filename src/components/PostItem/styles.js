import { StyleSheet } from "react-native";
import { colors } from "../../modal/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "left",
    justifyContent: "center",
    backgroundColor: colors.green,
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 10,
  },
});

export default styles;
