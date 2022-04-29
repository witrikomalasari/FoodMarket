import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemListOrder = ({label, value, valueColor = '#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemListOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  value: color => ({
    color: color,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  }),
});
