const initialState = {
  measurementUnit: 'liters',
  oilValue: '50',
  gasValue: '10',
  result: '',
};

const onlyNumbers = string => string.replace(/[^0-9.]/g, '');

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MEASUREMENT_UNIT':
      return {
        ...state,
        measurementUnit: action.payload,
      };
    case 'SET_GAS_VALUE':
      return {
        ...state,
        gasValue: onlyNumbers(action.payload),
      };
    case 'SET_OIL_VALUE':
      return {
        ...state,
        oilValue: onlyNumbers(action.payload),
      };
    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
};
