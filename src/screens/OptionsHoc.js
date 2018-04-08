import { compose, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  setMeasurementUnit,
  setAutoFocusInput,
  setCurrentLocale,
} from '../store/actions'

//components
import Options from './Options'

//helpers
import { getResult, getLocales } from '../helpers'
import { shareApp as shareAppUtil, rateApp as rateAppUtil } from '../utils'

const withReduxConnect = connect(
  state => ({
    selectedUnit: state.app.measurementUnit,
    autoFocusInput: state.settings.autoFocusInput,
    appLocales: state.settings.appLocales,
    locale: state.settings.currentLocale,
  }),
  dispatch =>
    bindActionCreators(
      { setMeasurementUnit, setAutoFocusInput, setCurrentLocale },
      dispatch,
    ),
)

const withOptionsHandlers = withHandlers({
  setUnit: ({ setMeasurementUnit, setResult }) => value => {
    setMeasurementUnit(value)
    getResult()
  },
  toggleAutoFocus: ({ setAutoFocusInput, autoFocusInput }) => () => {
    setAutoFocusInput(!autoFocusInput)
  },
  setLocale: ({ setCurrentLocale }) => locale => {
    setCurrentLocale(locale)
  },
  shareApp: ({ locale }) => () => {
    shareAppUtil({ locale })
  },
  rateApp: () => () => {
    rateAppUtil()
  },
})

const withLifecycle = lifecycle({
  componentWillMount() {
    getLocales()
  },
})

export default compose(withReduxConnect, withLifecycle, withOptionsHandlers)(
  Options,
)
