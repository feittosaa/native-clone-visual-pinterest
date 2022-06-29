import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../screens/styles";
import eye from "../assets/icons/eye.png"
import apple from "../assets/icons/apple-logo.png"

interface Botoes {
    nome: string,
    cor: string,
    corTexto: string,
    imagem: string,
}

export const LoginButtons = () => {

    const [Botao, setBotao] = useState<string>('');
    const [BotaoList, setBotaoList] = useState<Botoes[]>([
        {
            nome: "Continue with Facebook",
            cor: "#007fff",
            corTexto: "#fff",
            imagem: "",
        },
        {
            nome: "Continue with Google",
            cor: "#6495ed",
            corTexto: "#fff",
            imagem: "",
        },
        {
            nome: "Continue with Apple",
            cor: "#fff",
            corTexto: "#000",
            imagem: apple,
        },
    ])

    return (
        <ScrollView>
            <FlatList
                data={BotaoList}
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={[styles.button, { backgroundColor: item.cor }]}>
                        <Text style={[styles.textButton, { color: item.corTexto }]}>
                            {item.nome}
                        </Text>
                        <Image style={styles.apple} source={item.imagem} />
                    </TouchableOpacity>
                }
            />
            <Text style={[styles.title, { marginTop: 20 }]}>
                OR
            </Text>

            <Text style={styles.loginDesc}>
                Email
            </Text>
            <TextInput
                keyboardType={"email-address"}
                placeholder={"Enter your email"}
                style={styles.input}
            />
            <Text style={styles.loginDesc}>
                Password
            </Text>
            <View>
                <TextInput
                    placeholder={"Enter your password"}
                    style={[styles.input]}
                />
                <Image source={eye} style={styles.eye} />
            </View>
            <View style={[styles.center, { width: "100%" }]}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.loginEnd}>
                    Forgot your password?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginEnd}>
                    Use iCloud Keychain
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}