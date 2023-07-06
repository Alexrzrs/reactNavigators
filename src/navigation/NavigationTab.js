import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritosScreen from "../screen/FavoritosScreen";
import HomeScreen from "../screen/HomeScreen";

export default function NavigationTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favoritos" component={FavoritosScreen} />
        </Tab.Navigator>
    );
}
