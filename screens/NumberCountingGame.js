import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NumberCountingGame = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const resetNumber = () => {
    setNumber(0);
  };

  // Function to convert number to word
  const numberToWords = (num) => {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num === 0) return 'Zero';
    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 11];
    if (num < 100) return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
    if (num < 1000) return ones[Math.floor(num / 100)] + ' Hundred ' + numberToWords(num % 100);

    const suffixes = ['', 'Thousand', 'Million', 'Billion'];
    const suffixIndex = Math.floor(Math.log10(num) / 3);
    const suffix = suffixes[suffixIndex];
    const chunk = Math.floor(num / Math.pow(1000, suffixIndex));
    return numberToWords(chunk) + ' ' + suffix + ' ' + numberToWords(num % Math.pow(1000, suffixIndex));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
      <Text style={styles.wordText}>{numberToWords(number)}</Text>
      <View style={styles.buttonContainer}>
        <Button title="ADD + 1" onPress={incrementNumber} />
        <Button title="Reset" onPress={resetNumber} />
      </View>
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
  numberText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black',
  },
  wordText: {
    fontSize: 50,
    marginBottom: 40,
    color:'orange',
    fontWeight:'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default NumberCountingGame;




