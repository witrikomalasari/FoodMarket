import React, {useState} from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListMenu from '../ItemListMenu';

const Account = () => (
  <View style={styles.container}>
    <ItemListMenu label="Edit Profile" onPress={() => {}} />
    <ItemListMenu label="Home Address" onPress={() => {}} />
    <ItemListMenu label="Security" onPress={() => {}} />
    <ItemListMenu label="Payments" onPress={() => {}} />
  </View>
);

const FoodMarket = () => (
  <View style={styles.container}>
    <ItemListMenu label="Rate App" onPress={() => {}} />
    <ItemListMenu label="Help Center" onPress={() => {}} />
    <ItemListMenu label="Privacy & Policy" onPress={() => {}} />
    <ItemListMenu label="Terms & Conditions" onPress={() => {}} />
  </View>
);

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
});

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.borderTopBar}
      tabStyle={styles.justifyTopBar}
      renderLabel={({route, focused}) => (
        <Text style={styles.title(focused)}>{route.title}</Text>
      )}
    />
  );
};

const ProfileTopTabSlider = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};

export default ProfileTopTabSlider;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: 0.4,
  },
  borderTopBar: {
    backgroundColor: '#ffffff',
    alignItem: 'center',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  justifyTopBar: {
    width: 'auto',
    marginHorizontal: 14,
  },
  title: focused => ({
    color: focused ? '#020202' : '#8D92A3',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  }),
});
