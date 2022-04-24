import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootsStack from './src/Roots/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <RootsStack />
    </NavigationContainer>
  );
};

export default App;
