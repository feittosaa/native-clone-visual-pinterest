import React from "react";
import { Text, View } from "react-native";
import styles from "../screens/styles";

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={[styles.title]}>Browse</Text>
            <Text style={[styles.title]}>Watch</Text>
        </View>
    )
}