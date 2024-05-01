import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const Homescreen = (props) => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
            </View>
            <View Style={styles.Hello}>

                <ScrollView horizontal>

                <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Pictures")}>
                <View style={styles.class}>
                    <View style={styles.one}>
                        <Image source={require('../assets/image/activity.png')} style={styles.make}></Image>
                        <Text style={styles.title1}>Pictures</Text>
                        <Text style={styles.title2}>World</Text>
                    </View>
                </View>
            </TouchableOpacity>


                    

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("NurseryRhymes")}>
                        <View style={styles.class}>
                            <View style={styles.one}>
                                <Image source={require('../assets/image/padhai1.png')} style={styles.make}></Image>
                                <Text style={styles.title1}>English</Text>
                                <Text style={styles.title2}>Rhymes</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Gamehomescreen")}>
                        <View style={styles.class}>
                            <View style={styles.one}>
                                <Image source={require('../assets/image/gamer.png')} style={styles.make}></Image>
                                <Text style={styles.title1}>Games</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Englishstoryone")}>
                    <View style={styles.class}>
                        <View style={styles.one}>
                            <Image source={require('../assets/image/fofo1.png')} style={styles.make}></Image>
                            <Text style={styles.title1}>English</Text>
                            <Text style={styles.title2}>Storys</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                   

                <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Hindistory")}>
                        <View style={styles.class}>
                            <View style={styles.one}>
                                <Image source={require('../assets/image/hindi11.png')} style={styles.make}></Image>
                                <Text style={styles.title1}>कहानियों</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("HindiPoem")}>
                    <View style={styles.class}>
                        <View style={styles.one}>
                            <Image source={require('../assets/image/writer.png')} style={styles.make}></Image>
                            <Text style={styles.title1}> कविता</Text>
                        </View>
                    </View>
                </TouchableOpacity>





                 
                </ScrollView>
            </View>

            <View style={styles.classes}>  

            <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Nurseryclass")}>
            <View style={styles.vall}>
                <View style={styles.two}>
                <Image source={require('../assets/image/astronot.png')} style={styles.make1}></Image>
                <Text style={styles.title3}>Nursery</Text>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("LKG")}>
            <View style={styles.vall}>
                <View style={styles.two}>
                    <Image source={require('../assets/image/firefighter.png')} style={styles.make1}></Image>
                    <Text style={styles.title3}>LKG</Text>
                    
                </View>
            </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("UKG")}>
            <View style={styles.vall}>
                <View style={styles.two}>
                    <Image source={require('../assets/image/oneall.png')} style={styles.make1}></Image>
                    <Text style={styles.title3}>UKG</Text>
                   
                </View>
            </View>
        </TouchableOpacity>
            

 
            
            
            
            </View>

        </View>

    )
}

export default Homescreen

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#1188E4",
        flex: 1,

    },

    mid: {
        alignSelf: 'flex-start',
        marginLeft: 120,
      

    },
    min: {
        height: 90,
        width: 140,

    },
    Hello: {
        flexDirection: 'row',


    },

    class: {
        width: 350,
        height: 200,
        backgroundColor: "white",
        marginTop: 30,
        borderRadius: 15,
        margin: 10,
    },
    title1: {
        color: 'black',
        fontSize: 27,
        marginTop: 80,
        marginLeft: 7,

    },
    title2: {
        color: 'black',
        fontSize: 27,
        marginTop: 110,
        marginLeft: -88,


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

    vall:{
        height:100,
        width:320,
        backgroundColor:'white',
        margin:20,
        borderRadius:10,
    },
    title3:{
      marginLeft:20,
     color:"black",
      fontSize:50,
    },
    two:{
        flexDirection:"row",
    },
})