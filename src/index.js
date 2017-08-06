import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './router';
import store from './store/store';

const SuperGasOilRatioMixCalc = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(
  'SuperGasOilRatioMixCalc',
  () => SuperGasOilRatioMixCalc,
);
