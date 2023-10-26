import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import buttoncss from './buttoncss'
import { useNavigation } from '@react-navigation/native'

const Button = () => {
  const navigation = useNavigation(); 

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