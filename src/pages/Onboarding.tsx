import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, StatusBar, Platform } from 'react-native';
import React, { useEffect } from 'react';
// import Icon from '@react-native-vector-icons/fontawesome5';

const { width } = Dimensions.get('window');

const Onboarding: React.FC = () => {
  useEffect(() => {
    // Make the status bar transparent
    StatusBar.setBarStyle('dark-content'); // Dark icons for better visibility
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  }, []);
  return (
    <View style={styles.screen}>
      <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
        <Image
          source={require('../assets/Logo.png')}
          style={{ height: 150, width: 150, resizeMode: 'contain' }}
        />
        <View style={{ paddingLeft: 30 }}>
          <Text style={{ fontSize: 30, color: '#000000' }}>
            Rides, Parking,
          </Text>
          <Text style={{ fontSize: 30, color: '#000000' }}>
            & Dry Cleaning
          </Text>
          <Text style={{ fontSize: 30, color: '#000000' }}>
            in an Instant!
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/Car.png')}
          style={{
            height: 300,
            width: "110%",
            resizeMode: 'contain',
            // marginVertical: 50,
            alignItems: 'center',
            marginTop: "20%"
          }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Image
          source={require('../assets/Curve.png')}
          style={{ height: 300, width: 465, resizeMode: 'contain' }}
        />
        <View style= {{flexDirection: 'row'}} >

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            // zIndex: 2,
            bottom: 20,
            right: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#ffffff',
              fontWeight: 'bold',
              marginRight: 7,
            }}
          >
            Get Started
          </Text>
         <Image 
         source={require('../assets/arrow.png')} style={{width: "10%", height:20}}
         />
        </TouchableOpacity>
        </View>
        </View>
      </View>
    // </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
    flex:1
  }
});