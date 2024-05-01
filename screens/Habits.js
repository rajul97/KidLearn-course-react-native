import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
const Habits = () => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                <View style={styles.air}>
                    <ScrollView horizontal>

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/Habits.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/Habits1.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/Habits2.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/Habits3.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>

                        

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/Habits4.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                            <Image source={require('../assets/image/Habits5.png')} style={styles.one}></Image>
                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity>
                    <View style={styles.A}>
                        <Image source={require('../assets/image/Habits6.png')} style={styles.one}></Image>
                    </View>
                </TouchableOpacity>




                <TouchableOpacity>
                <View style={styles.A}>
                    <Image source={require('../assets/image/Habits7.png')} style={styles.one}></Image>
                </View>
            </TouchableOpacity>




         




                       


                   



       

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Habits

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#1188E4',
        flex: 1,
    
    },
    air: {
        marginLeft: -130,
        alignItems: 'center',
    },
    min: {
        height: 90,
        width: 140,
    
    },
    mid: {
        marginLeft: 120,
      
    },
    
    A:{
        height:630,
        width:350,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginTop:5,
        marginLeft:30,
        marginRight:20,
     
    },
    one:{
        height:630,
        width:350,
      borderRadius:10,
    
     
    },
    })