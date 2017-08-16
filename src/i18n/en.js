import { Constants } from '../assets';

//ENGLISH

const texts = {
  oilRatioCalculator: 'Gas/Oil Calculator',
  options: 'Options',
  amountOfFuel: 'Amount of gas:',
  oilMixRatio: 'Oil mix ratio:',
  youNeedAdd: 'You need add',
  ofOilToGasoline: 'of oil to gasoline.',
  unitsOfMeasurement: 'Unit of measurement',
  litersUnit: 'Liters',
  usGallons: 'US gallons',
  imperialGallons: 'Imperial gallons',
  shareApp: 'Share App',
  shareMessage: `Gas/Oil mix ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Gas/Oil mix ratio calculator',
  firstHoursRecomendation:
    'If two-stroke engine is running first 10 operating hours, required mix ratio of Gas/Oil is ',
  afterRecomendation:
    'After running first 10 operating hours, required mix ratio of Gas/Oil is ',
  readManual:
    'Please read your manual for your engine, the ratios may differ from the listed recommendations.',
  instructions: 'Instructions',
  autoFocusingOn: 'Focusing Gas input at start is ON.',
  autoFocusingOff: 'Focusing Gas input at start is OFF.',
  language: 'Language',
};

const units = {
  liters: 'liters',
  l: 'l',
  milliliter: 'milliliter',
  ml: 'ml',
  gallon: 'gallon',
  gal: 'gal.',
  ounce: 'ounce',
  oz: 'oz.',
};

export default {
  ...texts,
  ...units,
};
