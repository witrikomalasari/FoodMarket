import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, SelectPicker, TextInput} from '../../Component';

const Address = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it’s valid"
        onBack
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <TextInput title="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput title="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput title="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <SelectPicker label="City" placeholder="Select your city" />
        <Gap height={24} />
        <Button
          label="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingTop: 26,
    backgroundColor: '#ffffff',
  },
});
