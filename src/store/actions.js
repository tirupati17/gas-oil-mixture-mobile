//APP PERSISTED ACTIONS

export const SET_MEASUREMENT_UNIT = 'SET_MEASUREMENT_UNIT';
export const SET_OIL_VALUE = 'SET_OIL_VALUE';
export const SET_GAS_VALUE = 'SET_GAS_VALUE';
export const SET_RESULT = 'SET_RESULT';

export const setMeasurementUnit = payload => ({
  type: SET_MEASUREMENT_UNIT,
  payload,
});

export const setOilValue = payload => ({
  type: SET_OIL_VALUE,
  payload,
});

export const setGasValue = payload => ({
  type: SET_GAS_VALUE,
  payload,
});

export const setResult = payload => ({
  type: SET_RESULT,
  payload,
});

//SETTINGS PERSISETD ACTIONS

export const SET_AUTO_FOCUS_INPUT = 'SET_AUTO_FOCUS_INPUT';
export const SET_LOCALES = 'SET_LOCALES';
export const SET_CURRENT_LOCALE = 'SET_CURRENT_LOCALE';

export const setAutoFocusInput = payload => ({
  type: SET_AUTO_FOCUS_INPUT,
  payload,
});

export const setLocales = payload => ({
  type: SET_LOCALES,
  payload,
});

export const setCurrentLocale = payload => ({
  type: SET_CURRENT_LOCALE,
  payload,
});

//INIT NOT_PERSISTED ACTIONS

export const SET_APP_READY = 'SET_APP_READY';

export const setAppReady = payload => ({
  type: SET_APP_READY,
  payload,
});
