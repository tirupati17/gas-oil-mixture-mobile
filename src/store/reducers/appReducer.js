import { shortId } from '../../helpers'

const initialState = {
  measurementUnit: 'liters',
  oilValue: '50',
  gasValue: '10',
  result: '200',
  savedResults: [],
}

const onlyNumbers = string => string.replace(/[^0-9.]/g, '')

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MEASUREMENT_UNIT':
      return {
        ...state,
        measurementUnit: action.payload,
      }
    case 'SET_GAS_VALUE':
      return {
        ...state,
        gasValue: onlyNumbers(action.payload),
      }
    case 'SET_OIL_VALUE':
      return {
        ...state,
        oilValue: onlyNumbers(action.payload),
      }
    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload,
      }
    case 'SAVE_RESULT':
      const newResult = {
        id: shortId(),
        createdAt: new Date(),
        ...action.payload,
      }
      return {
        ...state,
        savedResults: [newResult, ...state.savedResults],
      }
    case 'DELETE_RESULT':
      const { payload: { id } } = action
      const newResults = state.savedResults.filter(item => item.id !== id)
      return {
        ...state,
        savedResults: newResults,
      }
    case 'EDIT_SAVED_RESULT':
      const { payload: { id: editId, name, desc } } = action
      const index = state.savedResults.findIndex(item => item.id === editId)
      state.savedResults[index] = {
        ...state.savedResults[index],
        name,
        desc,
      }
      return {
        ...state,
        savedResults: [...state.savedResults],
      }

    default:
      return state
  }
}
