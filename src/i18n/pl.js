import { Constants } from '../assets'

//POLISH

const texts = {
  oilRatioCalculator: 'Kalkulator benzyny / oleju',
  options: 'Opcje',
  amountOfFuel: 'Ilość benzyny:',
  oilMixRatio: 'Wskaźnik stosunku oleju:',
  youNeedAdd: 'Musisz dodać',
  ofOilToGasoline: 'oleju na benzynę.',
  unitsOfMeasurement: 'Jednostki miary',
  litersUnit: 'Litery',
  usGallons: 'Galony amerykańskie',
  imperialGallons: 'Cesarskie galony',
  shareApp: 'Udostępnij aplikację',
  shareMessage: `Kalkulator współczynnika proporcji benzyny / oleju ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Kalkulator współczynnika proporcji benzyny / oleju',
  firstHoursRecomendation:
    'Jeśli silnik dwusuwowy jest uruchomiony przez pierwsze 10 godzin pracy, wymagany stosunek benzyny / oleju jest ',
  afterRecomendation:
    'Po pierwszych 10 godzinach pracy wymagany stosunek mieszanki benzyny / oleju jes ',
  readManual:
    'Przeczytaj instrukcję dotyczącą silnika, stosunki mogą się różnić od wymienionych zaleceń.',
  instructions: 'Instrukcje',
  autoFocusing: 'Auto Focus Wejście benzyny na początku.',
  language: 'Język',
  rateApp: 'Oceń aplikację',
  contactMe:
    'Czy chcesz mi pomóc w tłumaczeniu aplikacji lub uzyskać wskazówki dotyczące ulepszeń? Zapraszam do kontaktu ze mną w ',
  shareResult:
    'Musisz dodać {{resultString}} oleju do {{resultGasValue}} benzyny, w stosunku {{resultRatio}}.',
  share: 'Dzielić',
  cancel: 'Anuluj',
  save: 'Zapisać',
  delete: 'Kasować',
  edit: 'Edytować',
  detailOfResult: 'Szczegóły wyników',
  cantBeEmpty: 'Nie może być puste',
  title: 'Tytuł',
  description: 'Opis',
  savedResults: 'Zapisane wyniki',
  yes: 'Tak',
  no: 'Nie',
  rate: 'Stawka',
  rateAppInPlayStore: 'Oceń tę aplikację w Sklepie Play',
  doYouLikeApp: 'Czy lubisz aplikację?',
  unit: 'Jednostka:',
}

const units = {
  liters: 'litry',
  l: 'l',
  milliliter: 'mililitr',
  ml: 'ml',
  gallon: 'galon',
  gal: 'gal.',
  ounce: 'uncja',
  oz: 'oz.',
}

const states = {
  sk: 'Słowacki',
  nl: 'Niderlandzki',
  en: 'Angielski (USA)',
  'en-GB': 'Angielski (Wielka Brytania)',
  de: 'Niemiecki',
  cs: 'Czeski ',
  ru: 'Rosyjski',
  pl: 'Polskie',
  zh: 'Chiński',
  es: 'Hiszpański',
}

export default {
  ...texts,
  ...units,
  ...states,
}
