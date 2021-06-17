import React, {useState} from 'react';
import {ScrollView, View, Button} from 'react-native'
import ProductItem from './ProductItem';
import Article from '../pages/Login';




export default function ProductHistory(props){
    const [page, navigate] = useState('Article');

    return (
      <ScrollView>
      {

        props.propsItem.map(el => {
          return (
            <View >
                <ProductItem data={el}/>

                    <Button
                        title="En savoir plus "
                        color={page === "Article" ? 'green' : 'grey'}
                        onPress={() => navigate('Article')}
                    />

            </View>
          )
        })
      }

      </ScrollView>
    )
}