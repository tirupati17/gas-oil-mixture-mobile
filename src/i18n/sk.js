import { Constants } from '../assets'

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
  autoFocusing: 'Automatické zaostrenie benzínového vstupu pri štarte.',
  language: 'Jazyk',
  rateApp: 'Ohodnoť aplikáciu',
  contactMe:
    'Chcete pomôcť s prekladom aplikácie alebo máte nejaké tipy na zlepšenie? Neváhajte a kontaktujte ma na ',
  shareResult:
    'Potrebuješ pridať {{resultString}} oleja do {{resultGasValue}} benzínu, v pomere {{resultRatio}}.',
  share: 'Zdielať',
  cancel: 'Zavrieť',
  save: 'Uložiť',
  delete: 'Vymazať',
  edit: 'Upraviť',
  detailOfResult: 'Detail výsledku',
  cantBeEmpty: 'Nemôže to byť prázdne',
  title: 'Názov',
  description: 'Popis',
  savedResults: 'Uložené výsledky',
  yes: 'Áno',
  no: 'Nie',
  rate: 'Ohodnotiť',
  rateAppInPlayStore: 'Ohodnoťte túto aplikáciu v službe Obchod Play',
  doYouLikeApp: 'Páči sa vám aplikácia?',
  unit: 'Jednotka:',
}

const units = {
  liters: 'litre',
  l: 'l',
  milliliter: 'mililiter',
  ml: 'ml',
  gallon: 'galón',
  gal: 'gal.',
  ounce: 'unca',
  oz: 'oz.',
}

const states = {
  sk: 'Slovenský',
  nl: 'Holandský',
  en: 'Anglický (US)',
  'en-GB': 'Anglický (UK)',
  de: 'Nemecký',
  cs: 'Česky',
  ru: 'Rusky',
  pl: 'Polsky',
  zh: 'Čínsky',
  es: 'Španielsky',
}

export default {
  ...texts,
  ...units,
  ...states,
}
