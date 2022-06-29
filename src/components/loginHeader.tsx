import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import styles from "../screens/styles";
import close from "../assets/icons/close.png"

export const LoginHeader = () => {
    return (
        <View style={styles.loginHeader}>
            <TouchableOpacity>
                <Image source={close} style={styles.icon} />
            </TouchableOpacity>
            <Text style={[styles.loginTitle]}>Log in</Text>
        </View>
    )
}