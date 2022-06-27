import React from "react";
import { Image, View } from "react-native";
import acdc from '../assets/images/acdc.jpg';
import card from '../assets/images/card.jpg';
import guitar from '../assets/images/guitar.jpg';
import music from '../assets/images/music.jpg';
import patins from '../assets/images/patins.jpg';
import purpleSmoke from '../assets/images/purpleSmoke.jpg';
import smoke from '../assets/images/smoke.jpg';
import smokeLips from '../assets/images/smokeLips.jpg';
import window from '../assets/images/window.jpg';
import styles from '../screens/styles';


export const Principal = () => {
    return (
        <View style={styles.container}>
            <Image source={acdc} style={styles.image} />
            <Image source={card} style={styles.image} />
            <Image source={guitar} style={styles.image} />
            <Image source={music} style={styles.image} />
            <Image source={patins} style={styles.image} />
            <Image source={purpleSmoke} style={styles.image} />
            <Image source={smoke} style={styles.image} />
            <Image source={smokeLips} style={styles.image} />
            <Image source={window} style={styles.image} />
        </View>
    )
}