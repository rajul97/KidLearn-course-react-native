import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const HindiPoem = () => {
  return (
    <View style={styles.main}>

    <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
        <View style={styles.air}>
              <ScrollView horizontal>

              <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye1.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye2.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>



                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye3.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye4.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye5.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>



                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye6.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>



                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye7.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>



          



                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye8.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>



                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye9.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye10.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/kavitaye11.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>





                </ScrollView>
                </View>
                </View>
    </View>
  )
}

export default HindiPoem

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
            height: 50,
            width: 140,
        
        },
        mid: {
            marginLeft: 120,
            marginTop: 10,
        },
        
        A:{
            height:630,
            width:350,
            backgroundColor:'#FFFFFF',
            borderRadius:10,
            marginTop:50,
            marginLeft:30,
            marginRight:20,
         
        },
        one:{
            height:630,
            width:350,
          borderRadius:10,
        
         
        },
        })