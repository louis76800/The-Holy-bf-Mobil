import React from 'react';
import {View} from 'react-native'
import Header from '../components/Header';
import ScanButtonView from '../components/ScanButtonView';
import ProductsHistory from '../components/ProductsHistory';

export default function Home(props){
    return (
       <View style={{flex: 1}}>
            <ScanButtonView handleScanPress={props.appScan} />
            <ProductsHistory propsItem={props.appItems}/>
        </View>
    )
}