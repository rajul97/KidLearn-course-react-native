import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const UKG = (props) => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
            </View>

            <View style={styles.hangman1}>
                <Text style={styles.title}> UKG</Text>
            </View>
            <View style={styles.hangman}>
                <ScrollView>


                <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("UKGmaths")}>
                        <View style={styles.class}>
                            <View style={styles.top}>
                                <Image source={require('../assets/image/FIGMA1.png')} style={styles.glass}></Image>
                                <Text style={styles.title1}>Mathematics</Text>
                            </View>
                        </View>
                    </TouchableOpacity>



                

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("UKGenglish")}>
                        <View style={styles.class1}>
                            <View style={styles.top}>
                                <Image source={require('../assets/image/FIGMA2.png')} style={styles.glass}></Image>
                                <Text style={styles.title1}>English</Text>
                            </View>
                        </View>
                    </TouchableOpacity>




                   



                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("UKGevs")}>
                        <View style={styles.class3}>
                            <View style={styles.top}>
                                <Image source={require('../assets/image/FIGMA4.png')} style={styles.glass}></Image>
                                <Text style={styles.title1}>E.V.S</Text>
                           
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("UKGhindi")}>
                        <View style={styles.class3}>
                            <View style={styles.top}>
                                <Image source={require('../assets/image/FIGMA5.png')} style={styles.glass}></Image>
                                <Text style={styles.title1}>हिन्दी</Text>
                             
                            </View>

                        </View>
                    </TouchableOpacity>




                </ScrollView>

            </View>




        </View>
    )
}

export default UKG
const styles = StyleSheet.create({
    main: {
        backgroundColor: "#1188E4",
        flex: 1,

    },
    hangman1: {
        marginLeft: 140,
        marginTop: 10,
        height:50,
        width:100,
        backgroundColor:'blue',
        borderRadius:20,
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
        height: 90,
        width: 90,
        marginTop: 5,
        marginLeft: 5,
    },

    class: {
        width: 370,
        height: 100,
        backgroundColor: "#0C356A",
        marginTop: 10,
        borderRadius: 15,
        margin: 10,
    },



    class1: {
        width: 370,
        height: 100,
        backgroundColor: "#0C356A",
        marginTop: 20,
        borderRadius: 15,
        margin: 10,
    },




    class2: {
        width: 370,
        height: 100,
        backgroundColor: "#0C356A",
        marginTop: 20,
        borderRadius: 15,
        margin: 10,
    },




    class3: {
        width: 370,
        height: 100,
        backgroundColor: "#0C356A",
        marginTop: 20,
        borderRadius: 15,
        margin: 10,
    },




    title1: {
        color: '#7E30E1',
        fontSize: 29,
        marginTop: 25,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    title2: {
        color: '#7E30E1',
        fontSize: 29,
        marginTop: 55,
        marginLeft: -187,
        fontWeight: 'bold',


    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',

    },





    hangman: {
        marginTop: 25,
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