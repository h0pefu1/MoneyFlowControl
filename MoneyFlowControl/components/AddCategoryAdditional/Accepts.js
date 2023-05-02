import React from 'react'
import { Button, View,TouchableHighlight,Image,StyleSheet } from 'react-native'


export function Accepts(props){
    return(
        <View>
            <TouchableHighlight onPress={props.clearAll}>
                 <Image style={styles.logo} source={require('./accept.png')} />
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  