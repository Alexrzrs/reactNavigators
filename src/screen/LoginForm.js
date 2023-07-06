import { SvgXml } from "react-native-svg";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import ButtonLogin from "../components/ButtonLogin";
import CrearCuentaForm from "./CrearCuentaForm";

export default function LoginForm(props) {
    const { navigation } = props;
    const goToCrearCuenta = () => {
        navigation.navigate("Cuenta");
    };
    const goToHome = () => {
        navigation.navigate("Home");
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerSvg}>
                <SvgXml
                    width="450"
                    height="350"
                    xml={fondoSvg}
                    style={styles.fondoLogin}
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.titulo}>Hola</Text>
                <Text style={styles.subTitulo}>Ingresa a tu cuenta</Text>
                <TextInput
                    placeholder="efren@ruiz.com"
                    style={styles.inputText}
                />
                <TextInput placeholder="***********" style={styles.inputText} />
                <Text style={styles.text2}>Olvidaste tu contraseña</Text>
                <ButtonLogin action={goToHome} />
                <Text style={styles.text3} onPress={goToCrearCuenta}>
                    No tienes cuenta?
                    <Text style={styles.text3Inner}> Crea una</Text>
                </Text>
            </View>
        </View>
    );
}

const fondoSvg = `<svg width="430" height="235" viewBox="0 0 430 235" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-14 -82.357C-14 -93.6507 -4.65534 -102.704 6.63261 -102.347L413.467 -89.4722C423.921 -89.1413 432.355 -80.8106 432.815 -70.3609L442.674 153.842C443.303 168.148 429.135 178.46 415.715 173.464L380.637 160.404C373.772 157.848 366.06 159.25 360.533 164.056L289.892 225.496C278.6 235.317 260.917 229.712 257.345 215.179L242.849 156.204C238.36 137.941 213.435 135.408 205.363 152.394L174.182 218.009C167.828 231.38 149.654 233.453 140.452 221.857L120.549 196.778C114.644 189.337 104.321 187.076 95.8465 191.368L15.0363 232.294C1.73248 239.032 -14 229.365 -14 214.452V-82.357Z" fill="url(#paint0_linear_24_87)"/>
<defs>
<linearGradient id="paint0_linear_24_87" x1="236.595" y1="257.287" x2="237.859" y2="-85.9096" gradientUnits="userSpaceOnUse">
<stop stop-color="#F91D1D" stop-opacity="0"/>
<stop offset="0.9375" stop-color="#6D0000"/>
</linearGradient>
</defs>
</svg>
`;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        height: "100%",
    },
    containerSvg: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    fondoLogin: {
        top: -10,
    },
    containerForm: {
        top: -40,
        alignItems: "center",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 70,
        color: "#848484",
        fontWeight: "bold",
    },
    subTitulo: {
        fontSize: 20,
        color: "#848484",
    },
    inputText: {
        height: 60,
        width: "80%",
        backgroundColor: "#ffffff",
        borderRadius: 20,
        marginTop: 15,
        padding: 15,
        paddingStart: 20,
    },
    text2: {
        fontSize: 15,
        color: "#848484",
        marginTop: 10,
        marginRight: -140,
    },
    text3: {
        fontSize: 15,
        color: "#848484",
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    text3Inner: {
        fontWeight: "900",
    },
});
