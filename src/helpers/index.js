import store from '../store/store';

const US_GAL_TO_OZ_CONST = 128;
const IMPERIAL_GAL_TO_OZ_CONST = 160;
const LITERS_L_TO_ML_CONST = 1000;

export const getUnit = () => {
  const measurementUnit = store.getState().measurementUnit;
  switch (measurementUnit) {
    case 'liters':
      return {
        base: 'liter',
        baseShort: 'l',
        small: 'milliliter',
        smallShort: 'ml',
      };
    case 'us':
      return {
        base: 'gallon',
        baseShort: 'gal.',
        small: 'ounce',
        smallShort: 'oz.',
      };
    case 'imperial':
      return {
        base: 'gallon',
        baseShort: 'gal.',
        small: 'ounce',
        smallShort: 'oz.',
      };
  }
};

export const getResult = () => {
  const reduxStore = store.getState();
  const unit = reduxStore.measurementUnit;
  const oilRatio = parseFloat(reduxStore.oilValue);
  const gasValue = parseFloat(reduxStore.gasValue);
  let result = gasValue / oilRatio;

  if (unit === 'liters') {
    result = result * LITERS_L_TO_ML_CONST;
  } else if (unit === 'us') {
    result = result * US_GAL_TO_OZ_CONST;
  } else if (unit === 'imperial') {
    result = result * IMPERIAL_GAL_TO_OZ_CONST;
  }
  return Math.round(result || 0);
};
