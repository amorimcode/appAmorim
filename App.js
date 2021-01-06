import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/css'
import Page from './views/Page'

export default function App() {
  const props = {
    empresa: 'Amorim.co',
    name: 'Bruno Amorim'
  }


  return (
    <View style={styles.container}>
      <Text>Daora</Text>
      <Page {...props}></Page>
      <StatusBar style="auto" />
    </View>
  );
}


