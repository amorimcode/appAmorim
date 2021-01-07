import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function Login(props) {
    return (
        <View>
            <Text>Esse é o componente Login do sistema {props.route.params.id}

            </Text>
        </View>
    )
}