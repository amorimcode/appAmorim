import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home(props) {
    console.log(props);
    return (
        <View>
            <Text>Esse é o componente home</Text>
            <Button title='Ir para Login'
                onPress={() => props.navigation.navigate('Login', {
                    id: 30,
                })}
            ></Button>
        </View>
    )
}