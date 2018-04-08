import { Constants } from '../assets'

//ENGLISH

const texts = {
  oilRatioCalculator: 'Petrol/Oil Calculator',
  options: 'Options',
  amountOfFuel: 'Amount of petrol:',
  oilMixRatio: 'Oil mix ratio:',
  youNeedAdd: 'You need add',
  ofOilToGasoline: 'of oil to petrol.',
  unitsOfMeasurement: 'Unit of measurement',
  litersUnit: 'Liters',
  usGallons: 'US gallons',
  imperialGallons: 'Imperial gallons',
  shareApp: 'Share App',
  shareMessage: `Petrol/Oil mix ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Petrol/Oil mix ratio calculator',
  firstHoursRecomendation:
    'If two-stroke engine is running first 10 operating hours, required mix ratio of Petrol/Oil is ',
  afterRecomendation:
    'After running first 10 operating hours, required mix ratio of Petrol/Oil is ',
  readManual:
    'Please read your manual for your engine, the ratios may differ from the listed recommendations.',
  instructions: 'Instructions',
  autoFocusing: 'Auto focus Petrol input in start.',
  language: 'Language',
  rateApp: 'Rate App',
  contactMe:
    'Do you want help me with translation of app or have some tips for improvements? Feel free to contact me at ',
  shareResult:
    'You need add the {{resultString}} of oil to {{resultGasValue}} of petrol, in the ratio {{resultRatio}}.',
  share: 'Share',
  cancel: 'Cancel',
  save: 'Save',
  delete: 'Delete',
  edit: 'Edit',
  detailOfResult: 'Detail of result',
  cantBeEmpty: 'It cannot be empty',
  title: 'Title',
  description: 'Description',
  savedResults: 'Saved results',
  yes: 'Yes',
  no: 'No',
  rate: 'Rate',
  rateAppInPlayStore: 'Please rate this app in Play Store',
  doYouLikeApp: 'Do you like app?',
  unit: 'Unit:',
}

const units = {
  liters: 'liters',
  l: 'l',
  milliliter: 'milliliter',
  ml: 'ml',
  gallon: 'gallon',
  gal: 'gal.',
  ounce: 'ounce',
  oz: 'oz.',
}

const states = {
  sk: 'Slovak',
  nl: 'Dutch',
  en: 'English (US)',
  'en-GB': 'English (UK)',
  de: 'German',
  cs: 'Czech ',
  ru: 'Russian',
  pl: 'Polish ',
  zh: 'Chinese',
  es: 'Spanish',
}

export default {
  ...texts,
  ...units,
  ...states,
}
