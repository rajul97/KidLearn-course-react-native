import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Festivals = () => {
  return (
    <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                <View style={styles.air}>
                      <ScrollView horizontal>

                      <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/Navratri.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/Janmashtami.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/holi.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/onam.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/RakshaBandhan.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/pongal.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/makkar.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                       

                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/ganeshadevaji.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/eidul.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/dussehra.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/diwali.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/christmas.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/baisakhi.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>






                        </ScrollView>
                        </View>
                        </View>
    </View>
  )
}

export default Festivals

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