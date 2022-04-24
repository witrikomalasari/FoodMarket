import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, SimpleComponent} from '../../Component';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SimpleComponent
        labelIcon // default iconSuccessSignUp
        title="Yeay! Completed"
        firstSubtitle="Now you are able to order"
        secondSubtitle="some foods as a self-reward"
      />
      <View style={styles.buttonContainer}>
        <Button
          label="Find Foods"
          onPress={() => navigation.navigate('TabBottomNavigator')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
