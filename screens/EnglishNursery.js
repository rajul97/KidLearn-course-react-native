import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const EnglishNursery = (props) => {
  return (
    <View style={styles.main}>

    <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
    </View>

    <View style={styles.hangman1}>
        <Text style={styles.title}> English</Text>
    </View>
    <View style={styles.hangman}>
        <ScrollView>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("AtoZ")}>
                <View style={styles.class}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/mo.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Alphabet/Phonics</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Vocabulary")}>
                <View style={styles.class1}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/mo9.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Vocabulary</Text>
                    </View>
                </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NurseryRhymes")}>
                <View style={styles.class1}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/raju.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Rhymes</Text>
                    </View>
                </View>
            </TouchableOpacity>


       

            </ScrollView>
            </View>

    </View>
  )
}

export default EnglishNursery

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#1188E4",
        flex: 1,

    },
    hangman1: {
        marginLeft: 110,
    
        height:50,
        width:150,
        backgroundColor:'pink',
        borderRadius:10,
    },
    mid: {
        alignSelf: 'flex-start',
        marginLeft: 120,
        marginTop: 10,
    },
    min: {
        height: 90,
        width: 140,

    },
    top: {
        flexDirection: 'row',
    },
    glass: {
        height: 120,
        width: 120,
        marginTop: 15,
        marginLeft: 5,
        borderRadius:40,
    },

    class: {
        width: 370,
        height: 150,
        backgroundColor: "#F39F5A",
        marginTop: 10,
        borderRadius: 15,
        margin: 10,
    },



    class1: {
        width: 370,
        height: 150,
        backgroundColor: "#0C356A",
        marginTop: 20,
        borderRadius: 15,
        margin: 10,
    },




    class2: {
        width: 370,
        height: 100,
        backgroundColor: "#279EFF",
        marginTop: 10,
        borderRadius: 15,
        margin: 10,
    },




    class3: {
        width: 370,
        height: 100,
        backgroundColor: "#40F8FF",
        marginTop: 10,
        borderRadius: 15,
        margin: 10,
    },




    title1: {
        color: '#7E30E1',
        fontSize: 29,
        marginTop: 45,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    title2: {
        color: '#7E30E1',
        fontSize: 29,
        marginTop: 90,
        marginLeft: -190,
        fontWeight: 'bold',


    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',

    },





    hangman: {
        marginTop: 50,
    },

    make: {
        height: 200,
        width: 200,
        borderRadius: 7,
    },

    make1: {
        height: 100,
        width: 100,
        borderRadius: 7,
    },
    one: {
        flexDirection: 'row',
    },

    vall: {
        height: 100,
        width: 320,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10,
    },
    title3: {
        marginLeft: 20,
        color: "black",
        fontSize: 50,
    },
    two: {
        flexDirection: "row",
    },
})