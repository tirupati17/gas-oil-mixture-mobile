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

//INIT NOT_PERSISTED ACTIONS

export const SET_APP_READY = 'SET_APP_READY';

export const setAppReady = payload => ({
  type: SET_APP_READY,
  payload,
});
