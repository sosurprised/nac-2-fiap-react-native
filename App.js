import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PizzaCard from './components/card/PizzaCard';
import Body from './components/body/Body';

export default function App() {
 

  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
