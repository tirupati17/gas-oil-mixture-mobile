import { Constants } from '../assets';

//DUTCH

const texts = {
  oilRatioCalculator: 'Benzine/Oil Calculator',
  options: 'Opties',
  amountOfFuel: 'Bedrag van benzine:',
  oilMixRatio: 'Oliemix ratio:',
  youNeedAdd: 'Je moet toevoegen',
  ofOilToGasoline: 'van olie naar benzine.',
  unitsOfMeasurement: 'Meeteenheid',
  litersUnit: 'Liters',
  usGallons: 'Amerikaanse gallons',
  imperialGallons: 'Keizerlijke gallons',
  shareApp: 'Deel app',
  shareMessage: `Benzine/Olie mengverhouding calculator ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Benzine/Olie mengverhouding calculator',
  firstHoursRecomendation:
    'Als de twee-taktmotor eerste 10 bedrijfsuren draait, is de benodigde mengverhouding Benzine/Olie ',
  afterRecomendation:
    'Na het starten van de eerste 10 bedrijfsuren is de benodigde mengverhouding Benzine/Olie ',
  readManual:
    'Lees alstublieft uw handleiding voor uw motor, de verhoudingen kunnen verschillen van de aanbevolen aanbevelingen.',
  instructions: 'Instructies',
  autoFocusing: 'Auto Focus Benzine ingang in start.',
  language: 'Taal',
  rateApp: 'Beoordeel App',
};

const units = {
  liters: 'liter',
  l: 'l',
  milliliter: 'milliliter',
  ml: 'ml',
  gallon: 'gallon',
  gal: 'gal.',
  ounce: 'ons',
  oz: 'oz.',
};

const states = {
  sk: 'Slowaaks',
  nl: 'Nederlands',
  en: 'Engels (US)',
  'en-GB': 'Engels (UK)',
  de: 'Duits',
  cs: 'Tsjechisch',
  ru: 'Russisch',
  pl: 'Pools',
  zh: 'Chinese',
};

export default {
  ...texts,
  ...units,
  ...states,
};
