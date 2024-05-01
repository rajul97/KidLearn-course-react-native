import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './src/screens/Splashscreen';
import Homescreen from './src/screens/Homescreen';
import WelcomeScreen from './src/screens/Welcomescreen';

import Birds from './src/screens/Birds';
import Calander from './src/screens/Calander';
import ColorFillGame from './src/screens/ColorFillGame';
import Colours from './src/screens/Colours';
import Currency from './src/screens/Currency';
import Dino from './src/screens/Dino';
import EnglishNursery from './src/screens/EnglishNursery';
import Englishstoryone from './src/screens/Englishstoryone';
import Family from './src/screens/Family';
import Festivals from './src/screens/Festivals';
import Flagofnations from './src/screens/Flagofnations';
import Freedomfighter from './src/screens/Freedomfighter';
import Fruits from './src/screens/Fruits';
import Gamehomescreen from './src/screens/Gamehomescreen';
import Grammer from './src/screens/Grammer';
import Habits from './src/screens/Habits';
import HangmanGame from './src/screens/HangmanGame';
import Hindiknowledge from './src/screens/Hindiknowledge';
import HindiPoem from './src/screens/HindiPoem';
import Hindistory from './src/screens/Hindistory';
import Inscets from './src/screens/Inscets';
import LKG from './src/screens/LKG';
import LKGANIMALS from './src/screens/LKGANIMALS';
import LKGEnglish from './src/screens/LKGEnglish';
import LKGEVS from './src/screens/LKGEVS';
import LKGhindi from './src/screens/LKGhindi';
import LKGMaths from './src/screens/LKGMaths';
import Mammals from './src/screens/Mammals';
import MathQuiz from './src/screens/MathQuiz';
import Animals from './src/screens/Animals';
import MathsConcept from './src/screens/MathsConcept';
import Mybody from './src/screens/Mybody';
import Nationalholidays from './src/screens/Nationalholidays';
import NationalSymbolofIndian from './src/screens/NationalSymbolofIndian';
import NumberCountingGame from './src/screens/NumberCountingGame';
import Nurseryclass from './src/screens/Nurseryclass';
import NurseryHindi from './src/screens/NurseryHindi';
import NurseryMaths from './src/screens/NurseryMaths';
import NurseryRhymes from './src/screens/NurseryRhymes';
import Nurseryshape from './src/screens/Nurseryshape';
import NurseryEnvi from './src/screens/NurseryEnvi';
import Oneto from './src/screens/Oneto';
import Pictures from './src/screens/Pictures';
import Prewriting from './src/screens/Prewriting';
import Profession from './src/screens/Profession';
import RegistrationScreen from './src/screens/RegisterScreen';
import Religious from './src/screens/Religious';
import Reptiles from './src/screens/Reptiles';
import SentenceGame from './src/screens/SentenceGame';
import SevenWonders from './src/screens/SevenWonders';
import SYMBOL from './src/screens/SYMBOL';
import Transport from './src/screens/Transport';
import UKG from './src/screens/UKG';
import UKGenglish from './src/screens/UKGenglish';
import UKGevs from './src/screens/UKGevs';
import UKGhindi from './src/screens/UKGhindi';
import UKGmaths from './src/screens/UKGmaths';
import Vegetables from './src/screens/Vegetables';
import Vocabulary from './src/screens/Vocabulary';
import Fruitvegetablesquiz from './src/screens/Fruitvegetablesquiz';
import Aquatic from './src/screens/Aquatic';
import AtoZ from './src/screens/AtoZ';
import Varnmala from './src/screens/Varnmala';
import VowelsandConsonants from './src/screens/VowelsandConsonants';
import Weather from './src/screens/Weather';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Welcomescreen" component={WelcomeScreen} />
        <Stack.Screen name="Birds" component={Birds} />
        <Stack.Screen name="Calander" component={Calander} />
        <Stack.Screen name="ColorFillGame" component={ColorFillGame} />
        <Stack.Screen name="Colours" component={Colours} />
        <Stack.Screen name="Currency" component={Currency} />
        <Stack.Screen name="Dino" component={Dino} />
        <Stack.Screen name="EnglishNursery" component={EnglishNursery} />
        <Stack.Screen name="Englishstoryone" component={Englishstoryone} />
        <Stack.Screen name="Family" component={Family} />
        <Stack.Screen name="Festivals" component={Festivals} />
        <Stack.Screen name="Flagofnations" component={Flagofnations} />
        <Stack.Screen name="Freedomfighter" component={Freedomfighter} />
        <Stack.Screen name="Fruits" component={Fruits} />
        <Stack.Screen name="Gamehomescreen" component={Gamehomescreen} />
        <Stack.Screen name="Grammer" component={Grammer} />
        <Stack.Screen name="Habits" component={Habits} />
        <Stack.Screen name="HangmanGame" component={HangmanGame} />
        <Stack.Screen name="Hindiknowledge" component={Hindiknowledge} />
        <Stack.Screen name="HindiPoem" component={HindiPoem} />
        <Stack.Screen name="Hindistory" component={Hindistory} />
        <Stack.Screen name="Inscets" component={Inscets} />
        <Stack.Screen name="LKG" component={LKG} />
        <Stack.Screen name="Animals" component={Animals} />
        <Stack.Screen name="LKGANIMALS" component={LKGANIMALS} />
        <Stack.Screen name="LKGEnglish" component={LKGEnglish} />
        <Stack.Screen name="LKGMaths" component={LKGMaths} />
        <Stack.Screen name="LKGhindi" component={LKGhindi} />
        <Stack.Screen name="LKGEVS" component={LKGEVS} />
        <Stack.Screen name="Mammals" component={Mammals} />
        <Stack.Screen name="MathQuiz" component={MathQuiz} />
        <Stack.Screen name="MathsConcept" component={MathsConcept} />
        <Stack.Screen name="Mybody" component={Mybody} />
        <Stack.Screen name="Nationalholidays" component={Nationalholidays} />
        <Stack.Screen name="NationalSymbolofIndian" component={NationalSymbolofIndian} />
        <Stack.Screen name="NumberCountingGame" component={NumberCountingGame} />
        <Stack.Screen name="Nurseryclass" component={Nurseryclass} />
        <Stack.Screen name="NurseryHindi" component={NurseryHindi} />
        <Stack.Screen name="NurseryMaths" component={NurseryMaths} />
        <Stack.Screen name="NurseryRhymes" component={NurseryRhymes} />
        <Stack.Screen name="Nurseryshape" component={Nurseryshape} />
        <Stack.Screen name="NurseryEnvi" component={NurseryEnvi} />
        <Stack.Screen name="Oneto" component={Oneto} />
        <Stack.Screen name="Pictures" component={Pictures} />
        <Stack.Screen name="Prewriting" component={Prewriting} />
        <Stack.Screen name="Profession" component={Profession} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="Religious" component={Religious} />
        <Stack.Screen name="Reptiles" component={Reptiles} />
        <Stack.Screen name="SentenceGame" component={SentenceGame} />
        <Stack.Screen name="SevenWonders" component={SevenWonders} />
        <Stack.Screen name="Fruitvegetablesquiz" component={Fruitvegetablesquiz} />
        <Stack.Screen name="SYMBOL" component={SYMBOL} />
        <Stack.Screen name="Transport" component={Transport} />
        <Stack.Screen name="UKG" component={UKG} />
        <Stack.Screen name="UKGenglish" component={UKGenglish} />
        <Stack.Screen name="UKGevs" component={UKGevs} />
        <Stack.Screen name="UKGhindi" component={UKGhindi} />
        <Stack.Screen name="UKGmaths" component={UKGmaths} />
        <Stack.Screen name="Vegetables" component={Vegetables} />
        <Stack.Screen name="Vocabulary" component={Vocabulary} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Aquatic" component={Aquatic} />
        <Stack.Screen name="AtoZ" component={AtoZ} />
     
        <Stack.Screen name="Varnmala" component={Varnmala} />
        <Stack.Screen name="VowelsandConsonants" component={VowelsandConsonants} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
