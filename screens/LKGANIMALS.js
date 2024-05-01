import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
const LKGANIMALS = () => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                <View style={styles.air}>
                    <ScrollView horizontal>

                    <TouchableOpacity>
                    <View style={styles.A}>
                        <Image source={require('../assets/image/DUCK001.png')} style={styles.one}></Image>
                    </View>
                </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK00.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK1.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK2.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK3.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>

                        

                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK4.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>



                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK5.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>




                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK6.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>





                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK7.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>





                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK8.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>





                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK9.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>





                        <TouchableOpacity>
                            <View style={styles.A}>
                                <Image source={require('../assets/image/DUCK10.png')} style={styles.one}></Image>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                            <Image source={require('../assets/image/DUCK11.png')} style={styles.one}></Image>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                    <View style={styles.A}>
                        <Image source={require('../assets/image/DUCK12.png')} style={styles.one}></Image>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity>
                <View style={styles.A}>
                    <Image source={require('../assets/image/DUCK13.png')} style={styles.one}></Image>
                </View>
            </TouchableOpacity>


        



                       


                        
                   


                       


                   



       

                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default LKGANIMALS

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