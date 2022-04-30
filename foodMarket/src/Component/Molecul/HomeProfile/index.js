import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../../Assets';

const HomeProfile = () => {
  return (
    <View style={styles.profilePage}>
      <View>
        <Text style={styles.topTitle}>FoodMarket</Text>
        <Text style={styles.subTitle}>Let’s get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profilePic} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profilePage: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  topTitle: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  subTitle: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
