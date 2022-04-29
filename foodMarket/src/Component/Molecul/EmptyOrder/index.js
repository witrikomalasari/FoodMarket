import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, SimpleComponent} from '../../Atom';

const EmptyOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <SimpleComponent
        labelIcon="EmptyOrder"
        title="Ouch! Hungry"
        firstSubtitle="Seems like you have not"
        secondSubtitle="ordered any food yet"
      />
      <View style={styles.buttonContainer}>
        <Button
          label="Find Foods"
          onPress={() => navigation.replace('TabBottomNavigator')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
