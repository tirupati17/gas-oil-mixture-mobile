import store from '../store/store'

export default unit => {
  let measurementUnit
  if (unit) {
    measurementUnit = unit
  } else {
    measurementUnit = store.getState().app.measurementUnit
  }
  switch (measurementUnit) {
    case 'liters':
      return {
        base: 'liters',
        baseShort: 'l',
        small: 'milliliter',
        smallShort: 'ml',
      }
    case 'us':
      return {
        base: 'gallon',
        baseShort: 'gal',
        small: 'ounce',
        smallShort: 'oz',
      }
    case 'imperial':
      return {
        base: 'gallon',
        baseShort: 'gal',
        small: 'ounce',
        smallShort: 'oz',
      }
  }
}
