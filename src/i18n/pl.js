import { Constants } from '../assets';

//POLISH

const texts = {
  oilRatioCalculator: 'Kalkulator benzyny / oleju',
  options: 'Opcje',
  amountOfFuel: 'Ilość benzyny:',
  oilMixRatio: 'Wskaźnik stosunku oleju:',
  youNeedAdd: '"Musisz dodać',
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
  autoFocusingOn:
    'Ustawianie ostrości na wejściu benzyny w czasie startu jest włączone.',
  autoFocusingOff:
    'Ustawianie ostrości na wejściu benzyny podczas startu jest wyłączone.',
  language: 'Język',
  rateApp: 'Oceń aplikację',
};

const units = {
  liters: 'litry',
  l: 'l',
  milliliter: 'mililitr',
  ml: 'ml',
  gallon: 'galon',
  gal: 'gal.',
  ounce: 'uncja',
  oz: 'oz.',
};

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
};

export default {
  ...texts,
  ...units,
  ...states,
};
