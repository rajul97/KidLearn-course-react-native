import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const NurseryRhymes = (props) => {
    return (
        <View style={styles.main}>

            <View style={styles.mid}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
                <View style={styles.air}>
                      <ScrollView horizontal>

                      <TouchableOpacity>
                        <View style={styles.A}>
                        <Image source={require('../assets/image/RHYME.png')} style={styles.one}></Image>
                        </View>
                        </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/humty.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/baba.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/sheep.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/old.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/bus.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/boat.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/clap.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/jack.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/clock.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>
                      
                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/spider.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/ring.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>


                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/duck.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/zz.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/wincy.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/monkey.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/lady.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/baby.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>



                      <TouchableOpacity>
                      <View style={styles.A}>
                      <Image source={require('../assets/image/star.png')} style={styles.one}></Image>
                      </View>
                      </TouchableOpacity>




                      


                        </ScrollView>
                        </View>
                        </View>
    </View>
  )
}

export default NurseryRhymes

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
      marginTop:20,
      marginLeft:30,
      marginRight:20,
   
  },
  one:{
      height:630,
      width:350,
    borderRadius:10,
  
   
  },
  })