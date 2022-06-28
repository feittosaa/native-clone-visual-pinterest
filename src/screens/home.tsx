import React from "react";
import { View } from "react-native";
import { Division } from './../components/division';
import { Header } from './../components/header';
import styles from './styles';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Division />
            {/* <Navbar /> */}
        </View>
    )
}