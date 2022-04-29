import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  name,
  price,
  onPress,
  rating,
  totalItems,
  type,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'Product-Home':
        return (
          <>
            <View style={styles.wrapTitle}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'Product-OrderSummary':
        return (
          <>
            <View style={styles.wrapTitle}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
            <Text style={{color: '#020202'}}>{totalItems} Items</Text>
          </>
        );
      case 'Orders-InProgress':
        return (
          <>
            <View style={styles.wrapTitle}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>
                {totalItems} Items • IDR {price}
              </Text>
            </View>
          </>
        );
      case 'Orders-PostOrders':
        return (
          <>
            <View style={styles.wrapTitle}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>
                {totalItems} Items • IDR {price}
              </Text>
            </View>
            <View>
              <Text style={[styles.name, {fontSize: 13}]}>DATE</Text>
              <Text style={[styles.name, {fontSize: 13}]}>STATUS</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.wrapTitle}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.content}>
        <Image source={image} style={styles.foodPic} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodPic: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  wrapTitle: {
    flex: 1,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
});
