import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import chat from "../assets/icons/chat.png";
import home from "../assets/icons/homepage.png";
import search from "../assets/icons/magnifying-glass.png";
import plus from "../assets/icons/plus.png";
import styles from '../screens/styles';

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity>
                <Image source={home} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={search} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={plus} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={chat} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={{ uri: 'https://github.com/feittosaa.png' }} style={styles.iconPhoto} />
            </TouchableOpacity>
        </View>
    )
}