import store from '../store/store';
import I18n from '../i18n';

const US_GAL_TO_OZ_CONST = 128;
const IMPERIAL_GAL_TO_OZ_CONST = 160;
const LITERS_L_TO_ML_CONST = 1000;

export const getUnit = () => {
  const measurementUnit = store.getState().measurementUnit;
  switch (measurementUnit) {
    case 'liters':
      return {
        base: I18n.t('liters'),
        baseShort: I18n.t('l'),
        small: I18n.t('milliliter'),
        smallShort: I18n.t('ml'),
      };
    case 'us':
      return {
        base: I18n.t('gallon'),
        baseShort: I18n.t('gal'),
        small: I18n.t('ounce'),
        smallShort: I18n.t('oz'),
      };
    case 'imperial':
      return {
        base: I18n.t('gallon'),
        baseShort: I18n.t('gal'),
        small: I18n.t('ounce'),
        smallShort: I18n.t('oz'),
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
  const rounded = Math.round(result);
  return isFinite(rounded) ? rounded : 0;
};
