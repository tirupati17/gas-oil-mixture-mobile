import I18n from 'react-native-i18n';
import sk from './sk';
import en from './en';
import en_GB from './en-GB';
import de from './de';

I18n.fallbacks = true;
I18n.defaultLocale = 'en-EN';

I18n.translations = {
  sk,
  en,
  de,
  'en-GB': en_GB,
};

export default I18n;
