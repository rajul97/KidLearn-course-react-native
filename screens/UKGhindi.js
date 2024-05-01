import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const UKGhindi = (props) => {
  return (
    <View style={styles.main}>

    <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
    </View>

    <View style={styles.hangman1}>
        <Text style={styles.title}> हिन्दी</Text>
    </View>
    <View style={styles.hangman}>
        <ScrollView>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Varnmala")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/rowwwone.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}> वर्णमाला</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("HindiPoem")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/rowwwone1.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}> कविता</Text>
                    </View>
                </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Hindistory")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/rowwwone2.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}> कहानियों</Text>
                    </View>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Hindiknowledge")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/rowwwone3.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}> सामान्य ज्ञान</Text>
                </View>
            </View>
        </TouchableOpacity>



            


       

            </ScrollView>
            </View>

    </View>
  )
}

export default UKGhindi

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
  
  