import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/screen/LoginForm";
import CrearCuentaForm from "./src/screen/CrearCuentaForm";
import NavigationStack from "./src/navigation/NavigationStack";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab";
import "react-native-gesture-handler";

export default function App() {
    return (
        <NavigationContainer>
            <NavigationStack />
            {/* <LoginForm /> */}
            {/* <NavigationDrawer /> */}
        </NavigationContainer>
    );
}
