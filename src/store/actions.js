//APP PERSISTED ACTIONS

export const SET_MEASUREMENT_UNIT = 'SET_MEASUREMENT_UNIT'
export const SET_OIL_VALUE = 'SET_OIL_VALUE'
export const SET_GAS_VALUE = 'SET_GAS_VALUE'
export const SET_RESULT = 'SET_RESULT'
export const SAVE_RESULT = 'SAVE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'
export const EDIT_SAVED_RESULT = 'EDIT_SAVED_RESULT'

export const setMeasurementUnit = payload => ({
  type: SET_MEASUREMENT_UNIT,
  payload,
})

export const setOilValue = payload => ({
  type: SET_OIL_VALUE,
  payload,
})

export const setGasValue = payload => ({
  type: SET_GAS_VALUE,
  payload,
})

export const setResult = payload => ({
  type: SET_RESULT,
  payload,
})

export const saveResult = payload => ({
  type: SAVE_RESULT,
  payload,
})

export const deleteResult = payload => ({
  type: DELETE_RESULT,
  payload,
})

export const editSavedResult = payload => ({
  type: EDIT_SAVED_RESULT,
  payload,
})

//SETTINGS PERSISETD ACTIONS

export const SET_AUTO_FOCUS_INPUT = 'SET_AUTO_FOCUS_INPUT'
export const SET_LOCALES = 'SET_LOCALES'
export const SET_CURRENT_LOCALE = 'SET_CURRENT_LOCALE'
export const SET_USER_RATED_APP = 'SET_USER_RATED_APP'
export const INCREMENT_APP_STARTS_COUNT = 'INCREMENT_APP_STARTS_COUNT'

export const setAutoFocusInput = payload => ({
  type: SET_AUTO_FOCUS_INPUT,
  payload,
})

export const setLocales = payload => ({
  type: SET_LOCALES,
  payload,
})

export const setCurrentLocale = payload => ({
  type: SET_CURRENT_LOCALE,
  payload,
})

export const setUserRatedApp = payload => ({
  type: SET_USER_RATED_APP,
  payload,
})

export const incrementAppStartsCount = payload => ({
  type: INCREMENT_APP_STARTS_COUNT,
  payload,
})

//INIT NOT_PERSISTED ACTIONS

export const SET_APP_READY = 'SET_APP_READY'

export const setAppReady = payload => ({
  type: SET_APP_READY,
  payload,
})
