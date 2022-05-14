import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../Component';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    console.log('email', email);
    console.log('password', password);
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.content}>
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <Gap height={16} />
        <TextInput
          title="Password"
          placeholder="Type your password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Gap height={24} />
        <Button label="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color="#8D92A3"
          textColor="#ffffff"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 26,
  },
});
