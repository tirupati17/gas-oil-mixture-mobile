import React from 'react'
import { StackNavigator } from 'react-navigation'
import { ActionSheetProvider } from 'react-native-action-sheet-fork'

//helpers
import { Constants } from './assets'
import I18n from './i18n'

//Screens
import Calculator from './screens/CalculatorHoc'
import Options from './screens/OptionsHoc'
import ResultDetail from './screens/ResultDetailHoc'

//Components
import { OptionsButton } from './components'

const Stack = StackNavigator(
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
      navigationOptions: () => ({
        title: I18n.t('options'),
      }),
    },
    ResultDetail: {
      screen: ResultDetail,
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('detailOfResult'),
        headerRight: (
          <OptionsButton
            iconName={'check'}
            onPress={() => navigation.state.params.handleSave()}
          />
        ),
      }),
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
)

const BeautifulGasOilMeter = () =>
  <ActionSheetProvider>
    <Stack />
  </ActionSheetProvider>

export default BeautifulGasOilMeter
