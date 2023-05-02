import { Text,StyleSheet, View,TouchableOpacity } from "react-native"

export function CalcButton(props){
    return(
        <TouchableOpacity style = {styles.button} color="#fff" title={props.title} onPress={props.onPresss}>
        <View style = {styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#333333",
        flex: 1,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        color: "#fff",
        fontSize: 24,
        padding: 10
    },
    text: {
        fontSize:24,
        color: "#fff"
      },
  });
  