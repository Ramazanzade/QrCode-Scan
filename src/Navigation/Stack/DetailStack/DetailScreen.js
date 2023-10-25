import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../../../Page/Detail/Detail';
const Stack = createNativeStackNavigator();
const DetailScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Detail" component={Detail} />
</Stack.Navigator>
  )
}

export default DetailScreen