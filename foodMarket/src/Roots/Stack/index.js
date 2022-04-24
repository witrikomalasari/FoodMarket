import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  Address,
  FoodDetail,
  SignIn,
  SignUp,
  SplashScreen,
  SuccessOrder,
  SuccessSignUp,
} from '../../Pages';
import EmptyOrder from '../../Pages/EmptyOrder';
import TabBottomNavigator from '../MainTab';

const Stack = createStackNavigator();

const rootStacks = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabBottomNavigator"
        component={TabBottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmptyOrder"
        component={EmptyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessOrder"
        component={SuccessOrder}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default rootStacks;
