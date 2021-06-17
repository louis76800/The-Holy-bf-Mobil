import React, {useState} from 'react';
import {ScrollView, View, Button, StyleSheet} from 'react-native'
import ProductItem from './ProductItem';
import Article from '../pages/Login';




export default function ProductHistory(props){

    return (
      <ScrollView>
      {


        props.propsItem.map(el => {
          return (
            <View >
                <ProductItem data={el}/>

                {/*  <View >
                    <Button
                        title="En savoir plus "
                        color={"#678fc0"}
                        onPress={() => navigate('Article')}
                    />
                </View>*/}
            </View>
          )
        })
      }

      </ScrollView>
    )
}

const styles = StyleSheet.create({


});