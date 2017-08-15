import store from '../store/store';
import I18n from '../i18n';
import { setResult } from '../store/actions';

const US_GAL_TO_OZ_CONST = 128;
const IMPERIAL_GAL_TO_OZ_CONST = 160;
const LITERS_L_TO_ML_CONST = 1000;

export default () => {

  const reduxStore = store.getState();
  const unit = reduxStore.measurementUnit;
  const currentLocale = I18n.currentLocale();
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
  const withFiniteCheck = isFinite(rounded) ? rounded : 0;

  store.dispatch(setResult(withFiniteCheck.toLocaleString(currentLocale)));
};
