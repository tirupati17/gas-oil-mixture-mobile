import { Constants } from '../assets';

const texts = {
  oilRatioCalculator: 'Kalkulačka Pomeru Oleja',
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
  shareMessage: `Super kalkulačka pomeru oleja/benzínu ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Super Gas/Oil ratio calculator',
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

export default {
  ...texts,
  ...units,
};
