import React from 'react';
import { Text, View, Button, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { css } from '../assets/css/Css';
import { Rastreio } from '../views';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={css.container}>

            <View>
                <Text style={css.title}>
                    Escolha sua opção
      </Text>
                <View style={css.fixToText}>
                    <Button
                        style={css.button_home}
                        title="Realizar login"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        style={css.button_home}
                        color='red'
                        title="Rastrear encomenda"
                        onPress={() => navigation.navigate('Rastreio')}
                    />
                </View>
            </View>
        </SafeAreaView>



    )
}