import { Constants } from '../assets';

//GERMAN

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
  autoFocusingOn: 'De aansturing van benzine in het begin is AAN.',
  autoFocusingOff: 'De aansturing van benzine in het begin is UITGESCHAKELD.',
  language: 'Taal',
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
  'nl-NL': 'Nederlands',
  en: 'Engels (US)',
  'en-GB': 'Engels (UK)',
};

export default {
  ...texts,
  ...units,
  ...states,
};
