import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, Pressable, Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMars, faVenus, faBirthdayCake, faMapMarkerAlt, faPhoneAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const RegistrationScreen = (props) => {
  const [name, setName] = useState('');
  const [ageModalVisible, setAgeModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState(null);
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const buttonScaleAnim = useRef(new Animated.Value(1)).current;

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setAgeModalVisible(false);
  };

  const handleRegistration = () => {
    if (!name || !selectedAge || !gender || !location || !phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    // Handle registration logic here
    console.log('Name:', name);
    console.log('Age:', selectedAge);
    console.log('Gender:', gender);
    console.log('Location:', location);
    console.log('Phone Number:', phoneNumber);

    props.navigation.navigate("Homescreen")

    // You can perform further validation or send data to your backend for registration
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonScaleAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(buttonScaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to KidZone!</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faUserPlus} size={30} color="#800080" />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.ageButton}
            onPress={() => setAgeModalVisible(true)}>
            <FontAwesomeIcon icon={faBirthdayCake} size={30} color="#fff" />
            <Text style={styles.buttonText}>{selectedAge || 'Select Age'}</Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size={30} color="#FF4500" />
            <TextInput
              style={styles.input}
              placeholder="Enter your location"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faPhoneAlt} size={30} color="#FF69B4" />
          <TextInput
            style={styles.input}
            placeholder="Enter your parent's phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={[styles.radioButton, { backgroundColor: gender === 'male' ? '#87CEEB' : 'transparent' }]}
            onPress={() => setGender('male')}>
            <FontAwesomeIcon icon={faMars} size={40} color="#fff" />
            <Text style={styles.title1}>Boy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, { backgroundColor: gender === 'female' ? '#FFB6C1' : 'transparent' }]}
            onPress={() => setGender('female')}>
            <FontAwesomeIcon icon={faVenus} size={40} color="#fff" />
            <Text style={styles.title1}>Girl</Text>
          </TouchableOpacity>
        </View>
        <Animated.View style={{ transform: [{ scale: buttonScaleAnim }] }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              animateButton();
              handleRegistration();
            }}>
            <FontAwesomeIcon icon={faUserPlus} size={30} color="#fff" />
            <Text style={styles.buttonText}>Register Now!</Text>
          </TouchableOpacity>
      
        </Animated.View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ageModalVisible}
        onRequestClose={() => setAgeModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style={styles.modalItem} onPress={() => handleAgeSelect('3-5')}>
              <Text style={styles.title1}>3-5 years</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => handleAgeSelect('6-9')}>
              <Text style={styles.title1}>6-9 years</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => handleAgeSelect('10-14')}>
              <Text style={styles.title1}>10-14 years</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => handleAgeSelect('15+')}>
              <Text style={styles.title1}>15+ years</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1188E4'
  },
  logoContainer: {
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#800080',
    fontFamily: 'Comic Sans MS',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#800080',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    width: '80%',
    fontSize: 20,
    backgroundColor: '#FFDAB9',
    fontFamily: 'Comic Sans MS',
  },
  button: {
    backgroundColor: '#FF4500',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS',
    marginLeft: 10,
  },
  logo: {
    height: 150,
    width: 250,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  ageButton: {
    flexDirection: 'row',
    backgroundColor: '#87CEEB',
    padding: 15,
    borderRadius: 20,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#87CEEB',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalItem: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  title1: {
    fontSize: 20,
    marginLeft: 10,
    color: '#fff',
    fontFamily: 'Comic Sans MS',
  },
});



export default RegistrationScreen;
