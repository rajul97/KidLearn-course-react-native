import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const quizData = [
  {
    question: "What small red fruit is often used to make jam?",
    options: ["Strawberry", "Blueberry", "Grape", "Raspberry"],
    correctAnswer: "Strawberry"
  },
  {
    question: "Which fruit is round, purple, and grows on vines?",
    options: ["Grape", "Orange", "Pear", "Watermelon"],
    correctAnswer: "Grape"
  },

  {
    question: "What vegetable is green, long, and often used in salads?",
    options: ["Cucumber", "Green Bean", "Asparagus", "Zucchini"],
    correctAnswer: "Cucumber"
  },
  {
    question: "Which fruit is green, small, and often used in salads?",
    options: ["Grape", "Kiwi", "Honeydew", "Avocado"],
    correctAnswer: "Kiwi"
  },


  // Original questions...
  {
    question: "What color is an apple?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: "Red"
  },
  {
    question: "Which fruit is yellow and you can peel it?",
    options: ["Lemon", "Banana", "Strawberry", "Grape"],
    correctAnswer: "Banana"
  },
  {
    question: "What color is a strawberry?",
    options: ["Red", "Green", "Yellow", "Blue"],
    correctAnswer: "Red"
  },
  {
    question: "What vegetable is green and grows in a pod?",
    options: ["Carrot", "Potato", "Tomato", "Green Bean"],
    correctAnswer: "Green Bean"
  },
  {
    question: "Which fruit is red and sometimes used to make ketchup?",
    options: ["Apple", "Orange", "Peach", "Tomato"],
    correctAnswer: "Tomato"
  },
  {
    question: "What vegetable is orange and you can make it into fries?",
    options: ["Carrot", "Broccoli", "Spinach", "Cauliflower"],
    correctAnswer: "Carrot"
  },
  {
    question: "What fruit is small, round, and often used in pies?",
    options: ["Apple", "Banana", "Grapes", "Cherry"],
    correctAnswer: "Cherry"
  },
  {
    question: "Which vegetable is green and often used in salads?",
    options: ["Cucumber", "Potato", "Onion", "Carrot"],
    correctAnswer: "Cucumber"
  },
  {
    question: "What fruit is green on the outside and pink on the inside with black seeds?",
    options: ["Watermelon", "Cantaloupe", "Honeydew", "Pineapple"],
    correctAnswer: "Watermelon"
  },
  {
    question: "What vegetable is green and leafy and often used in sandwiches?",
    options: ["Cabbage", "Lettuce", "Spinach", "Kale"],
    correctAnswer: "Lettuce"
  },
  {
    question: "Which fruit is orange and you can squeeze it to make juice?",
    options: ["Banana", "Peach", "Lemon", "Orange"],
    correctAnswer: "Orange"
  },


  {
    question: "What color is an apple?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: "Red"
  },
  {
    question: "What color is a banana?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: "Yellow"
  },
  {
    question: "What color is a carrot?",
    options: ["Red", "Blue", "Yellow", "Orange"],
    correctAnswer: "Orange"
  },
  {
    question: "What color is a grape?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: "Purple"
  },
  {
    question: "What color is a tomato?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: "Red"
  },
  {
    question: "What shape is a watermelon?",
    options: ["Round", "Square", "Triangle", "Star"],
    correctAnswer: "Round"
  },
  {
    question: "Which fruit is yellow and you can peel it?",
    options: ["Lemon", "Banana", "Strawberry", "Grape"],
    correctAnswer: "Banana"
  },
  {
    question: "Which vegetable is green and leafy?",
    options: ["Carrot", "Potato", "Spinach", "Onion"],
    correctAnswer: "Spinach"
  },
  {
    question: "What do you call the small round fruits that are red?",
    options: ["Cherries", "Apples", "Oranges", "Grapes"],
    correctAnswer: "Cherries"
  },
  {
    question: "What vegetable is yellow and you can make it into fries?",
    options: ["Broccoli", "Cauliflower", "Carrot", "Cucumber"],
    correctAnswer: "Carrot"
  },
  {
    question: "What do you call the small round fruits that are orange?",
    options: ["Grapes", "Apples", "Oranges", "Bananas"],
    correctAnswer: "Oranges"
  },
  {
    question: "What do you call the small round fruits that are green?",
    options: ["Apples", "Oranges", "Grapes", "Bananas"],
    correctAnswer: "Grapes"
  },
  {
    question: "Which fruit is red and sometimes used to make ketchup?",
    options: ["Apple", "Orange", "Peach", "Tomato"],
    correctAnswer: "Tomato"
  },
  {
    question: "What do you call the long, green vegetable that you can snap?",
    options: ["Green Bean", "Carrot", "Cucumber", "Celery"],
    correctAnswer: "Green Bean"
  },
  {
    question: "What do you call the small, round fruits that are purple?",
    options: ["Grapes", "Apples", "Oranges", "Bananas"],
    correctAnswer: "Grapes"
  },
  {
    question: "Which fruit is green on the outside and pink on the inside with black seeds?",
    options: ["Watermelon", "Cantaloupe", "Honeydew", "Pineapple"],
    correctAnswer: "Watermelon"
  },
  {
    question: "What do you call the long, orange vegetable that rabbits like to eat?",
    options: ["Carrot", "Cucumber", "Broccoli", "Spinach"],
    correctAnswer: "Carrot"
  },
  {
    question: "What do you call the small, round fruits that are red?",
    options: ["Strawberries", "Apples", "Oranges", "Bananas"],
    correctAnswer: "Strawberries"
  },
  {
    question: "Which vegetable is green and often used in salads?",
    options: ["Cucumber", "Potato", "Onion", "Carrot"],
    correctAnswer: "Cucumber"
  },
  {
    question: "What do you call the small, round fruits that are yellow?",
    options: ["Bananas", "Apples", "Oranges", "Lemons"],
    correctAnswer: "Bananas"
  },


  {
    question: "What do you call the small, round fruits that are green?",
    options: ["Grapes", "Apples", "Oranges", "Bananas"],
    correctAnswer: "Apples"
  },
  {
    question: "What do you call the small, round fruits that are red?",
    options: ["Strawberries", "Apples", "Oranges", "Bananas"],
    correctAnswer: "Strawberries"
  },
  {
    question: "What do you call the small, round fruits that are orange?",
    options: ["Oranges", "Apples", "Grapes", "Bananas"],
    correctAnswer: "Oranges"
  },
  {
    question: "What do you call the small, round fruits that are yellow?",
    options: ["Bananas", "Apples", "Oranges", "Lemons"],
    correctAnswer: "Bananas"
  },
  {
    question: "What do you call the small, round fruits that are purple?",
    options: ["Grapes", "Apples", "Oranges", "Bananas"],
    correctAnswer: "Grapes"
  },
  {
    question: "What do you call the small, round fruits that are pink?",
    options: ["Grapes", "Strawberries", "Oranges", "Bananas"],
    correctAnswer: "Strawberries"
  },
  {
    question: "What do you call the small, round fruits that are black?",
    options: ["Grapes", "Apples", "Oranges", "Bananas"],
    correctAnswer: "Grapes"
  },
  {
    question: "What do you call the long, green vegetable that you can snap?",
    options: ["Green Bean", "Carrot", "Cucumber", "Celery"],
    correctAnswer: "Green Bean"
  },
  {
    question: "What do you call the long, orange vegetable that rabbits like to eat?",
    options: ["Carrot", "Cucumber", "Broccoli", "Spinach"],
    correctAnswer: "Carrot"
  },
  {
    question: "What do you call the round, green vegetable that is often used in salads?",
    options: ["Lettuce", "Cabbage", "Spinach", "Kale"],
    correctAnswer: "Lettuce"
  },
  {
    question: "What do you call the red, round vegetable that is often used in salads?",
    options: ["Tomato", "Carrot", "Cucumber", "Radish"],
    correctAnswer: "Tomato"
  },
  {
    question: "What do you call the green, long vegetable that you can use to make pickles?",
    options: ["Cucumber", "Carrot", "Broccoli", "Celery"],
    correctAnswer: "Cucumber"
  },
  {
    question: "What do you call the small, round vegetable that is often used in soups?",
    options: ["Peas", "Corn", "Potato", "Tomato"],
    correctAnswer: "Peas"
  },
  {
    question: "What do you call the green, leafy vegetable that is often used in salads?",
    options: ["Lettuce", "Cabbage", "Spinach", "Kale"],
    correctAnswer: "Spinach"
  },
  {
    question: "What do you call the yellow vegetable that is often used to make fries?",
    options: ["Potato", "Carrot", "Cucumber", "Broccoli"],
    correctAnswer: "Potato"
  },
  {
    question: "What do you call the green, long vegetable that is often used in stir-fries?",
    options: ["Broccoli", "Cauliflower", "Spinach", "Asparagus"],
    correctAnswer: "Broccoli"
  },
  {
    question: "What do you call the orange vegetable that is often used in pies?",
    options: ["Pumpkin", "Carrot", "Sweet Potato", "Butternut Squash"],
    correctAnswer: "Pumpkin"
  },
  {
    question: "What do you call the green, round vegetable that is often used in stir-fries?",
    options: ["Zucchini", "Cucumber", "Eggplant", "Bell Pepper"],
    correctAnswer: "Zucchini"
  },
  {
    question: "What do you call the red, round vegetable that is often used in salads?",
    options: ["Tomato", "Carrot", "Cucumber", "Radish"],
    correctAnswer: "Tomato"
  },
  

];



