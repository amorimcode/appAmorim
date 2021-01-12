import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Rastreio } from './views'


export default function App() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Bem-Vindo",
            headerStyle: {backgroundColor: '#72a7fc'},
            headerTintColor: '#333',
            headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
          }} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        {/* <Stack.Screen name="Login" component={AreaRestrita} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


