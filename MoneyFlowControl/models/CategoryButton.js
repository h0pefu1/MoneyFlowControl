import { Text, View,TouchableOpacity } from "react-native";
import { Valute } from "./Valute";

export const CategoryButton = (props) => {
  return (
    <TouchableOpacity>
    <View style={props.Style}>
      <Text>{props.Name}</Text>
      <Text>{props.Score}</Text>
    </View>
    </TouchableOpacity>
  );
};