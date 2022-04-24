import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Order, Profile} from '../../Pages';
import {BottomNavigatorCustom} from '../../Component';

const TabNav = createBottomTabNavigator();

const TabBottomNavigator = () => {
  return (
    <TabNav.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigatorCustom {...props} />}>
      <TabNav.Screen name="Home" component={Home} />
      <TabNav.Screen name="Order" component={Order} />
      <TabNav.Screen name="Profile" component={Profile} />
    </TabNav.Navigator>
  );
};

export default TabBottomNavigator;
