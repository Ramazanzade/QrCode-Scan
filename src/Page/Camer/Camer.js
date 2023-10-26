import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './cameracss';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateScannedData } from '../../Store/feature/scannerSlice';

const Camer = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [scannerActive, setScannerActive] = useState(true);
  const dispatch = useDispatch();

  const onSuccess = (e) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data: ' + check);

    if (check === 'http') {
      console.log('salam11');
      Linking.openURL(e.data).catch(err => console.error('An error occurred', err));
      const scanData = {
        websiteName: e.data,
        scanDate: new Date().toLocaleString(),
      };
      dispatch(updateScannedData(scanData));
      // navigation.navigate('Home', scanData);
      console.log('salam', scanData);
      setScannerActive(true);
    } else {

    }
  };

  useEffect(() => {
    if (isFocused) {
      setScannerActive(true);
    } else {
      setScannerActive(false);
    }
  }, [isFocused]);
  return (
    <View style={styles.scrollViewStyle}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textTitle}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
      {scannerActive && (
        <QRCodeScanner
          reactivate={true}
          showMarker={true}
          onRead={onSuccess}
          topContent={
            <Text style={styles.centerText}>
              Please move your camera {"\n"} over the QR Code
            </Text>
          }
          bottomContent={
            <View>
              <ImageBackground source={require('../../Asset/imge/q.jpg')} style={styles.bottomContent} />
            </View>
          }
        />
      )}
    </View>
  );
};

export default Camer;
