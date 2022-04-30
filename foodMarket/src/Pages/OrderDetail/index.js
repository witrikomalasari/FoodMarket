import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../Assets';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemListOrder,
} from '../../Component';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <Header title="Payment" subTitle="You deserve better meal" onBack />
      <View style={styles.content}>
        <Text style={styles.title}>Item Ordered</Text>
        <ItemListFood
          image={FoodDummy1}
          name="Cherry Healthy"
          price="IDR 289.000"
          type="Product-OrderSummary"
          totalItems="14"
        />
        <Text style={styles.title}>Details Transaction</Text>
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
        <Text style={styles.title}>Deliver to:</Text>
        <ItemListOrder label="Name" value="Angga Risky" />
        <ItemListOrder label="Phone No." value="0822 0819 9688" />
        <ItemListOrder label="Address" value="Setra Duta Palima" />
        <ItemListOrder label="House No." value="A5 Hook" />
        <ItemListOrder label="City" value="Bandung" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Order Status</Text>
        <ItemListOrder label="#FM209391" value="Paid" valueColor="#1ABC9C" />
      </View>
      <View style={styles.containerButton}>
        <Button
          label="CanceL My Order"
          color="#D9435E"
          textColor="#ffffff"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    marginTop: 24,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  containerButton: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
