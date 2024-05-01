import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Oneto = () => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                <View style={styles.air}>
                      <ScrollView horizontal>

                      <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/one1(1).png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/2.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>




                      <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/3.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/4.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/5.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/6.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                    

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/7.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/8.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/9.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/10.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/11.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/12.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/13.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/14.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/15.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/16.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/17.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/18.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/19.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      
                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/20.jpg')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>



                        </ScrollView>
                        </View>
                        </View>
                        </View>
  
  )
}

export default Oneto

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