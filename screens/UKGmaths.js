import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';

const UKGmaths = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
      </View>

      <View style={styles.hangman1}>
        <Text style={styles.title}> Math</Text>
      </View>

      <View style={styles.hangman}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* Add more TouchableOpacity components here */}
          <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Oneto")}>
            <View style={styles.class}>
              <View style={styles.top}>
                <Image source={require('../assets/image/mathssss.png')} style={styles.glass}></Image>
                <Text style={styles.title1}>Numbers</Text>
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("MathsConcept")}>
            <View style={styles.class}>
              <View style={styles.top}>
                <Image source={require('../assets/image/dddddd.png')} style={styles.glass}></Image>
                <Text style={styles.title1}>Math Concept</Text>
              </View>
            </View>
          </TouchableOpacity>


       

          <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NumberCountingGame")}>
          <View style={styles.class}>
            <View style={styles.top}>
              <Image source={require('../assets/image/mathssss4.png')} style={styles.glass}></Image>
              <Text style={styles.title1}>Numbers Word</Text>
            </View>
          </View>
        </TouchableOpacity>



        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Nurseryshape")}>
            <View style={styles.class}>
              <View style={styles.top}>
                <Image source={require('../assets/image/mathssss2.png')} style={styles.glass}></Image>
                <Text style={styles.title1}>Shape</Text>
              </View>
            </View>
          </TouchableOpacity>



          <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("SYMBOL")}>
            <View style={styles.class}>
              <View style={styles.top}>
                <Image source={require('../assets/image/mathssss3.png')} style={styles.glass}></Image>
                <Text style={styles.title1}>Math Symbol</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("MathQuiz")}>
          <View style={styles.class}>
            <View style={styles.top}>
              <Image source={require('../assets/image/eeeeee1.png')} style={styles.glass}></Image>
              <Text style={styles.title1}>Math Quiz</Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Calander")}>
          <View style={styles.class}>
            <View style={styles.top}>
              <Image source={require('../assets/image/mathssss1.png')} style={styles.glass}></Image>
              <Text style={styles.title1}>Calendar</Text>
            </View>
          </View>
        </TouchableOpacity>




          {/* Add more TouchableOpacity components as needed */}
        </ScrollView>
      </View>
    </View>
  );
};

export default UKGmaths;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1188E4",
    flex: 1,
  },
  hangman1: {
    marginLeft: 130,
    marginTop: 10,
    height: 50,
    width: 120,
    backgroundColor: 'brown',
    borderRadius: 10,
  },
  mid: {
    alignSelf: 'flex-start',
    marginLeft: 120,
   
  },
  min: {
    height: 90,
    width: 140,
  },
  top: {
    flexDirection: 'row',
  },
  glass: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 30,
  },
  class: {
    width: 370,
    height: 120,
    backgroundColor: "#0C356A",
    marginTop: 35,
    borderRadius: 15,
    margin: 10,
  },
  title1: {
    color: '#7E30E1',
    fontSize: 27,
    marginTop: 40,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  hangman: {
    marginTop: 10,
    flex: 1, // Allow ScrollView to take up available space
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
