import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOn} from '../../../Assets';

const Rating = () => {
  return (
    <View style={styles.wrapRating}>
      <View style={styles.rating}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
      </View>
      <Text style={styles.value}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  wrapRating: {
    flexDirection: 'row',
  },
  rating: {
    flexDirection: 'row',
  },
  value: {
    color: '#020202',
    paddingLeft: 4,
  },
});
