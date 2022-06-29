import React from "react";
import { View } from "react-native";
import { Division } from './../components/division';
import { Header } from './../components/header';
import styles from './styles';
import { Navbar } from './../components/navbar';
import { LoginHeader } from '../components/loginHeader';

export const Login = () => {
    return (
        <View style={styles.container}>
            <LoginHeader />
        </View>
    )
}