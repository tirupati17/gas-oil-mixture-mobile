import I18n from 'react-native-i18n';
import sk from './sk';
import en from './en';
import vi from './vi';
import id from './id';
import th from './th';
import zh from './zh';
import de from './de';

I18n.fallbacks = true;
I18n.defaultLocale = 'en-EN';

I18n.translations = {
  sk,
  en,
  vi,
  id,
  th,
  zh,
  de,
};

export default I18n;
