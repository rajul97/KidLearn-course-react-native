import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Colours = () => {
  return (
    <View style={styles.main}>

    <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
        <View style={styles.air}>
              <ScrollView horizontal>

              <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/white.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/pink.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/red.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/orange.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/purple.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/blue.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/brown.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/green.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.A}>
                <Image source={require('../assets/image/black.png')} style={styles.one}></Image>
                </View>
                </TouchableOpacity>



                </ScrollView>
                </View>
                </View>
    </View>
  )
}

export default Colours
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