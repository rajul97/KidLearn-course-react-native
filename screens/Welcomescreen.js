import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(nextImageIndex);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const shuffleImages = [
    require('../assets/image/sur1.png'),
    require('../assets/image/sur2.png'),
    require('../assets/image/image121.png'),
    require('../assets/image/image1212.png'),
    require('../assets/image/image1213.png'),
    require('../assets/image/image1214.png'),
    require('../assets/image/image1215.png'),
    require('../assets/image/image1216.png'),
    require('../assets/image/image1217.png'),
    require('../assets/image/image1218.png'),
    require('../assets/image/image12110.png'),
    require('../assets/image/image1222.png'),
    require('../assets/image/image1223.png'),
    require('../assets/image/image1224.png'),
    require('../assets/image/image1225.png'),
    require('../assets/image/image1226.png'),
    require('../assets/image/image1227.png'),

    // Add more images here...
  ];

  const nextImageIndex = (currentIndex) => {
    return (currentIndex + 1) % shuffleImages.length;
  };

  const handleOrientationChange = () => {
    setScreenWidth(Dimensions.get('window').width);
  };

  const handleSwipe = () => {
  props.navigation.navigate("RegistrationScreen")
    // Add your swipe action here
  };

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="pulse" // Apply pulse animation
        easing="ease-out"
        iterationCount="infinite"
        source={shuffleImages[currentImageIndex]}
        style={[
          styles.image,
          { width: screenWidth * 0.8 }, // Adjust image width based on screen width
        ]}
      />
      <TouchableOpacity onPress={handleSwipe}>
        <Animatable.View
          animation="bounceInUp" // Apply bounceInUp animation
          duration={1500}
          style={styles.buttonContainer}
        >
          <Animatable.Text animation="fadeIn" duration={1000} style={styles.buttonText}>
            Swipe to Continue
          </Animatable.Text>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1188E4',
  },
  image: {
    height: 350,
    width:400,
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 20,
    resizeMode:'contain',
    
  },
  buttonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#1188E4',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
