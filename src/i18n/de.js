import { Constants } from '../assets';

//GERMAN

const texts = {
  oilRatioCalculator: 'Benzin / Ölrechner',
  options: 'Optionen',
  amountOfFuel: 'Benzinmenge:',
  oilMixRatio: 'Ölmischungsverhältnis:',
  youNeedAdd: 'Du brauchst hinzufügen',
  ofOilToGasoline: 'von Öl zu Benzin.',
  unitsOfMeasurement: 'Maßeinheit',
  litersUnit: 'Liters',
  usGallons: 'US Gallonen',
  imperialGallons: 'Imperiale Gallonen',
  shareApp: 'App teilen',
  shareMessage: `Benzin / Ölmischungsverhältnis Taschenrechner ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Benzin / Ölmischungsverhältnis Taschenrechnerr',
  firstHoursRecomendation:
    'Wenn der Zweitaktmotor die ersten 10 Betriebsstunden ausführt, ist das erforderliche Mischungsverhältnis von Benzin / Öl ',
  afterRecomendation:
    'Nach dem Ausführen der ersten 10 Betriebsstunden ist das erforderliche Mischungsverhältnis von Benzin / Öl ',
  readManual:
    'Bitte lesen Sie Ihr Handbuch für Ihren Motor, die Verhältnisse können von den aufgeführten Empfehlungen abweichen.',
  instructions: 'Anleitung',
  autoFocusingOn: 'Fokussierung Benzin-Eingang im Start ist EIN.',
  autoFocusingOff: 'Fokussierung Benzin-Eingang im Start ist OFF.',
  language: 'Sprache',
  rateApp: 'Bewertungs App',
};

const units = {
  liters: 'Liter',
  l: 'l',
  milliliter: 'milliliter',
  ml: 'ml',
  gallon: 'gallone',
  gal: 'gal.',
  ounce: 'Unze',
  oz: 'oz.',
};

const states = {
  sk: 'Slowakisch',
  nl: 'Niederländisch',
  en: 'Englisch (US)',
  'en-GB': 'Englisch (UK)',
  de: 'Deutsche',
  cs: 'Tschechisch',
  ru: 'Russisch',
  pl: 'Polieren',
  zh: 'Chinesisch',
};

export default {
  ...texts,
  ...units,
  ...states,
};
