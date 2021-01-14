import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Platform, TouchableOpacity, KeyboardAvoidingView, TextInput, Text, View, } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login() {
    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState('null');
    const [password, setPassword] = useState('null');
    const [login, setLogin] = useState('null');

    //envio de form login
    async function sendForm() {
        let response = await fetch('http://192.168.0.23:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
let json = await response.json();
if (json === 'Error') {
    setDisplay('flex')
}
console.log(json)
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login_logomarca}>
                <Image source={require('../assets/img/icon.png')} />
            </View>

            <View>
                <Text style={css.login_msg}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.login_form} >
                <TextInput style={css.login_input} placeholder='Usuário:' onChangeText={text => setUser(text)} />
                <TextInput style={css.login_input} placeholder='Senha:' secureTextEntry={true} onChangeText={password => setPassword(password)} />
                <TouchableOpacity style={css.login_button} onPress={ () => sendForm()} >
                    <Text style={css.login_buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}