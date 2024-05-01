import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'

const Animals = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../assets/image/animalsssss.png')} style={styles.one}>
                <View style={styles.mid}>

                    <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                    <View style={styles.air}>
                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mammals")}>
                     <View style={styles.one2}>
                            <Text style={styles.title1}>Mammals</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Birds")}>
                    <View style={styles.one2}>
                           <Text style={styles.title1}>Birds</Text>
                       </View>
                   </TouchableOpacity>


                   <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Reptiles")}>
                   <View style={styles.one2}>
                          <Text style={styles.title1}>Reptiles </Text>
                      </View>
                  </TouchableOpacity>



                  <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Aquatic")}>
                  <View style={styles.one2}>
                         <Text style={styles.title1}>Fish</Text>
                     </View>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Inscets")}>
                 <View style={styles.one2}>
                        <Text style={styles.title1}>Insects</Text>
                    </View>
                </TouchableOpacity>

                </View>
                </View>
            </ImageBackground>

        </View>

    )
}

export default Animals

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
        width: 140,
        marginLeft: 130,

    },

    air:{
        marginTop:300,
        marginLeft:10,
    },

    title1:{
        fontSize:27,
        fontWeight:'bold',
        color:'black',
        },
        one2:{
            height:40,
            width:300,
            backgroundColor:'white',
            marginTop:20,
       
        },

})