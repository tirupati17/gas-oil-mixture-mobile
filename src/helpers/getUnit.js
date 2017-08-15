import store from '../store/store';
import I18n from '../i18n';

export default () => {
  const measurementUnit = store.getState().app.measurementUnit;
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
