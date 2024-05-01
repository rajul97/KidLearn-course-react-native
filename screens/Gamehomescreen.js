import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Gamehomescreen = (props) => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                <View style={styles.air}>
                <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NumberCountingGame")}>
                        <View style={styles.Game1}>
                            <Image source={require('../assets/image/shift.png')} style={styles.one}></Image>
                        </View>
                    </TouchableOpacity>

                    

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("TicTacToe")}>
                        <View style={styles.Game1}>
                            <Image source={require('../assets/image/tictoctoe.png')} style={styles.one}></Image>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.air}>
                <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("MathQuiz")}>
                    <View style={styles.Game1}>
                        <Image source={require('../assets/image/MATHSQUIZ1.png')} style={styles.one}></Image>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Fruitvegetablesquiz")}>
                    <View style={styles.Game1}>
                        <Image source={require('../assets/image/Fruitvegetablesquiz1.png')} style={styles.one}></Image>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={styles.air}>
            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("ColorFillGame")}>
                <View style={styles.Game1}>
                    <Image source={require('../assets/image/colorfill.png')} style={styles.one}></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("SentenceGame")}>
                <View style={styles.Game1}>
                    <Image source={require('../assets/image/sectance.png')} style={styles.one}></Image>
                </View>
            </TouchableOpacity>
        </View>



            </View>
        </View>
    )
}

export default Gamehomescreen

const styles = StyleSheet.create({


    main: {
        backgroundColor: "#1188E4",
        flex: 1,

    },
    air: {
        marginLeft: -130,
        alignItems: 'center',
    },

    mid: {

        marginLeft: 120,


    },
    min: {
        height: 90,
        width: 140,

    },
    main1: {
        height: 70,
        width: 375,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,

    },
    lop: {
        marginTop: 50,
        marginLeft: -110,



    },
    pro: {
        height: 73,
        width: 73,
        borderRadius: 20,
    },
    main2: {
        flexDirection: 'row',
    },
    title: {
        color: 'black',
        fontSize: 24,
        marginTop: 10,
        marginLeft: 5,
    },
    title1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    one: {
        height: 157,
        width: 150,
        borderRadius: 20,
    },
    air: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: -110,
        justifyContent: 'space-around',
    },
})