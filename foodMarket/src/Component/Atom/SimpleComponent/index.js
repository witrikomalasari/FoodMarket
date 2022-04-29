import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlEmptyOrder, IlSuccessOrder, IlSuccessSignUp} from '../../../Assets';
import Gap from '../Gap';

const SimpleComponent = ({title, firstSubtitle, secondSubtitle, labelIcon}) => {
  const Icon = ({labelIcon}) => {
    if (labelIcon === 'EmptyOrder') {
      return <IlEmptyOrder />;
    }
    if (labelIcon === 'SuccessOrder') {
      return <IlSuccessOrder />;
    }
    return <IlSuccessSignUp />;
  };

  return (
    <View>
      <Icon labelIcon={labelIcon} />
      <Gap height={31} />
      <Text style={styles.title}>{title}</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>{firstSubtitle}</Text>
      <Text style={styles.subtitle}>{secondSubtitle}</Text>
      <Gap height={30} />
    </View>
  );
};

export default SimpleComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
