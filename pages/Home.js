import React from 'react';
import {View} from 'react-native'
import ProductsHistory from '../components/ProductsHistory';


export default function Home(props){
    return (
       <View style={{flex: 1}}>
           <ProductsHistory propsItem={props.appItems}/>

        </View>
    )
}