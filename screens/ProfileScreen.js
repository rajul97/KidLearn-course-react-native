import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatar] = useState(require('../assets/image/pinki1.png'));
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    animateContainer();
  }, []);

  // Function to handle profile update
  const handleProfileUpdate = () => {
    // Here you can save the profile information
    console.log("Saving profile information:", { name, age, gender, location, phoneNumber, avatar });
  };

  // Function to animate the profile container
  const animateContainer = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // Interpolated style for animated container
  const animatedContainerStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  // Function to handle avatar change with animation
  const handleAvatarChange = (newAvatar) => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setAvatar(newAvatar);
      animateContainer();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.logo} />
        <Text style={styles.title}>My Profile</Text>
      </View>
      <Animated.View style={[styles.profileContainer, animatedContainerStyle]}>
        <TouchableOpacity onPress={() => avatarSelector.open()}>
          <Animated.Image
            source={avatar}
            style={[
              styles.avatar,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setGender}
          placeholder="Enter your gender"
        />
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter your location"
        />
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </Animated.View>
      <TouchableOpacity style={styles.saveButton} onPress={handleProfileUpdate}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
      <ModalSelector
        data={[
          { key: 1, label: 'Avatar 1', avatar: require('../assets/image/pinki1.png') },
          { key: 2, label: 'Avatar 2', avatar: require('../assets/image/pinki2.png') },
          { key: 3, label: 'Avatar 3', avatar: require('../assets/image/pinki3.png') },
          { key: 4, label: 'Avatar 4', avatar: require('../assets/image/pinki4.png') },
          { key: 5, label: 'Avatar 5', avatar: require('../assets/image/pinki5.png') },
          { key: 6, label: 'Avatar 6', avatar: require('../assets/image/pinki6.png') },
          { key: 7, label: 'Avatar 7', avatar: require('../assets/image/pinki7.png') },
          { key: 8, label: 'Avatar 8', avatar: require('../assets/image/pinki8.png') },
          { key: 9, label: 'Avatar 9', avatar: require('../assets/image/pinki9.png') },
          { key: 10, label: 'Avatar 10', avatar: require('../assets/image/pinki10.png') },
          { key: 11, label: 'Avatar 11', avatar: require('../assets/image/pinki11.png') },
          { key: 12, label: 'Avatar 12', avatar: require('../assets/image/pinki12.png') },
        ]}
        initValue="Select Avatar"
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        cancelButtonAccessibilityLabel={'Cancel Button'}
        onChange={(option) => handleAvatarChange(option.avatar)}
        ref={(selector) => (avatarSelector = selector)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F6E0C8',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 170,
    height: 130,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FF6347',
  },
  profileContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#FF6347',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#FF6347',
  },
  saveButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
