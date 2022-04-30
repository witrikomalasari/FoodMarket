import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../Assets';

const ItemListMenu = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <IcNext />
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    alignItems: 'center',
  },
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
