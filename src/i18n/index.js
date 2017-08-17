import I18n from 'react-native-i18n';
import sk from './sk';
import en from './en';
import en_GB from './en-GB';
import nl_NL from './nl-NL';

I18n.fallbacks = true;
I18n.defaultLocale = 'en-EN';

I18n.translations = {
  sk,
  en,
  'nl-NL': nl_NL,
  'en-GB': en_GB,
};

export default I18n;
