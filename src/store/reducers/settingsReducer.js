import I18n from '../../i18n'

const initialState = {
  autoFocusInput: true,
  appLocales: [I18n.currentLocale()],
  currentLocale: I18n.currentLocale(),
  appStartsCount: 0,
  userRatedApp: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTO_FOCUS_INPUT':
      return {
        ...state,
        autoFocusInput: action.payload,
      }
    case 'SET_LOCALES':
      return {
        ...state,
        appLocales: action.payload,
      }
    case 'SET_CURRENT_LOCALE':
      return {
        ...state,
        currentLocale: action.payload,
      }

    case 'SET_USER_RATED_APP':
      return {
        ...state,
        userRatedApp: action.payload,
      }

    case 'INCREMENT_APP_STARTS_COUNT':
      return {
        ...state,
        appStartsCount: ++state.appStartsCount,
      }

    default:
      return state
  }
}
