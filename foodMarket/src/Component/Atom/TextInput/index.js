import React from 'react';
import {StyleSheet, Text, TextInput as TextInputRN, View} from 'react-native';

const TextInput = ({title, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInputRN
        style={styles.placeholder}
        placeholder={placeholder}
        placeholderTextColor="#8D92A3"
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  placeholder: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: '#020202',
  },
});
