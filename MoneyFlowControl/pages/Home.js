import { SafeAreaView, Text, View } from "react-native";
import Category from "../components/Category";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Category
          Name="Transport"
          IconName="car"
          IconType="font-awesome-5"
          Color="green"
          Score="12"
        />
      </View>
    </SafeAreaView>
  );
}
