import React, {useState} from 'react';
import {ScrollView, View, Button} from 'react-native'
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

                    <Button
                        title="En savoir plus "
                        onPress={() => navigate('Article')}
                    />

            </View>
          )
        })
      }

      </ScrollView>
    )
}