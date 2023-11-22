import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
const Stack = createStackNavigator();


import { Modal, Text, View } from 'react-native'
import React, { Component } from 'react'
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreens from "./screens/CartScreens";
import { StatusBar } from "expo-status-bar";

export default function Navigation() {

    return (
        <NavigationContainer>
            <StatusBar />
            <Stack.Navigator   screenOptions={{
                headerShown: false,
                
            }}

            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Group screenOptions={{presentation:"modal"}}>
                    <Stack.Screen  name="Cart"   options={{title:"cart",...TransitionPresets.ModalPresentationIOS,presentation:'modal'}} component={CartScreens} />
                </Stack.Group>
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )

}


// @react-navigation/stack