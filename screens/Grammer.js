import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Grammer = () => {
  return (
    <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                <View style={styles.air}>
                      <ScrollView horizontal>

                      <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/Book.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/Indexone.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap1.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap2.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap3.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap4.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap5.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap6.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap7.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap8.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/chap9.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                      


                        </ScrollView>
                        </View>
                        </View>
    </View>
  )
}

export default Grammer
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