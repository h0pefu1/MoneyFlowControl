import { StyleSheet, View } from "react-native";

export function Row({ children }){
  return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"space-around",
    backgroundColor:"#DFDFDF",
    borderStyle:"solid",
    borderColor:"black",
    borderWidth:"1px",
    
    
  },
});