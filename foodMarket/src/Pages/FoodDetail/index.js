import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy6, IcBackWhite} from '../../Assets';
import {Button, Counter, Rating} from '../../Component';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground style={styles.ImageBackground} source={FoodDummy6}>
        <TouchableOpacity style={styles.IconBack}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.description}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.description}>
            Seledri, telur, blueberry, madu.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.containerButton}>
            <Button
              label="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  ImageBackground: {
    height: 320,
    paddingTop: 26,
    paddingLeft: 32,
  },
  IconBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 26,
    backgroundColor: '#ffffff',
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  mainContent: {flex: 1, paddingTop: 10},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    color: '#020202',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    color: '#8D92A3',
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 16,
  },
  label: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  priceContainer: {flex: 1},
  labelTotal: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  containerButton: {
    width: 163,
  },
});
