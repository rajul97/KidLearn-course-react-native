import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const UKGevs = (props) => {
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


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mybody")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/rowwwone.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Parts of body</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Family")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/rowwwone1.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>My Family</Text>
                    </View>
                </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Transport")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/rowwwone2.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Transport</Text>
                    </View>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Weather")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/rowwwone3.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Seasons</Text>
                </View>
            </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("LKGANIMALS")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/1212.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Animals</Text>
                </View>
            </View>
        </TouchableOpacity>



        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("SevenWonders")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/ewewe.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Wonder Of World</Text>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Freedomfighter")}>
        <View style={styles.class}>
            <View style={styles.top}>
                <Image source={require('../assets/image/ai-generated-7950757_1280.jpg')} style={styles.glass}></Image>
                <Text style={styles.title1}>Freedomfighter</Text>
            </View>
        </View>
    </TouchableOpacity>


    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Flagofnations")}>
    <View style={styles.class}>
        <View style={styles.top}>
            <Image source={require('../assets/image/love-7188730_1280.png')} style={styles.glass}></Image>
            <Text style={styles.title1}>Flag Of Nations</Text>
        </View>
    </View>
</TouchableOpacity>




        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Festivals")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/12121.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Festival</Text>
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




        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Profession")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/12122.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Profession</Text>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Religious")}>
        <View style={styles.class}>
            <View style={styles.top}>
                <Image source={require('../assets/image/Religion12.jpg')} style={styles.glass}></Image>
                <Text style={styles.title1}>Religion</Text>
            </View>
        </View>
    </TouchableOpacity>


    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Fruitvegetablesquiz")}>
    <View style={styles.class}>
        <View style={styles.top}>
            <Image source={require('../assets/image/1w1w.jpg')} style={styles.glass}></Image>
            <Text style={styles.title1}>Fruits & Vegetables </Text>
        </View>
    </View>
</TouchableOpacity>



<TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Vocabulary")}>
<View style={styles.class}>
    <View style={styles.top}>
        <Image source={require('../assets/image/cartoon-giraffe-7178753_1280.jpg')} style={styles.glass}></Image>
        <Text style={styles.title1}>Vocabulary </Text>
    </View>
</View>
</TouchableOpacity>






        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Nationalholidays")}>
            <View style={styles.class}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/wewewe.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>National Holiday</Text>
                </View>
            </View>
        </TouchableOpacity>



       

            


       

            </ScrollView>
            </View>

    </View>
  )
}

export default UKGevs

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
  
  