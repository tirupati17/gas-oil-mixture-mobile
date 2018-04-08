import { compose, withHandlers, withState, lifecycle } from 'recompose'
import { ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//helpers
import { rateApp as rateAppUtil } from '../utils'
import { setUserRatedApp } from '../store/actions'
import I18n from '../i18n'

//components
import RateApp from './RateApp'

const withReduxConnect = connect(
  state => ({
    appStartsCount: state.settings.appStartsCount,
    userRatedApp: state.settings.userRatedApp,
    locale: state.settings.currentLocale,
  }),
  dispatch => bindActionCreators({ setUserRatedApp }, dispatch),
)

const withRateState = withState('isVisible', 'setIsVisible', false)

const withRateHandlers = withHandlers({
  rateApp: ({ setUserRatedApp, setIsVisible, locale }) => () => {
    ToastAndroid.show(
      I18n.t('rateAppInPlayStore', { locale }),
      ToastAndroid.LONG,
    )
    setUserRatedApp(true)
    setIsVisible(false)
    rateAppUtil()
  },
  closeRate: ({ setUserRatedApp, setIsVisible }) => () => {
    setUserRatedApp(true)
    setIsVisible(false)
  },
})

const withLifeCycle = lifecycle({
  componentWillMount() {
    const { appStartsCount, setIsVisible, userRatedApp } = this.props
    if (!userRatedApp && appStartsCount !== 0 && appStartsCount % 2 === 0) {
      setIsVisible(true)
    }
  },
})

export default compose(
  withReduxConnect,
  withRateState,
  withRateHandlers,
  withLifeCycle,
)(RateApp)
