import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Greeting from './components/greeting/Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Greeting />
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
