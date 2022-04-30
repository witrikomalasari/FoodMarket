import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, PicProfile, TextInput} from '../../Component';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onBack
        onPress={() => navigation.navigate('SignIn')}
      />
      <View style={styles.content}>
        <Gap height={26} />
        <PicProfile />
        <Gap height={16} />
        <TextInput title="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.navigate('Address')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 26,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
});
