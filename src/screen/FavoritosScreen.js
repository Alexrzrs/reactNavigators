import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function FavoritosScreen(props) {
    const { navigation } = props;
    const goToLoginForm = () => {
        navigation.navigate("LoginCerrarSesion");
    };

    return (
        <View style={styles.container}>
            <Text>Estamos en Favoritos</Text>
            <Button onPress={goToLoginForm} title="Cerrar sesión" />
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
