import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../screens/styles";

interface Botoes {
    nome: string,
    cor: string,
}

export const LoginButtons = () => {

    const [Botao, setBotao] = useState<string>('');
    const [BotaoList, setBotaoList] = useState<Botoes[]>([
        {
            nome: "Continue with Facebook",
            cor: "#fff",
        }
    ])

    return (
        <View>
            <Text style={[styles.title, { marginVertical: 20 }]}>
                My Skills
            </Text>

            <FlatList
                data={BotaoList}
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {item.nome}
                        </Text>
                    </TouchableOpacity>
                }
            />

            <TextInput
                keyboardType={"email-address"}
                placeholder={"Enter your email"}
            />
            <TextInput
                placeholder={"Enter your password"}
            />
        </View>
    )
}