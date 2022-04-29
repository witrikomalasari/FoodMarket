import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FoodDummy2} from '../../Assets';
import {Button, Header, ItemListFood, ItemListOrder} from '../../Component';

const OrderSummary = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Text style={[styles.title, {marginBottom: -6}]}>Item Ordered</Text>
        <ItemListFood
          image={FoodDummy2}
          name="Cherry Healthy"
          price="IDR 289.000"
          type="Product-OrderSummary"
          totalItems="14"
        />
        <Text style={styles.title}>Detail Transaction</Text>
        <ItemListOrder label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemListOrder label="Driver" value="IDR 50.000" />
        <ItemListOrder label="Tax 10%" value="IDR 1.800.390" />
        <ItemListOrder
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1ABC9C"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Delivery to:</Text>
        <ItemListOrder label="Name" value="Angga Risky" />
        <ItemListOrder label="Phone No." value="0822 0819 9688" />
        <ItemListOrder label="Address" value="Setra Duta Palima" />
        <ItemListOrder label="House No." value="A5 Hook" />
        <ItemListOrder label="City." value="Bandung" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    marginTop: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 8,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
