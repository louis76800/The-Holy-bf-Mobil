import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native'

export default function Header({title}){
    return (
        <View style={styles.header}>
            <Image
                style={styles.Logo}
                source={require('../assets/logo.png')}/>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 150,
        backgroundColor: '#678fc0' ,
        flexDirection:'row',
        alignItems: 'center',


},
      headerText: {
        color: 'white',
        fontSize: 20,
          fontWeight: 'bold',
          alignItems: 'center',
          marginLeft: 30,



      },
      Logo:{
        height: 75,
          width:75,
          marginLeft: 20,

      }

})