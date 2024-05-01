import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const NurseryMaths = (props) => {
  return (
    <View style={styles.main}>

    <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
    </View>

    <View style={styles.hangman1}>
        <Text style={styles.title}> Mathematics</Text>
    </View>
    <View style={styles.hangman}>
        <ScrollView>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Oneto")}>
                <View style={styles.class1}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/mo8.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Numbers</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("MathsConcept")}>
                <View style={styles.class1}>
                    <View style={styles.top}>
                        <Image source={require('../assets/image/mo2.png')} style={styles.glass}></Image>
                        <Text style={styles.title1}>Pre-MathsConcept</Text>
                    </View>
                </View>
            </TouchableOpacity>

           


            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Nurseryshape")}>
            <View style={styles.class1}>
                <View style={styles.top}>
                    <Image source={require('../assets/image/mo11.png')} style={styles.glass}></Image>
                    <Text style={styles.title1}>Shape</Text>
                </View>
            </View>
        </TouchableOpacity>


       

            </ScrollView>
            </View>

    </View>
  )
}

export default NurseryMaths

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#1188E4",
        flex: 1,

    },
    hangman1: {
        marginLeft: 70,
        marginTop: 10,
        height:50,
        width:250,
        backgroundColor:'green',
        borderRadius:10,
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
        marginTop: 39,
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
        fontSize: 27,
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