import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import acdc from '../assets/images/acdc.jpg';
import card from '../assets/images/card.jpg';
import guitar from '../assets/images/guitar.jpg';
import music from '../assets/images/music.jpg';
import patins from '../assets/images/patins.jpg';
import purpleSmoke from '../assets/images/purpleSmoke.jpg';
import smoke from '../assets/images/smoke.jpg';
import smokeLips from '../assets/images/smokeLips.jpg';
import window from '../assets/images/window.jpg';
import more from "../assets/icons/more.png"
import styles from "../screens/styles";

interface CardPair {
    imagem: string,
    descricao: string,
}


export const Division = () => {
    const [CardPairList, setCardPairList] = useState<CardPair[]>([
        {
            imagem: acdc,
            descricao: "Rock n roll",
        },
        {
            imagem: card,
            descricao: "Love u",
        },
        {
            imagem: guitar,
            descricao: "White vibes",
        },
        {
            imagem: music,
            descricao: "only music",
        },
        {
            imagem: patins,
            descricao: "go on",
        },
        {
            imagem: purpleSmoke,
            descricao: "electronic",
        },
        {
            imagem: smoke,
            descricao: "SmOk3",
        },
        {
            imagem: smokeLips,
            descricao: "Close colorful",
        },
        {
            imagem: window,
            descricao: "u and i",
        },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.photos}>
                <FlatList
                    data={CardPairList}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View style={styles.division}>
                                    <Image style={styles.image} source={item.imagem} />
                                </View>
                                <View style={styles.division}>
                                    <Text style={styles.desc}>{item.descricao}</Text>
                                    <Image source={more} style={styles.more} />
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}