import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const words = {
    A: ['Apple', 'Ant', 'Astronaut'],
    B: ['Banana', 'Ball', 'Bear'],
    C: ['Cat', 'Car', 'Cake'],
    D: ['Dog', 'Duck', 'Dinosaur'],
    E: ['Elephant', 'Egg', 'Eagle'],
    F: ['Fish', 'Fox', 'Flower'],
    G: ['Giraffe', 'Grapes', 'Goat'],
    H: ['House', 'Horse', 'Hat'],
    I: ['Ice cream', 'Island', 'Igloo'],
    J: ['Jellyfish', 'Jacket', 'Jaguar'],
    K: ['Kangaroo', 'Kite', 'Key'],
    L: ['Lion', 'Lemon', 'Laptop'],
    M: ['Monkey', 'Moon', 'Milk'],
    N: ['Nest', 'Net', 'Ninja'],
    O: ['Owl', 'Orange', 'Octopus'],
    P: ['Penguin', 'Piano', 'Pizza'],
    Q: ['Queen', 'Quilt', 'Quail'],
    R: ['Rabbit', 'Robot', 'Rainbow'],
    S: ['Sun', 'Star', 'Snake'],
    T: ['Tiger', 'Tree', 'Train'],
    U: ['Umbrella', 'Unicorn', 'UFO'],
    V: ['Van', 'Volcano', 'Violin'],
    W: ['Watermelon', 'Whale', 'Worm'],
    X: ['Xylophone', 'X-ray', 'Xenon'],
    Y: ['Yacht', 'Yogurt', 'Yak'],
    Z: ['Zebra', 'Zoo', 'Zipper'],
};

const AtoZwords = () => {
    const [currentLetter, setCurrentLetter] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [wordAnim] = useState(new Animated.Value(0));

    const handleLetterPress = (letter) => {
        setCurrentLetter(letter);
        setCurrentWordIndex(0);
        wordAnim.setValue(0);
        animateWord();
    };

    const animateWord = () => {
        Animated.timing(wordAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handleNextWord = () => {
        const letterWords = words[currentLetter];
        if (letterWords && currentWordIndex < letterWords.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
            animateWord();
        }
    };

    const interpolateWordColor = wordAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#6cb2eb', '#f39c12'],
    });

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={require('../assets/image/LOGO.png')} style={styles.min}></Image>
            </View>
            <View style={styles.buttonsContainer}>
                {Object.keys(words).map((letter) => (
                    <TouchableOpacity
                        key={letter}
                        style={styles.button}
                        onPress={() => handleLetterPress(letter)}
                    >
                        <Animatable.View animation="bounceIn" delay={200}>
                            <Text style={styles.buttonText}>{letter}</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                ))}
            </View>
            {currentLetter !== '' && (
                <Animatable.View animation="fadeIn" style={styles.wordContainer}>
                    <Animated.Text
                        style={[styles.wordText, { color: interpolateWordColor }]}
                    >
                        {words[currentLetter][currentWordIndex]}
                    </Animated.Text>
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={handleNextWord}
                    >
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </Animatable.View>
            )}
        </View>
    );
};

const { width } = Dimensions.get('window');
const BUTTON_SIZE = width / 6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1188E4",
    },
    iconContainer: {
        marginTop: 20,
    },
    min: {
        height: 90,
        width: 140,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#6cb2eb',
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BUTTON_SIZE / 2,
        margin: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    wordContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    wordText: {
        fontSize: 40,
        marginBottom: 10,
        textAlign: 'center',
    },
    nextButton: {
        backgroundColor: '#f39c12',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    nextButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default AtoZwords;
