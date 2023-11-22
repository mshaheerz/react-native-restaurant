 import { View, Text, TouchableOpacity } from 'react-native'
 import React from 'react'
import { featured } from '../constants'
import { themeColor } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
 export default function CartScreens() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation()
   return (
     <View className="bg-white flex-1">
          <StatusBar style='dark' />
       {/* back button */}
       <View className="relative py-4 shadow-sm">
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={{backgroundColor: themeColor.bgColor(1)}}
        className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
       </View>
     </View>
   )
 }