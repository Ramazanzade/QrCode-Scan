
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
touc:{
    backgroundColor:'#34DD5A',
    width:100,
    height:50,
    borderRadius:10
},
text:{
    fontSize:15,
    textAlign:'center',
    marginTop:'8%'
}

})