export default function Fruitvegetablesquiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (selectedAnswer) => {
    if (!answered) {
      setAnswered(true);
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < quizData.length - 1) {
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setAnswered(false);
        }, 1000); // Delay before showing the next question
      } else {
        alert(`Quiz Completed!\nYour Score: ${score}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/image/LOGO.png')} style={styles.logo}></Image>
      </View>
      <Text style={styles.title}>Fruit & Vegetables Quiz</Text>
      <Animatable.View animation="fadeIn" style={styles.questionContainer}>
        <Text style={styles.question}>{currentQuestion ? currentQuestion.question : "Loading..."}</Text>
      </Animatable.View>
      <View style={styles.optionsContainer}>
        {currentQuestion && currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
            activeOpacity={0.7} // Adjust the touchable opacity effect
          >
            <Animatable.View animation={answered ? (option === currentQuestion.correctAnswer ? "bounceIn" : "shake") : null}>
              <Text style={styles.optionText}>{option}</Text>
              {answered && option === currentQuestion.correctAnswer && (
                <Icon name="check" size={20} color="green" style={styles.icon} />
              )}
              {answered && option !== currentQuestion.correctAnswer && (
                <Icon name="times" size={20} color="red" style={styles.icon} />
              )}
            </Animatable.View>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004AAD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    height: 150,
    width: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  questionContainer: {
    marginBottom: 30,
  },
  question: {
    fontSize: 20,
    color: 'white',
  },
  optionsContainer: {
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#F9A825', // Custom button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderRadius: 20, // Rounded corners
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  icon: {
    marginLeft: 'auto',
  },
  score: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
});
