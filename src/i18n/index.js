import I18n from 'react-native-i18n';
import sk from './sk';
import en from './en';
import de from './de';

I18n.fallbacks = true;
I18n.defaultLocale = 'en-EN';

I18n.translations = {
  sk,
  en,
  de,
};

export default I18n;
