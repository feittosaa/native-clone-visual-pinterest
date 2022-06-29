import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 30,
        paddingHorizontal: 5,
        textAlign: "center",
    },
    navbar: {
        flex: -1,
        marginHorizontal: 5,
        flexDirection: "row",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    icon: {
        tintColor: "#fff",
        width: 25,
        height: 25,
        alignContent: "center",
        marginHorizontal: 22,
        marginVertical: 15,
        alignItems: 'center',
    },
    iconPhoto: {
        borderRadius: 50,
        width: 25,
        height: 25,
        alignContent: "center",
        marginHorizontal: 22,
        marginVertical: 15,
    },
    more: {
        flexDirection: "row",
        width: 20,
        height: 20,
        tintColor: "#fff",
    },
    title: {
        alignContent: "center",
        textAlign: "center",
        color: '#fff',
        marginHorizontal: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    desc: {
        color: '#fff',
        marginHorizontal: 5,
        marginVertical: 5,
        textAlign: "left",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
    image: {
        width: "50%",
        maxHeight: 300,
        borderRadius: 10,
        flexBasis: '50%',
    },
    division: {
        flexBasis: '50%',
        flexDirection: "row",
    },
    header: {
        flexDirection: "row",
        textAlign: "center",
        alignSelf: "center",
    },
    loginHeader: {
        flex: -1,
        marginHorizontal: 5,
        flexDirection: "row",
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
    photos: {
        flexDirection: 'row',
    },
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row",
    },
    textSkill: {
        marginLeft: 5,
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
});

export default styles