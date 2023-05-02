import { SafeAreaView, View, StyleSheet } from "react-native";
import Category from "../components/Category";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Category
          Name="Transport"
          IconName="car"
          IconType="font-awesome-5"
          Color="green"
          Score="12"
        />
        <Category
          Name="Transport my fucking car"
          IconName="car"
          IconType="font-awesome-5"
          Color="green"
          Score="12"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    alignItems: "stretch",
    gap: 10,
    flexDirection: "row",
  },
});
