import { Constants } from '../assets';

//INDONESIAN

const texts = {
  oilRatioCalculator: 'Kalkulator Rasio Minyak',
  options: 'Pilihan',
  amountOfFuel: 'Jumlah bahan bakar:',
  oilMixRatio: 'Rasio campuran minyak:',
  youNeedAdd: 'Anda perlu menambahkan',
  ofOilToGasoline: 'minyak untuk bensin.',
  unitsOfMeasurement: 'Unit pengukuran',
  litersUnit: 'Liter',
  usGallons: 'Galon AS',
  imperialGallons: 'Galon kerajaan',
  shareApp: 'Bagikan Aplp',
  shareMessage: `Super Gas/Oil ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Super Gas/Oil ratio calculator',
};

const units = {
  liters: 'liter',
  l: 'l',
  milliliter: 'mililiter',
  ml: 'ml',
  gallon: 'gallon',
  gal: 'gal.',
  ounce: 'ons.',
  oz: 'oz.',
};

export default {
  ...texts,
  ...units,
};
