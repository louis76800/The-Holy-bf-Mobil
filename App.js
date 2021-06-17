import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import Home from './pages/Home';
import Article from './pages/Login';
import Header from './components/Header';

export default function App() {

  const [page, navigate] = useState('Home');

  /* Ajout de variables avant le return */
  const items = [

   // while fetch reponse {
      // echo titre
      //contenu
      // etc}
    { id: 1,
      title: 'Canette soda test',
      contenu:"blabla" ,
      date: 'Demain à 00:00'
    },
    { id: 2,
      title: 'Canette soda test 2',
      contenu:"blabla" ,
      date: 'Demain à 00:00'
    },
    { id: 3,
      title: 'Cookies du crous ',
      contenu:"blabla" ,
      date: 'Demain à 00:00'
    },
    { id: 4,
      title: 'Pizza',
      contenu:"blabla" ,
      date: 'Demain à 00:00'
    },
    { id: 5,
      title: 'Bière',
      contenu:"blabla" ,
      date: 'Demain à 00:00'
    },
    { id: 6,
      title: 'Bière',
      contenu:"blabla" ,
      date: 'Demain à 00:00'
    },
  ]




  async function onBarCodeScan({data, type}){
    await getProductInfoFromApi(data);
    // ICI le code a attendu d'avoir la réponse de l'API
  }


  async function getProductInfoFromApi (barCode) {
    try {
      //this.setState({loading : true});

      let response = await fetch(
        'https://fr.openfoodfacts.org/api/v0/produit/' + barCode + '.json'
      );
      let responseJson = await response.json();

      // Travailler avec les données 
      let _products = products;
      _products.push(responseJson);
      setProducts(_products);

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
      <View>
        <Button
            title="Blog"
            color={page === "Home" ? "green" : 'grey'}
            onPress={() => navigate('Home')}
        />
      </View>
        {/* TODO: Ajouter navigation */}
        {page === 'Home' && <Home  appItems={items}/>

        }

        {page === 'Article' &&  <Article login={() => {alert('Je suis connecté !'); navigate('Home')}}/>}



      <View style={styles.topMenu}>

        <Button
            title="En savoir plus "
            color={page === "Article" ? 'green' : 'grey'}
            onPress={() => navigate('Article')}
        />
      </View>
    </SafeAreaView>
  );
}
/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
