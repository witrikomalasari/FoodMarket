import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {EmptyOrder, Header, OrderTopTabSlider} from '../../Component';

const Order = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <View style={styles.topTabSlider}>
            <OrderTopTabSlider />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  topTabSlider: {
    flex: 1,
    marginTop: 24,
  },
});
