import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';

const SentenceGame = () => {
  const sentences = [
    { sentence: 'I ___ to the ___', options: [['go', 'run'], ['park', 'store']], answer: ['go', 'park'] },
    { sentence: 'The ___ is ___', options: [['sun', 'moon'], ['bright', 'dim']], answer: ['sun', 'bright'] },
    { sentence: 'She ___ to the ___', options: [['went', 'walked'], ['store', 'park']], answer: ['went', 'park'] },
    { sentence: 'He ___ the ___', options: [['ate', 'drank'], ['apple', 'juice']], answer: ['ate', 'apple'] },
    { sentence: 'The ___ is ___', options: [['dog', 'cat'], ['barking', 'meowing']], answer: ['dog', 'barking'] },
    { sentence: 'The ___ is ___', options: [['flower', 'tree'], ['red', 'green']], answer: ['flower', 'red'] },
    { sentence: 'I ___ the ___', options: [['see', 'saw'], ['bird', 'car']], answer: ['see', 'bird'] },
    { sentence: 'She ___ to the ___', options: [['goes', 'go'], ['beach', 'park']], answer: ['goes', 'beach'] },
    { sentence: 'The ___ is ___', options: [['sky', 'ocean'], ['blue', 'deep']], answer: ['sky', 'blue'] },
    { sentence: 'The ___ is ___', options: [['book', 'pen'], ['red', 'blue']], answer: ['book', 'blue'] },
    // Add more sentences here...
    { sentence: 'The ___ is ___', options: [['boy', 'girl'], ['playing', 'sleeping']], answer: ['boy', 'playing'] },
    { sentence: 'The ___ is ___', options: [['apple', 'banana'], ['yellow', 'green']], answer: ['apple', 'yellow'] },
    { sentence: 'The ___ is ___', options: [['table', 'chair'], ['big', 'small']], answer: ['table', 'big'] },
    { sentence: 'The ___ is ___', options: [['dog', 'cat'], ['black', 'white']], answer: ['dog', 'black'] },
    { sentence: 'The ___ is ___', options: [['car', 'bike'], ['fast', 'slow']], answer: ['car', 'fast'] },
    { sentence: 'The ___ is ___', options: [['house', 'school'], ['tall', 'short']], answer: ['house', 'tall'] },
    { sentence: 'The ___ is ___', options: [['tree', 'flower'], ['green', 'pink']], answer: ['tree', 'green'] },
    { sentence: 'The ___ is ___', options: [['mouse', 'rat'], ['small', 'big']], answer: ['mouse', 'small'] },
    { sentence: 'The ___ is ___', options: [['sun', 'moon'], ['day', 'night']], answer: ['sun', 'day'] },
    { sentence: 'The ___ is ___', options: [['fish', 'shark'], ['swimming', 'flying']], answer: ['fish', 'swimming'] },
    // Add more sentences here...
    { sentence: 'The ___ is ___', options: [['cat', 'dog'], ['purring', 'barking']], answer: ['cat', 'purring'] },
    { sentence: 'The ___ is ___', options: [['bird', 'butterfly'], ['flying', 'crawling']], answer: ['bird', 'flying'] },
    { sentence: 'The ___ is ___', options: [['car', 'boat'], ['driving', 'sailing']], answer: ['car', 'driving'] },
    { sentence: 'The ___ is ___', options: [['moon', 'star'], ['night', 'day']], answer: ['moon', 'night'] },
    { sentence: 'The ___ is ___', options: [['flower', 'grass'], ['blooming', 'growing']], answer: ['flower', 'blooming'] },
    { sentence: 'The ___ is ___', options: [['tree', 'bush'], ['tall', 'short']], answer: ['tree', 'tall'] },
    { sentence: 'The ___ is ___', options: [['cloud', 'rain'], ['white', 'wet']], answer: ['cloud', 'wet'] },
    { sentence: 'The ___ is ___', options: [['river', 'lake'], ['flowing', 'still']], answer: ['river', 'flowing'] },
    { sentence: 'The ___ is ___', options: [['mountain', 'valley'], ['high', 'low']], answer: ['mountain', 'high'] },
    { sentence: 'The ___ is ___', options: [['sun', 'rain'], ['shining', 'pouring']], answer: ['sun', 'shining'] },
    // Add more sentences here...
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [sentence, setSentence] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedWords, setSelectedWords] = useState(new Array(sentences[currentSentenceIndex].answer.length).fill(''));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    setSentence(currentSentence.sentence);
    setOptions(currentSentence.options);
    setSelectedWords(new Array(currentSentence.answer.length).fill(''));
  }, [currentSentenceIndex]);

  const fillBlank = (word, index) => {
    const updatedSelectedWords = [...selectedWords];
    updatedSelectedWords[index] = word;
    setSelectedWords(updatedSelectedWords);
  };

  const checkAnswer = () => {
    const currentAnswer = sentences[currentSentenceIndex].answer;
    if (selectedWords.every((word, index) => word === currentAnswer[index])) {
      setScore(score + 1);
      alert('Correct! Your score: ' + (score + 1));
    } else {
      alert('Incorrect! Try again.');
    }
  };

  const nextSentence = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    } else {
      alert('You have completed all sentences! Final score: ' + score);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/image/bluelive.png')} style={styles.backgroundImage} />
      <View style={styles.mid}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.min} />
      </View>

      <View style={styles.hangman1}>
        <Text style={styles.title}> Making Sentences</Text>
      </View>

      <View style={styles.gameContainer}>
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentenceText}>{sentence}</Text>
        </View>
        <ScrollView style={styles.optionsContainer}>
          {options.map((blankOptions, index) => (
            <View key={index} style={styles.blankContainer}>
              {blankOptions.map((word, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.optionButton}
                  onPress={() => fillBlank(word, index)}>
                  <Text style={styles.optionText}>{selectedWords[index] === word ? word : ''}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.checkButton} onPress={checkAnswer}>
            <Text style={styles.buttonText}>Check Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={nextSentence}>
            <Text style={styles.buttonText}>Next Sentence</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gameContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },
  sentenceContainer: {
    marginBottom: 20,
  },
  sentenceText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsContainer: {
    maxHeight: 200,
    marginBottom: 20,
  },
  blankContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    margin:20
  },
  optionText: {
    fontSize: 17,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  checkButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mid: {
    alignSelf: 'flex-start',
    marginLeft: 120,
    marginTop: 10,
  },
  min: {
    height: 50,
    width: 140,
    marginTop:-220,
  },

  hangman1: {
    marginTop: -150,
    height:50,
    width:350,
    backgroundColor:'#FA7070',
    borderRadius:10,
    marginBottom:20,
  },


  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SentenceGame;
