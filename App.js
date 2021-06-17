import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';

import Home from './pages/Home';
import Article from './pages/Login';
import Header from './components/Header';

export default function App() {

  const [page, navigate] = useState('Home');

  const [article, setArticle] = useState([]);

  useEffect(()=>{
    getProductInfoFromApi()
  },[])
  /* Ajout de variables avant le return */
  const items = article;




  async function onBarCodeScan({data, type}){
    await getProductInfoFromApi(data);
    // ICI le code a attendu d'avoir la réponse de l'API
  }


  async function getProductInfoFromApi () {
    try {
      //this.setState({loading : true});

      let response = await fetch(
        'http://10.176.130.183:8080/apiv1/articles'
      );
      let responseJson = await response.json();

      // Travailler avec les données 

    let data =  setArticle(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  /* Fonction Appel API */

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {/* Header */}
        <Header title={'The Holy BF'}/>
      <View >
        <Button
            title="Blog"
            color={page === "Home" ? "orange" : 'grey'}
            onPress={() => navigate('Home')}
        />
      </View>
        {/* TODO: Ajouter navigation */}
        {page === 'Home' && <Home  appItems={items}/>

        }

        {page === 'Article' &&  <Article login={() => {alert('Je suis connecté !'); navigate('Home')}}/>}



      <View >
        {/*
        <Button
            title="En savoir plus "
            color={page === "Article" ? 'green' : 'grey'}
            onPress={() => navigate('Article')}
        />*/}
      </View>
    </SafeAreaView>
  );
}
/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

});
