import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

export default function ProductItem(props){

    return (
        <View key={props.data.id} style={styles.articleContainer}>
            <Text style={sText.articleTitle}>{props.data.title}</Text>
            <Text style={sText.articleDesc}>{props.data.date}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    articleContainer : {
      marginHorizontal: 10,
      borderBottomWidth: 1,
      paddingVertical: 15
    }
  })
  /* Ajout d'une nouvelle constante pour le texte */
  const sText = StyleSheet.create({
      articleTitle: {
        fontSize: 24,
        marginBottom: 5
      },
      articleDesc: {
        fontSize: 16
      }
    }) 
    