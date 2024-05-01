import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
const Nurseryclass = (props) => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
            </View>

            <View style={styles.hangman1}>
                <Text style={styles.title}> Nursery</Text>
            </View>
            <View style={styles.hangman}>
                <ScrollView>


                <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NurseryMaths")}>
                        <View style={styles.class1}>
                            <View style={styles.top}>
                                <Image source={require('../assets/image/FIGMA1.png')} style={styles.glass}></Image>
                                <Text style={styles.title1}>Mathematics</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("EnglishNursery")}>
                        <View style={styles.class1}>
                            <View style={styles.top}>
                                <Image source={require('../assets/image/FIGMA2.png')} style={styles.glass}></Image>
                                <Text style={styles.title1}>English</Text>
                            </View>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NurseryEnvi")}>
                        <View style={styles.class1}>
                            <View style={styles.top}>
                                <Image source={require('../assets/image/FIGMA4.png')} style={styles.glass}></Image>
                                <Text style={styles.title1}>E.V.S</Text>
                     
                            </View>

                        </View>
                    </TouchableOpacity>

              
                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NurseryHindi")}>
                        <View style={styles.class1}>
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

export default Nurseryclass
const styles = StyleSheet.create({
    main: {
        backgroundColor: "#1188E4",
        flex: 1,

    },
    hangman1: {
        marginLeft: 110,
        marginTop: 10,
        height:50,
        width:170,
        backgroundColor:'red',
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
        backgroundColor: "#D5FFD0",
        marginTop: 40,
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




    class12: {
        width: 370,
        height: 100,
        backgroundColor: "#279EFF",
        marginTop: 20,
        borderRadius: 15,
        margin: 10,
    },




    class13: {
        width: 370,
        height: 100,
        backgroundColor: "#40F8FF",
        marginTop: 20,
        borderRadius: 15,
        margin: 10,
    },


    class4: {
        width: 370,
        height: 100,
        backgroundColor: "pink",
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
        marginTop: 10,
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