import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Constants } from './assets';

//Screens
import Calculator from './screens/CalculatorHoc';
import Options from './screens/OptionsHoc';

//Components
import OptionsButton from './components/OptionsButton';

const BeautifulGasOilMeter = StackNavigator(
  {
    Calculator: {
      screen: Calculator,
      navigationOptions: ({ navigation }) => ({
        title: 'Calculate Oil Ratio',
        headerRight: (
          <OptionsButton onPress={() => navigation.navigate('Options')} />
        ),
      }),
    },
    Options: {
      screen: Options,
      navigationOptions: {
        title: 'Options',
      },
    },
  },
  {
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: Constants.PRIMARY_COLOR,
      },
    },
  },
);

export default BeautifulGasOilMeter;