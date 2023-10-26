import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import buttoncss from './buttoncss'
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Button = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleprees = ()=>{
    
    console.log('salsm');
    navigation.navigate('CamerScreen', { screen: 'Camer' })
  }
  return (
    <TouchableOpacity style={buttoncss.touc} onPress={handleprees}>
      <Text style={buttoncss.text}>Scan Qr</Text>
    </TouchableOpacity>
  )
}

export default Button