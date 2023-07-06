import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonLogin(props) {
    const { action } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 225,
        height: 60,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A71111",
        marginTop: 50,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
