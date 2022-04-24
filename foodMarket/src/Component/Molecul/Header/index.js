import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack} from '../../../Assets';

const Header = props => {
  const {title, subTitle, onBack, onPress} = props;

  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <IcBack style={styles.iconback} />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
  },
  iconback: {
    padding: 16,
    marginRight: 16,
    marginLeft: -16,
  },
});
