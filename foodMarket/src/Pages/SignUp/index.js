import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../Component';

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
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
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
    marginTop: 24,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 26,
    // justifyContent: 'space-between',
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#8D92A3',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  addPhoto: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
});
