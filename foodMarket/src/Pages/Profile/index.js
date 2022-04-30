import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../Assets';
import {PicProfile, ProfileTopTabSlider} from '../../Component';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <PicProfile image={ProfileDummy} />
        <Text style={styles.name}>Angga Risky</Text>
        <Text style={styles.email}>wepanda@gmail.com</Text>
      </View>
      <View style={styles.topTabSlider}>
        <ProfileTopTabSlider />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    paddingVertical: 26,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  name: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  email: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  topTabSlider: {
    flex: 1,
    marginTop: 24,
  },
});
