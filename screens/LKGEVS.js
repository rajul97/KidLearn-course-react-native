import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const LKGEVS = (props) => {
  return (
    <View style={styles.main}>

    <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
    </View>

    <View style={styles.hangman1}>
        <Text style={styles.title}> E.V.S</Text>
    </View>
    <View style={styles.hangman}>
        <ScrollView>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Family")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/ROK1.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>My Family</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mybody")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/ROK9.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>My Body Parts</Text>
                    </View>
                </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Transport")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/ROK2.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Mode of Transport</Text>
                    </View>
                </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Profession")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/ROK3.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Profession</Text>
                    </View>
                </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("LKGANIMALS")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/ROK4.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Animals</Text>
                    </View>
                </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Weather")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/ROK5.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Seasons</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Colours")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/ROK3.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Colors</Text>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Habits")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/ROK6.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Good And BadHabits</Text>
                    </View>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NationalSymbolofIndian")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/peeeeee.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>National Symbol</Text>
                </View>
            </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Vegetables")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/ROK7.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Vegetables</Text>
                </View>
            </View>
        </TouchableOpacity>




        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Fruits")}>
        <View style={styles.class}>
            <View style={styles.top}>
                <Image source={require('../assets/image/ROK8.png')} style={styles.glass}></Image>
                <Text style={styles.title1}>Fruits</Text>
            </View>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Festivals")}>
    <View style={styles.class}>
        <View style={styles.top}>
            <Image source={require('../assets/image/mo10.png')} style={styles.glass}></Image>
            <Text style={styles.title1}>Festivals</Text>
        </View>
    </View>
</TouchableOpacity>


       

            </ScrollView>
            </View>

    </View>
  )
}

export default LKGEVS

const styles = StyleSheet.create({
    main: {
      backgroundColor: "#1188E4",
      flex: 1,
    },
    hangman1: {
      marginLeft: 140,
     
      height: 50,
      width: 110,
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
  
  