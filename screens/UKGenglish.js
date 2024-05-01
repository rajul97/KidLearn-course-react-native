import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const UKGenglish = (props) => {
    return (
    <View style={styles.main}>

    <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
    </View>

    <View style={styles.hangman1}>
        <Text style={styles.title}>English</Text>
    </View>
    <View style={styles.hangman}>
        <ScrollView>



<TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Prewriting")}>
<View style={styles.class}>
    <View style={styles.top}>
        <Image source={require('../assets/image/ddddd1.png')} style={styles.glass}></Image>
        <Text style={styles.title1}>Pre-writing Strokes</Text>
    </View>
</View>
</TouchableOpacity>





<TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("AtoZ")}>
<View style={styles.class}>
    <View style={styles.top}>
        <Image source={require('../assets/image/ddddd3.png')} style={styles.glass}></Image>
        <Text style={styles.title1}>A to Z Alphabates</Text>
    </View>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("AtoZwords")}>
<View style={styles.class}>
    <View style={styles.top}>
        <Image source={require('../assets/image/capra-8535002_1280.jpg')} style={styles.glass}></Image>
        <Text style={styles.title1}>Alphabates In Words</Text>
    </View>
</View>
</TouchableOpacity>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("VowelsandConsonants")}>
    <View style={styles.class}>
        <View style={styles.top}>
            <Image source={require('../assets/image/eeeeee.png')} style={styles.glass}></Image>
            <Text style={styles.title1}>Basic Grammar</Text>
        </View>
    </View>
</TouchableOpacity>

<TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Grammer")}>
        <View style={styles.class}>
            <View style={styles.top}>
                <Image source={require('../assets/image/eeeeee2.png')} style={styles.glass}></Image>
                <Text style={styles.title1}>Grammar</Text>
            </View>
        </View>
    </TouchableOpacity>






    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Vocabulary")}>
<View style={styles.class}>
    <View style={styles.top}>
        <Image source={require('../assets/image/ddddd4.png')} style={styles.glass}></Image>
        <Text style={styles.title1}>Vocabulary</Text>
    </View>
</View>
</TouchableOpacity>



           


            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NurseryRhymes")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/1212.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Rhymes</Text>
                </View>
            </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Englishstoryone")}>
        <View style={styles.class}>
            <View style={styles.top}>
                <Image source={require('../assets/image/12121.png')} style={styles.glass}></Image>
                <Text style={styles.title1}>Story</Text>
            </View>
        </View>
    </TouchableOpacity>





        



       

            </ScrollView>
            </View>

    </View>
  )
}

export default UKGenglish

const styles = StyleSheet.create({
    main: {
      backgroundColor: "#1188E4",
      flex: 1,
    },
    hangman1: {
      marginLeft: 120,
      marginTop: 10,
      height: 50,
      width: 140,
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
  
  