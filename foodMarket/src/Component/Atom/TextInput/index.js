import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInputRN
        style={styles.placeholder}
        placeholder={placeholder}
        placeholderTextColor="#8D92A3"
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
  },
});
