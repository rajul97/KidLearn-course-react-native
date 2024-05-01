import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Easing, Alert, Image } from 'react-native';

const SIZE = 3; // Size of the board
const EMPTY = 0;
const PLAYER_X = 1;
const PLAYER_O = 2;

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(SIZE).fill(Array(SIZE).fill(EMPTY)));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(PLAYER_X);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  useEffect(() => {
    if (winner) {
      if (winner === PLAYER_X) {
        setScoreX(scoreX + 1);
        announceWinner('Player X wins!');
      } else if (winner === PLAYER_O) {
        setScoreO(scoreO + 1);
        announceWinner('Player O wins!');
      }
      setTimeout(() => {
        restartGame();
      }, 1500);
    }
  }, [winner]);

  // Animation values
  const animValue = new Animated.Value(0);
  const lineLength = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  // Function to handle cell press
  const handlePress = (row, col) => {
    if (winner || board[row][col] !== EMPTY) return;

    const newBoard = board.map((rowArr, rowIndex) =>
      row === rowIndex ? rowArr.map((cell, colIndex) => (col === colIndex ? turn : cell)) : rowArr
    );
    setBoard(newBoard);

    if (checkWinner(newBoard, turn)) {
      setWinner(turn);
      animateWinLine();
    } else {
      setTurn(turn === PLAYER_X ? PLAYER_O : PLAYER_X);
    }
  };

  // Function to check for a winner
  const checkWinner = (board, player) => {
    // Check rows, columns, and diagonals
    for (let i = 0; i < SIZE; i++) {
      if (board[i].every(cell => cell === player) || board.every(row => row[i] === player)) {
        return true;
      }
    }
    if (board.every((row, i) => row[i] === player) || board.every((row, i) => row[SIZE - 1 - i] === player)) {
      return true;
    }
    return false;
  };

  // Function to animate winning line
  const animateWinLine = () => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  };

  // Function to restart the game
  const restartGame = () => {
    setBoard(Array(SIZE).fill(Array(SIZE).fill(EMPTY)));
    setWinner(null);
    setTurn(PLAYER_X);
    Animated.timing(animValue, {
      toValue: 0,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  };

  // Function to announce the winner
  const announceWinner = (message) => {
    Alert.alert('Winner', message);
  };

  // Render cell component
  const renderCell = (row, col) => {
    const value = board[row][col];
    let cellStyle = styles.cell;
    if (winner) {
      if (value === winner) {
        cellStyle = [styles.cell, styles.winnerCell];
      } else {
        cellStyle = [styles.cell, styles.loserCell];
      }
    }
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={cellStyle}
        onPress={() => handlePress(row, col)}
        disabled={!!winner || value !== EMPTY}
      >
        <Text style={styles.cellText}>{value === PLAYER_X ? 'X' : value === PLAYER_O ? 'O' : ''}</Text>
      </TouchableOpacity>
    );
  };

  // Render the board
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
      </View>
    ));
  };

  // Render winning line
  const renderWinLine = () => {
    if (!winner) return null;

    const rotation = winner === PLAYER_X ? '45deg' : '-45deg';
    return (
      <Animated.View
        style={[styles.winLine, { transform: [{ rotate: rotation }], width: lineLength }]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>Player X: {scoreX}</Text>
        <Text style={styles.headerText}>Player O: {scoreO}</Text>
      </View>
      <Image source={require('../assets/image/LOGO.png')} style={styles.logo} />
      <View style={styles.board}>{renderBoard()}</View>
      {renderWinLine()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple', // Change background color to purple
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
  logo: {
    height: 100,
    width: 200,
    marginBottom: 20,
  },
  board: {
    borderWidth: 2,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 36,
    fontWeight: 'bold', // Add fontWeight to ensure symbols are visible
  },
  winnerCell: {
    backgroundColor: 'green', // Color for the winning player's cells
  },
  loserCell: {
    backgroundColor: 'red', // Color for the losing player's cells
  },
  winLine: {
    position: 'absolute',
    height: 2,
    backgroundColor: 'red',
  },
});

export default TicTacToe;

