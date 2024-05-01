import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

const MathQuiz = () => {
  const [operand1, setOperand1] = useState(Math.ceil(Math.random() * 10));
  const [operand2, setOperand2] = useState(Math.ceil(Math.random() * 10));
  const [operator, setOperator] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(10); // Timer in seconds
  const [questionNumber, setQuestionNumber] = useState(0);
  const maxQuestions = 5;

  const fadeInAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const checkAnswer = () => {
    const correctAnswer = eval(`${operand1} ${operator} ${operand2}`);
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
      setFeedback('Correct!');
      setTimeout(() => {
        generateNewQuestion();
      }, 1000);
    } else {
      setFeedback('Incorrect! Try again.');
    }
  };

  useEffect(() => {
    if (feedback) {
      Animated.timing(fadeInAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [feedback]);

  const generateNewQuestion = () => {
    setOperand1(Math.ceil(Math.random() * 10));
    setOperand2(Math.ceil(Math.random() * 10));
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    setOperator(randomOperator);
    setUserAnswer('');
    setFeedback('');
    setTimer(10); // Reset timer for new question
    setQuestionNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.innerContainer, { opacity: fadeInAnim }]}>
        <Text style={styles.title}>MathQuiz</Text>
        <Text style={styles.question}>
          {operand1} {operator} {operand2} =
        </Text>
        <TextInput
          style={styles.input}
          value={userAnswer}
          onChangeText={(text) => setUserAnswer(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            animateButton();
            checkAnswer();
          }}
          style={[styles.button, { transform: [{ scale: scaleAnim }] }]}
        >
          <Text style={styles.buttonText}>Check Answer</Text>
        </TouchableOpacity>
        <Text style={styles.timer}>Time left: {timer} seconds</Text>
        <Text style={styles.score}>Score: {score}</Text>
        {questionNumber < maxQuestions && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              animateButton();
              generateNewQuestion();
            }}
            style={[styles.button, { backgroundColor: '#2ECC71' }]}
          >
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
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
  innerContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  question: {
    fontSize: 45,
    marginBottom: 20,
    color: 'black'
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    padding: 10,
    fontSize: 30,
  },
  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  timer: {
    fontSize: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 25,
    marginTop: 10,
    color: 'black',
  },
});

export default MathQuiz;
