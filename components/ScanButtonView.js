import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

export default function ScanButtonView(props){
    return (
        <View style={styles.buttonContainer}>
            {/* Touchable */}     
            <TouchableOpacity 
                onPress={props.handleScanPress} 
                style={styles.button}> 
                    <Text>Scanner</Text>     
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  buttonContainer : {
    height: 100,
    borderBottomWidth: 1
  },
  button : {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'orange',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})