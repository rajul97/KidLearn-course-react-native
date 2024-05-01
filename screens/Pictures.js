import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Pictures = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../assets/image/picture.png')} style={styles.one}>
                <View style={styles.mid}>

                    <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                    <View style={styles.air}>
                        <ScrollView>

                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Transport")}>
                        <View style={styles.one2}>
                            <Text style={styles.title1}>Transport</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Colours")}>
                        <View style={styles.one2}>
                            <Text style={styles.title1}>Color</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Profession")}>
                        <View style={styles.one2}>
                            <Text style={styles.title1}>Profession</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Calander")}>
                        <View style={styles.one2}>
                            <Text style={styles.title1}>Calandar</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Calander")}>
                        <View style={styles.one2}>
                            <Text style={styles.title1}>Dinosour</Text>
                        </View>
                    </TouchableOpacity>


                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Flagofnations")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Flags of Nations</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Freedomfighter")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Freedom Fighters and Leaders In India</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Animals")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Famous Players</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("SevenWonders")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Seven Wonders</Text>
                                </View>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Religious")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Religious Symbols</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Festivals")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Festivals</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Animals")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Animals</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Fruits")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Fruits</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Vegetables")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Vegetables</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Weather")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Seasons</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Currency")}>
                            <View style={styles.one2}>
                                <Text style={styles.title1}>Currency</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mybody")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>MyBody</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Religious")}>
                                <View style={styles.one2}>
                                    <Text style={styles.title1}>Religion</Text>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>





                    </View>
                </View>
            </ImageBackground>

        </View>

    )
}

export default Pictures

const styles = StyleSheet.create({

    main: {
        backgroundColor: '#1188E4',



    },
    one: {
        height: 770,
        width: 400,
    },
    min: {
        height: 90,
        width: 130,
        marginLeft: 130,
        resizeMode:"contain",

    },

    air: {
        marginTop: 80,
        marginLeft: 15,
    },

    title1: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'black',
    },
    one2: {
        height: 40,
        width: 700,
        backgroundColor: 'white',
        marginTop: 15,
        marginRight: 10,

    },
})