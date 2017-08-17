import { Constants } from '../assets';

//SLOVAK

const texts = {
  oilRatioCalculator: 'Kalkulačka Benzín/Olej',
  options: 'Možnosti',
  amountOfFuel: 'Množstvo benzínu:',
  oilMixRatio: 'Pomer oleja:',
  youNeedAdd: 'Potrebujete pridať',
  ofOilToGasoline: 'oleja do benzínu.',
  unitsOfMeasurement: 'Merné jednotky',
  litersUnit: 'Litre',
  usGallons: 'Americké galóny',
  imperialGallons: 'Imperial galóny',
  shareApp: 'Zdieľaj aplikáciu',
  shareMessage: `Kalkulačka pomeru zmesi Benzín/Olej ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Kalkulačka pomeru zmesi Benzín/Olej',
  firstHoursRecomendation:
    'Ak je dvojtaktný motor v prevádzke prvých 10 prevádzkových hodín, požadovaný pomer miešania Benzínu/Oleja je ',
  afterRecomendation:
    'Po prvých 10 prevádzkových hodinách je požadovaný pomer miešania Benzínu/Oleja ',
  readManual:
    'Prečítajte si prosím vašu príručku pre Váš motor, pomery sa môžu líšiť od uvedených odporúčaní.',
  instructions: 'Inštrukcie',
  autoFocusingOn: 'Zaostrenie pola Benzínu je pri štarte ZAPNUTÉ',
  autoFocusingOff: 'Zaostrenie pola Benzínu je pri štarte VYPNUTÉ',
  language: 'Jazyk',
};

const units = {
  liters: 'litre',
  l: 'l',
  milliliter: 'mililiter',
  ml: 'ml',
  gallon: 'galón',
  gal: 'gal.',
  ounce: 'unca',
  oz: 'oz.',
};

const states = {
  sk: 'Slovenský',
  'nl-NL': 'Holandský',
  en: 'Anglický (US)',
  'en-GB': 'Anglický (UK)',
};

export default {
  ...texts,
  ...units,
  ...states,
};
