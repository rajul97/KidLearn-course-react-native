import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const words = [
    { word: 'apple', category: 'fruits' },
    { word: 'banana', category: 'fruits' },
    { word: 'orange', category: 'fruits' },
    { word: 'grapes', category: 'fruits' },
    { word: 'strawberry', category: 'fruits' },
    { word: 'elephant', category: 'animals' },
    { word: 'giraffe', category: 'animals' },
    { word: 'monkey', category: 'animals' },
    { word: 'lion', category: 'animals' },
    { word: 'tiger', category: 'animals' },
    { word: 'carrot', category: 'vegetables' },
    { word: 'broccoli', category: 'vegetables' },
    { word: 'tomato', category: 'vegetables' },
    { word: 'potato', category: 'vegetables' },
    { word: 'corn', category: 'vegetables' },
    { word: 'butterfly', category: 'insects' },
    { word: 'caterpillar', category: 'insects' },
    { word: 'dragonfly', category: 'insects' },
    { word: 'ladybug', category: 'insects' },
    { word: 'bee', category: 'insects' },
    { word: 'sunflower', category: 'flowers' },
    { word: 'rose', category: 'flowers' },
    { word: 'daisy', category: 'flowers' },
    { word: 'tulip', category: 'flowers' },
    { word: 'daffodil', category: 'flowers' },
    { word: 'ship', category: 'transportation' },
    { word: 'car', category: 'transportation' },
    { word: 'train', category: 'transportation' },
    { word: 'plane', category: 'transportation' },
    { word: 'bike', category: 'transportation' },
    { word: 'fish', category: 'seaLife' },
    { word: 'whale', category: 'seaLife' },
    { word: 'dolphin', category: 'seaLife' },
    { word: 'shark', category: 'seaLife' },
    { word: 'octopus', category: 'seaLife' },
    { word: 'moon', category: 'space' },
    { word: 'star', category: 'space' },
    { word: 'sun', category: 'space' },
    { word: 'planet', category: 'space' },
    { word: 'rocket', category: 'space' },
    // Add more words and categories as needed
];

const HangmanGame = () => {
    const [wordInfo, setWordInfo] = useState({});
    const [guessedWord, setGuessedWord] = useState('');
    const [guessesLeft, setGuessesLeft] = useState(6);
    const [hangmanFigure, setHangmanFigure] = useState([]);
    const [hint, setHint] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    };

    useEffect(() => {
        startNewGame();
    }, []);

    const createHangmanFigure = (incorrectGuesses) => {
        const hangmanFigure = ['  |', '  O', ' /|\\', ' / \\'];
        return hangmanFigure.slice(0, incorrectGuesses);
    };

    const startNewGame = () => {
        const newWordInfo = getRandomWord();
        setWordInfo(newWordInfo);
        setGuessedWord('_'.repeat(newWordInfo.word.length));
        setGuessesLeft(6);
        setHangmanFigure([]);
        setHint('');
        setGameOver(false);
        setGameWon(false);
    };

    const handleGuess = (letter) => {
        if (gameOver || gameWon || guessedWord.includes(letter)) return;

        const newGuessedWord = wordInfo.word
            .split('')
            .map((char, index) => (char === letter ? letter : guessedWord[index]))
            .join('');

        setGuessedWord(newGuessedWord);

        if (!wordInfo.word.includes(letter)) {
            setGuessesLeft(guessesLeft - 1);
            setHangmanFigure(createHangmanFigure(6 - guessesLeft));
        }

        if (newGuessedWord === wordInfo.word) {
            setGameWon(true);
        } else if (guessesLeft === 1) {
            setGameOver(true);
        }
    };

    const handleHint = () => {
        const { word, category } = wordInfo;
        const totalLetters = word.length;

        const hint = `Category: ${category.toUpperCase()}, Fill-Up: ${'_'.repeat(totalLetters)}, Total Letters: ${totalLetters}`;
        setHint(hint);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hangman Game</Text>
            <Text style={styles.word}>{guessedWord}</Text>
            <View style={styles.keyboard}>
                {gameOver || gameWon ? null : (
                    <>
                        {[...Array(26)].map((_, index) => {
                            const letter = String.fromCharCode('A'.charCodeAt(0) + index);
                            return (
                                <TouchableOpacity key={index} style={styles.keyboardButton} onPress={() => handleGuess(letter)}>
                                    <Text style={styles.keyboardButtonText}>{letter}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </>
                )}
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Hint" onPress={handleHint} disabled={hint !== '' || gameOver || gameWon} />
                <Button title="New Game" onPress={startNewGame} />
            </View>
            {hint ? (
                <View style={styles.hintContainer}>
                    <Text style={styles.hintText}>{hint}</Text>
                </View>
            ) : null}
            {gameOver && <Text style={styles.resultText}>Game over. The word was: {wordInfo.word}</Text>}
            {gameWon && <Text style={styles.resultText}>You won!</Text>}
            {/* Hangman Figure */}
            {hangmanFigure.map((line, index) => (
                <Text key={index} style={styles.hangmanLine}>
                    {line}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1188E4',
    },
    title: {
        fontSize: 40,
        marginBottom: 10,
        color: 'black',
    },
    word: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF', // White text color
    },
    keyboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    keyboardButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    keyboardButtonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    hintContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        maxWidth: '80%', // Limit the width of the hint container
    },
    hintText: {
        fontSize: 16,
        color: '#000000', // Black text color for visibility
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#FFFFFF', // White text color
    },
    hangmanLine: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ff0000',
    },
});

export default HangmanGame;
