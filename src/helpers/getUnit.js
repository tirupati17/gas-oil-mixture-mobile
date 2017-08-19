import store from '../store/store';
import I18n from '../i18n';

export default locale => {
  const measurementUnit = store.getState().app.measurementUnit;
  switch (measurementUnit) {
    case 'liters':
      return {
        base: I18n.t('liters', { locale }),
        baseShort: I18n.t('l', { locale }),
        small: I18n.t('milliliter', { locale }),
        smallShort: I18n.t('ml', { locale }),
      };
    case 'us':
      return {
        base: I18n.t('gallon', { locale }),
        baseShort: I18n.t('gal', { locale }),
        small: I18n.t('ounce', { locale }),
        smallShort: I18n.t('oz', { locale }),
      };
    case 'imperial':
      return {
        base: I18n.t('gallon', { locale }),
        baseShort: I18n.t('gal', { locale }),
        small: I18n.t('ounce', { locale }),
        smallShort: I18n.t('oz', { locale }),
      };
  }
};
