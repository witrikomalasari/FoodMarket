import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, SimpleComponent} from '../../Component';

const SuccessOrder = () => {
  return (
    <View style={styles.page}>
      <SimpleComponent
        labelIcon="SuccessOrder"
        title="You’ve Made Order"
        firstSubtitle="Just stay at home while we are"
        secondSubtitle="preparing your best foods"
      />
      <View style={styles.buttonContainer}>
        <Button label="Order Other Foods" />
        <Gap height={12} />
        <Button label="View My Order" color="#8D92A3" textColor="#ffffff" />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
