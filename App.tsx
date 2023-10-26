import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Navigation/Stack/HomeStack/HomeScreen';
import CamerScreen from './src/Navigation/Stack/CamerStack/CamerScreen';
import { Provider} from 'react-redux';
import { store } from './src/Store/store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CamerScreen" component={CamerScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const BigApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default BigApp;