import React from 'react';
import { StatusBar } from 'react-native';
import InitialStack from './routes';
import { PRIMARY } from './utils/colors';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={PRIMARY} />
    <InitialStack />
  </>
);

export default App;
