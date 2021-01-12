import React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}) {
    return (
        <View style={css.container2}>
            <TouchableOpacity style={css.button_home} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/img/login.png')}/>
            </TouchableOpacity>

        </View>
    )
}