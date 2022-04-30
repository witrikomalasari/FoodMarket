import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Rating from '../Rating';

const CardFood = ({image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.foodPic} source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>Cherry Healthy</Text>
        <Rating />
      </View>
    </View>
  );
};

export default CardFood;

const styles = StyleSheet.create({
  container: {
    width: 200,
    overflow: 'hidden', // tidak aada konten yg melebihi box container yaitu width=200
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#020202',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    marginRight: 24,
  },

  foodPic: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
