import React from 'react';
import { StackNavigator } from 'react-navigation';

//helpers
import { Constants } from './assets';
import I18n from './i18n';

//Screens
import Calculator from './screens/CalculatorHoc';
import Options from './screens/OptionsHoc';

//Components
import { OptionsButton } from './components';

const BeautifulGasOilMeter = StackNavigator(
  {
    Calculator: {
      screen: Calculator,
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('oilRatioCalculator'),
        headerRight: (
          <OptionsButton onPress={() => navigation.navigate('Options')} />
        ),
      }),
    },
    Options: {
      screen: Options,
      navigationOptions: {
        title: I18n.t('options'),
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
