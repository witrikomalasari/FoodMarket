import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcNext} from '../../../Assets';
import {Gap} from '../../Atom';

const ItemListOrder = ({
  label,
  value,
  valueColor = '#020202',
  iconButton,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {/* {iconButton ? (
        <TouchableOpacity onPress={onPress}>
          <IcNext />
        </TouchableOpacity>
     ) : (*/}
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
