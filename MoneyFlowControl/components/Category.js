import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Icon } from "@rneui/themed";

export default function Category(props) {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text>{props.Score}asdasd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    alignItems: "center",
  },

  icon: {
    borderWidth: 2,
  },
});
