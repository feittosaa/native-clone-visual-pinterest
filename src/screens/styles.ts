import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    navbar: {
        flex: 5,
        backgroundColor: '#222',
    },
    icon: {
        width: 20,
        tintColor: '#fff',
        backgroundColor: '#000',
        borderRadius: 12,
    },
    title: {
        textAlign: "center",
        color: '#fff',
    },
    image: {
        width: "20%",
        height: "20%",
        borderRadius: 10,
    },
});

export default styles