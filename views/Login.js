import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Image, Platform, TouchableOpacity, KeyboardAvoidingView, TextInput, Text, View, } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login_logomarca}>
                <Image source={require('../assets/img/icon.png')} />
            </View>

            <View>
                <Text style={css.login_msg}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.login_form} >
                <TextInput style={css.login_input} placeholder='Usuário:' />
                <TextInput style={css.login_input} placeholder='Senha:' secureTextEntry={true} />
                <TouchableOpacity style={css.login_button}>
                    <Text style={css.login_buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}