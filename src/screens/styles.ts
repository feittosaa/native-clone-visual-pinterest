import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 40,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    navbar: {
        flex: 5,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: "#fff",
    },
    more: {
        width: 20,
        height: 20,
        tintColor: "#fff",
        alignContent: "flex-end",
    },
    title: {
        alignContent: "center",
        textAlign: "center",
        color: '#fff',
        marginHorizontal: 5,
    },
    desc: {
        color: '#fff',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    image: {
        width: "45%",
        height: 200,
        borderRadius: 10,
    },
    division: {
        alignContent: "center",
        flexDirection: "row",
    },
    header: {
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 10,
    },
});

export default styles