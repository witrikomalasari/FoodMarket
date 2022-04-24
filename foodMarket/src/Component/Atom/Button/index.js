import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, color = '#FFC700', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    borderRadius: 8,
    padding: 12,
    backgroundColor: color,
  }),
  label: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
    color: textColor,
  }),
});
