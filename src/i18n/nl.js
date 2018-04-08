import { Constants } from '../assets'

//DUTCH

const texts = {
  oilRatioCalculator: 'Benzine/Oil Calculator',
  options: 'Opties',
  amountOfFuel: 'Liters benzine:',
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
  contactMe:
    'Wil je mij helpen bij de vertaling van een app of wat tips voor verbeteringen? Neem gerust contact met mij op ',
  shareResult:
    'U moet de {{resultString}} olie toevoegen aan {{resultGasValue}} van benzine, in de verhouding {{resultRatio}}.',
  share: 'Delen',
  cancel: 'Annuleren',
  save: 'Besparen',
  delete: 'Verwijderen',
  edit: 'Bewerk',
  detailOfResult: 'Detail van het resultaat',
  cantBeEmpty: 'Het kan niet leeg zijn',
  title: 'Titel',
  description: 'Omschrijving',
  savedResults: 'Opgeslagen resultaten',
  yes: 'Ja',
  no: 'Nee',
  rate: 'Tarief',
  rateAppInPlayStore: ' Beoordeel deze app in de Play Store',
  doYouLikeApp: 'Hou je van app?',
  unit: 'Eenheid:',
}

const units = {
  liters: 'liter',
  l: 'l',
  milliliter: 'milliliter',
  ml: 'ml',
  gallon: 'gallon',
  gal: 'gal.',
  ounce: 'ons',
  oz: 'oz.',
}

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
  es: 'Spaans',
}

export default {
  ...texts,
  ...units,
  ...states,
}
