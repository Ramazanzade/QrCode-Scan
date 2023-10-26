import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camer from '../../../Page/Camer/Camer';
const Stack = createNativeStackNavigator();
const CamerScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Camer" component={Camer} />
    </Stack.Navigator>
  )
}

export default CamerScreen