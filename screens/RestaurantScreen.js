import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";


export default function RestaurantScreen() {
    const { params } = useRoute();
    let item = params
    return (
        <View>
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image} />
                    <TouchableOpacity 
                    className="absolute top-14 left-4 bg-gray-50 rounded-full shadow"
                    >
                        <Icon.
                        

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}