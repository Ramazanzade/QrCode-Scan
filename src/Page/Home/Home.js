import { View, Text, FlatList } from 'react-native'
import React from 'react'
import homecss from './homecss'
import Button from '../../Component/Button/Button'
import { useSelector } from 'react-redux'

const Home = () => {
    const scannedData = useSelector((state) => state.scannerReducer.scannedData);
    const renderitem = (item) => {
        console.log(item);
        return (
            <View>
                <Text>{item.websiteName}</Text>
                <Text>{item.scanDate}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={homecss.buttonview}>
                <Button></Button>
            </View>
            <FlatList
                data={scannedData ? [scannedData] : []}
                renderItem={({ item }) => renderitem(item)}
                // keyExtractor={(item) => item.id.toString()} 
            />
        </View>
    )
}

export default Home