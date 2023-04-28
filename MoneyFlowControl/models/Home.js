import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Wallet } from "./models/Wallet";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Wallet Score="20" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#cccccc",
    padding: 20,
    marginTop:10
  },
});