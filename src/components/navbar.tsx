import React from "react";
import { Image, Text, View } from "react-native";
import chat from "../assets/icons/chat.png";
import home from "../assets/icons/homepage.png";
import search from "../assets/icons/magnifying-glass.png";
import plus from "../assets/icons/plus.png";
import styles from '../screens/styles';

export const Navbar = () => {
    return (
        <View style={styles.container}>
            <Image source={home} style={styles.icon} />
            <Image source={search} style={styles.icon} />
            <Image source={plus} style={styles.icon} />
            <Image source={chat} style={styles.icon} />
            <Image source={{ uri: 'https://github.com/feittosaa.png' }} style={styles.icon} />
            <Text style={styles.title}>Click Here</Text>
        </View>
    )
}