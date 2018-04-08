import {
  compose,
  withProps,
  lifecycle,
  withState,
  withHandlers,
} from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connectActionSheet } from 'react-native-action-sheet-fork'

//componenets
import Calculator from './Calculator'

//helpers
import { Constants } from '../assets'
import { getResult, handleWidth, isAndroid } from '../helpers'
import { setGasValue, setOilValue, setMeasurementUnit } from '../store/actions'
import I18n from '../i18n'

const withReduxConnect = connect(
  state => ({
    gasValue: state.app.gasValue,
    oilValue: state.app.oilValue,
    result: state.app.result,
    measurementUnit: state.app.measurementUnit,
    autoFocusInput: state.settings.autoFocusInput,
    locale: state.settings.currentLocale,
  }),
  dispatch =>
    bindActionCreators(
      { setGasValue, setOilValue, setMeasurementUnit },
      dispatch,
    ),
)

const withAutoInputWidth = withProps(props => ({
  inputWidth: {
    gas: handleWidth(props.gasValue.length, props.numberWidth),
    oil: handleWidth(props.oilValue.length, props.numberWidth),
  },
}))

const withFirstCalculation = lifecycle({
  componentWillReceiveProps() {
    getResult()
  },
})

const measureNumberWidth = withState(
  'numberWidth',
  'setNumberWidth',
  Constants.INITIAL_NUMBER_WIDTH,
)

const withCalculatorHandlers = withHandlers({
  openUnitsOptions: ({
    showActionSheetWithOptions,
    setMeasurementUnit,
    locale,
  }) => () => {
    let options = [
      I18n.t('litersUnit', { locale }),
      I18n.t('usGallons', { locale }),
      I18n.t('imperialGallons', { locale }),
      I18n.t('cancel', { locale }),
    ]
    let cancelButtonIndex = 3

    if (isAndroid()) {
      options.pop()
      cancelButtonIndex = null
    }

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            setMeasurementUnit('liters')
            break
          case 1:
            setMeasurementUnit('us')
            break
          case 2:
            setMeasurementUnit('imperial')
            break
        }
      },
    )
  },
})

export default compose(
  withReduxConnect,
  connectActionSheet,
  measureNumberWidth,
  withAutoInputWidth,
  withFirstCalculation,
  withCalculatorHandlers,
)(Calculator)
