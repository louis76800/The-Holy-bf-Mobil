import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View, Button, SafeAreaView} from 'react-native'
import ProductItem from './ProductItem';
import Login from '../pages/Login';




export default function ProductHistory(props){
    const [page, navigate] = useState('login');

    return (
      <ScrollView>
      {

        props.propsItem.map(el => {
          return (
            <View >
                <ProductItem data={el}/>

                <Button
                    title="En savoir plus "
                    color={'grey'}
                    onPress={() => navigate('Login')}
                />
            </View>
          )
        })
      }

      </ScrollView>
    )
}