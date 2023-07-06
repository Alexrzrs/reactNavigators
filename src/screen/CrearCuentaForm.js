import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function CrearCuentaForm(props) {
    const { navigation } = props;
    const goToLoginForm = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text>CrearCuentaScreen</Text>
            <Button onPress={goToLoginForm} title="Enviar" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgorundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
