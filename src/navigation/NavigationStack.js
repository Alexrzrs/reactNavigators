import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CrearCuentaForm from "../screen/CrearCuentaForm";
import LoginForm from "../screen/LoginForm";
import HomeScreen from "../screen/HomeScreen";
import NavigationTab from "./NavigationTab";

export default function NavigationStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={LoginForm} />
            <Stack.Screen
                name="Cuenta"
                component={CrearCuentaForm}
                options={{ headerShown: true }}
            />
            <Stack.Screen name="Home" component={NavigationTab} />
            <Stack.Screen name="LoginCerrarSesion" component={LoginForm} />
        </Stack.Navigator>
    );
}
