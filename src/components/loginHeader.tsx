import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";
import styles from "../screens/styles";
import close from "../assets/icons/close.png"

export const LoginHeader = () => {
    return (
        <View>
            <View style={styles.loginHeader}>
                <Image source={close} style={styles.icon} />
            </View>
            <Text style={[styles.title]}>Log in</Text>
        </View>
    )
}