import I18n from '../../i18n';

const initialState = {
  autoFocusInput: true,
  appLocales: [I18n.currentLocale()],
  currentLocale: I18n.currentLocale(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTO_FOCUS_INPUT':
      return {
        ...state,
        autoFocusInput: action.payload,
      };
    case 'SET_LOCALES':
      return {
        ...state,
        appLocales: action.payload,
      };
    case 'SET_CURRENT_LOCALE':
      return {
        ...state,
        currentLocale: action.payload,
      };
    default:
      return state;
  }
};
