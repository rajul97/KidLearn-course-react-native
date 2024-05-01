import React from 'react';
import { View, StyleSheet } from 'react-native';

const Shape = ({ shape, color, onPress }) => {
  console.log('coloe',shape);
  const styles = StyleSheet.create({
    shapeContainer: {
      width: 80, 
      height: 80, 
      margin: 4, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      width: 80,
      height: 80,
      borderRadius: 40, 
      backgroundColor: color,
    },
    square: {
      width: 80,
      height: 80,
      backgroundColor: color,
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeftWidth: 40, 
      borderRightWidth: 40, 
      borderBottomWidth: 80, 
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: color,
      transform: [{ rotate: '180deg' }],
    },
  });

  let shapeStyle = styles.square; 
  if (shape === 'circle') {
    shapeStyle = styles.circle;
  } else if (shape === 'triangle') {
    shapeStyle = styles.triangle;
  }

  return (
    <View style={styles.shapeContainer}>
      <View style={shapeStyle} onTouchEnd={onPress} />
    </View>
  );
};

export default Shape;
