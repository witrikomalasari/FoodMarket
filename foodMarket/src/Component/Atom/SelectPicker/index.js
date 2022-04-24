import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SelectPicker = ({label, placeholder}) => {
  // const [selectedCity, setSelectedCity] = useState();

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          placeholder={placeholder}
          style={styles.picker}
          dropdownIconColor="#8D92A3"
          // selectedValue={selectedCity}
          // onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default SelectPicker;

const styles = StyleSheet.create({
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  input: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
  picker: {color: '#020202'},
});
