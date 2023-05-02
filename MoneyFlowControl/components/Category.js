import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Icon } from "@rneui/themed";
import Accounts from "../pages/Accounts";

export default function Category(props, { navigation }) {
  return (
    <View
      style={styles.container}
      onPress={() => {
        navigation.navigate(Accounts.name);
      }}
    >
      <Text style={{ whiteSpace: "wrap" }}>{props.Name}</Text>
      <Text>{props.Score}</Text>
      <Icon name={props.IconName} type={props.IconType} color={props.Color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
  },
});
