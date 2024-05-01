import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import Shape from './Shape'; 
const ColorFillGame = () => {
  const initialGrid = [
    ['circle', 'square', 'circle'],
    ['triangle', 'square', 'triangle'],
    ['square', 'circle', 'square'],
  ];

  const [grid, setGrid] = useState(initialGrid);
  const [selectedColor, setSelectedColor] = useState('');

  const handleShapePress = (rowIndex, colIndex) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = selectedColor;
    setGrid(newGrid);
  };

  const colors = [
    { name: 'Red', code: '#FF6347' },
    { name: 'Green', code: '#00FF00' },
    { name: 'Blue', code: '#0000FF' },
    { name: 'Yellow', code: '#FFFF00' },
    { name: 'Purple', code: '#800080' },
    { name: 'Orange', code: '#FFA500' },
    { name: 'Pink', code: '#FFC0CB' },
    { name: 'Cyan', code: '#00FFFF' },
    { name: 'Magenta', code: '#FF00FF' },
    { name: 'Lime', code: '#00FF00' },
    { name: 'Teal', code: '#008080' },
    { name: 'Gold', code: '#FFD700' },
    { name: 'Silver', code: '#C0C0C0' },
    { name: 'Brown', code: '#A52A2A' },
    { name: 'Maroon', code: '#800000' },
    { name: 'Dark Red', code: '#8B0000' },
    { name: 'Dark Green', code: '#006400' },
    { name: 'Navy', code: '#000080' },
    { name: 'Dark Violet', code: '#9400D3' },
    { name: 'Sienna', code: '#A0522D' },
    { name: 'Olive', code: '#808000' },
    { name: 'Indigo', code: '#4B0082' },
    { name: 'Slate Gray', code: '#708090' },
    { name: 'Chocolate', code: '#D2691E' },
    { name: 'Midnight Blue', code: '#191970' },
    { name: 'Orchid', code: '#DA70D6' },
    { name: 'Deep Pink', code: '#FF1493' },
    { name: 'Turquoise', code: '#40E0D0' },
    { name: 'Lavender', code: '#E6E6FA' },
    { name: 'Coral', code: '#FF7F50' },
    { name: 'Sky Blue', code: '#87CEEB' },
    { name: 'Forest Green', code: '#228B22' },
    { name: 'Tomato ', code: '#FF6347' },
    { name: 'Steel Blue', code: '#4682B4' },
    { name: 'Khaki ', code: '#F0E68C' },
    { name: 'Salmon ', code: '#FA8072' },
  ];

  const newFuntion = (colorCode) => {
    console.log('hiii');
    setSelectedColor(colorCode)
  }

  const renderColorList = () => {
    return (
      <View style={styles.colorList}>
        <Text style={styles.colorListTitle}>Choose a Color:</Text>
        <View style={styles.colorButtons}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorButton, { backgroundColor: color.code }]}
              onPress={() =>newFuntion(color.code)}
            >
              <Text style={styles.colorButtonText}>{color.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((shapeColor, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[styles.shapeContainer, { backgroundColor: shapeColor }]}
                onPress={() => handleShapePress(rowIndex, colIndex)}
              >
                <Shape shape={grid[rowIndex][colIndex]} color={selectedColor} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      {renderColorList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  gameContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  shapeContainer: {
    width: 60,
    height: 60,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorList: {
    alignItems: 'center',
  },
  colorListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  colorButton: {
    width: 80,
    height: 40,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorFillGame;
