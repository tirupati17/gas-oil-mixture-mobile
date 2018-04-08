import I18n from 'react-native-i18n'
import sk from './sk'
import en from './en'
import en_GB from './en-GB'
import nl from './nl'
import de from './de'
import cs from './cs'
import ru from './ru'
import pl from './pl'
import zh from './zh'
import es from './es'

I18n.fallbacks = true
I18n.defaultLocale = 'en-EN'

I18n.translations = {
  sk,
  en,
  de,
  cs,
  nl,
  ru,
  pl,
  zh,
  'en-GB': en_GB,
  es,
}

export default I18n
