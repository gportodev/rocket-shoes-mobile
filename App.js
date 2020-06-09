import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home';
import Cart from './src/pages/Cart';

export default function App() {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Home />
      {/* <Cart /> */}
    </>
  );
}
