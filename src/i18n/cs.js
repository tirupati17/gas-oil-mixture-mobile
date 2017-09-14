import { Constants } from '../assets';

//CZECH

const texts = {
  oilRatioCalculator: 'Benzinová/Olejová kalkulačka',
  options: 'Možnosti',
  amountOfFuel: 'Množství benzínu:',
  oilMixRatio: 'Poměr směsi oleje:',
  youNeedAdd: 'Potřebujete přidat',
  ofOilToGasoline: 'oleje do benzínu.',
  unitsOfMeasurement: 'Měrná jednotka',
  litersUnit: 'Litry',
  usGallons: 'US galony',
  imperialGallons: 'Imperial galony',
  shareApp: 'Sdílet Aplikaci',
  shareMessage: `Kalkulátor poměru benzínu a oleje ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Kalkulačka poměrového mixu Venzínu/Oleje',
  firstHoursRecomendation:
    'Pokud je dvoudobý motor v provozu teprve 10 provozních hodin, požadovaný poměr směsi benzínu a oleje je ',
  afterRecomendation:
    'Po provedení prvních 10 provozních hodin je požadovaný poměr směsi Venzínu/Oleje je ',
  readManual:
    'Přečtěte si prosím vaši příručku k motoru, poměry se mohou lišit od uvedených doporučení.',
  instructions: 'Pokyny',
  autoFocusing: 'Automatické zaostření Benzínový vstupu při startu',
  language: 'Jazyk',
  rateApp: 'Ohodnoťte Aplikaci',
  contactMe:
    'Chcete mi pomoci s překladem aplikace nebo máte nějaké tipy na zlepšení? Neváhejte a kontaktujte mě na adrese ',
  shareResult:
    'Potřebujete přidat {{resultString}} oleje do {{resultGasValue}} benzínu v poměru {{resultRatio}}.',
  share: 'Zdílet',
  cancel: 'Zrušit',
  save: 'Uložit',
  delete: 'Zmazat',
  edit: 'Upravit',
  detailOfResult: 'Detail výsledku',
  cantBeEmpty: 'Nemůže být prázdný',
  title: 'Název',
  description: 'Popis',
  savedResults: 'Uložené výsledky',
  yes: 'Ano',
  no: 'Ne',
  rate: 'Ohodnotit',
  rateAppInPlayStore: 'Ohodnoťte tuto aplikaci v Obchodě Play',
  doYouLikeApp: 'Líbí se vám aplikace?',
};

const units = {
  liters: 'litry',
  l: 'l',
  milliliter: 'mililitr',
  ml: 'ml',
  gallon: 'galon',
  gal: 'gal.',
  ounce: 'unce',
  oz: 'oz.',
};

const states = {
  sk: 'Slovenské',
  nl: 'Nizozemština',
  en: 'Angličtina (US) ',
  'en-GB': 'Angličtina (UK) ',
  de: 'Nemčina',
  cs: 'Český',
  ru: 'Ruský',
  pl: 'Polština',
  zh: 'Čínština',
};

export default {
  ...texts,
  ...units,
  ...states,
};
