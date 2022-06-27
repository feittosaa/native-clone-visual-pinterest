import React from "react";
import { Text, View } from "react-native";
import { Navbar } from "../components/navbar";
import { Principal } from "../components/principal";
import styles from './styles';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>Browse</Text>
            <Text style={[styles.title]}>Watch</Text>
            <Principal />
            <Navbar />
        </View>
    )
}