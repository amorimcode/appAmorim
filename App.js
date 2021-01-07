import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/css'
import Page from './views/Page'


export default function App() {
  const [product, setProduct] = useState('Bola')
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    if (quantity > 0) {
      Alert.alert('Alerta', 'Novo produto foi adicionado')
    }
  }, [quantity])


  const props = {
    empresa: 'Amorim.co',
    name: 'Bruno Amorim',
    produto: product,
    quantidade: quantity,
  }


  return (
    <View style={css.container}>
      <Text>{product}</Text>
      <Page {...props}></Page>
      <Button title='Adicionar produtos' onPress={() => setQuantity(quantity + 1)}  ></Button>

      <StatusBar style="auto" />
    </View>
  );
}
