import React, {useState} from 'react';
import {Text, Modal,SafeAreaView, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';
import Category from "../components/Category";
import AddExpense from "../components/AddCategoryAdditional/AddExpense";
export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Pressable
       onPress={() => setOpen(true)}>
        <Category
          Name="Transport"
          IconName="car"
          IconType="font-awesome-5"
          Color="green"
          Score="12"
        />
        </Pressable>
        <Category
          Name="Transport my fucking car"
          IconName="car"
          IconType="font-awesome-5"
          Color="green"
          Score="12"
        />
          <TouchableOpacity
  style={styles.hidemodelbutton}
      onPress={() => console.log(open)}>
      <Text style={styles.textStyle}>Hide Modal</Text>
      
    </TouchableOpacity>
      </View>

      <View style={styles.modalWindows}>
      <GestureRecognizer
        style={{flex: 1}}
       
        onSwipeDown={ () => setOpen(false) }>
          <AddExpense open={open}/>
          </GestureRecognizer>
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
  modalWindows:{
  
  },
  hidemodelbutton:{
    justifyContent: "center",
    alignContent:"center",
    flexDirection:"row",
    backgroundColor: "#333333",
    flex: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    color: "#fff",
    fontSize: 24,
    padding: 10
  }
});
