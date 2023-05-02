import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Modal
} from "react-native";
import { Row } from "./Row";
import { Accepts } from "./Accepts";
import { CalcButton } from "./CalcButton";
import React, { useEffect, useState } from "react";

export default function AddExpense({ open,close }) {
  const [stringData, setStringData] = useState("");

  const handleNumber = (state, number) => {
    setStringData(stringData + number);
  };
  const deleteLastDigit = () => {
    setStringData((prev)=>prev.substring(0,prev.length-1));
  };
  const deleteNumber = () => {
    setStringData("");
  };
  return (
    
    <Modal
animationType="slide"
transparent={true}
visible = {open}
style={styles.modalview}
onRequestClose={() => {
  Alert.alert('Modal has been closed.');
 
}}>
  <View style={styles.modalview}>
    <View style={styles.container}>
        <Text style={styles.textinside}>Add Expense </Text>
    
      <View style={styles.footer}>
      <View style={styles.textinputview}>
        <TextInput style={styles.textinput} editable={false} placeholder="Enter Expense">{stringData}</TextInput>
      </View>
        <Row>
          <CalcButton
            title="1"
            onPresss={() => handleNumber(stringData, "1")}
          />
          <CalcButton title="2"  onPresss={() => handleNumber(stringData, "2")}/>
          <CalcButton title="3"  onPresss={() => handleNumber(stringData, "3")}/>
        </Row>
        <Row>
          <CalcButton title="4" onPresss={() => handleNumber(stringData, "4")} />
          <CalcButton title="5"  onPresss={() => handleNumber(stringData, "5")}/>
          <CalcButton title="6" onPresss={() => handleNumber(stringData, "6")} />
        </Row>
        <Row>
          <CalcButton title="7" onPresss={() => handleNumber(stringData, "7")} />
          <CalcButton title="8"  onPresss={() => handleNumber(stringData, "8")}/>
          <CalcButton title="9"  onPresss={() => handleNumber(stringData, "9")}/>
        </Row>
        <Row>
          <Accepts clearAll={deleteNumber} />
          <CalcButton title="0"  onPresss={() => handleNumber(stringData, "0")}/>
          <Button title="BackSpace" onPress={deleteLastDigit}/>
        </Row>
      
      </View>
    </View>
    </View>
    </Modal>
  );
}

  

const styles = StyleSheet.create({
  textinputview: {
    alignItems: "flex-end",
    marginBottom:"1%",
    backgroundColor:"#d9fcfa",
    height:40,
  textAlignVertical:"center"    
  },
  modalview:{
    height: '50%',
    marginTop: 'auto',
    justifyContent: 'flex-end'
  },
  textinput:{
      fontSize:30,
      marginRight:"2%"
  },
  text: {
    alignItems: "center",
  },
  textinside: {
    fontSize: 25,
  },
  container: {
    flexDirection: "column", // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: "space-between",
  
    
  },
  PageTitle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },

  footer: {
    marginBottom: "10%",
  },
  hidemodelbutton:{
    justifyContent: "center",
    alignContent:"center",
    flexDirection:"row",

  }
});
