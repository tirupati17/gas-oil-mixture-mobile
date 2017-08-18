import { Constants } from '../assets';

//RUSSIAN

const texts = {
  oilRatioCalculator: 'Калькулятор бензина / масла',
  options: 'Параметры',
  amountOfFuel: 'Количество бензина:',
  oilMixRatio: 'Соотношение масляной смеси:',
  youNeedAdd: 'Вам нужно добавить',
  ofOilToGasoline: 'нефти на бензин',
  unitsOfMeasurement: 'Единица измерения',
  litersUnit: 'Литры',
  usGallons: 'аллоны США',
  imperialGallons: 'Имперские галлоны',
  shareApp: 'Поделиться приложением',
  shareMessage: `Калькулятор соотношения количества бензина / масла ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Калькулятор соотношения количества бензина / масла',
  firstHoursRecomendation:
    'Если двухтактный двигатель работает в течение первых 10 часов работы, требуемое соотношение компонентов бензина / масла равно ',
  afterRecomendation:
    'После запуска первых 10 часов работы требуемое соотношение компонентов бензина / масла равно ',
  readManual:
    'Пожалуйста, прочтите свое руководство для вашего двигателя, коэффициенты могут отличаться от перечисленных рекомендаций ',
  instructions: 'Инструкции',
  autoFocusingOn: 'Фокусировочный вход для бензина при запуске включен.',
  autoFocusingOff: 'Фокусировка входа для подачи топлива при запуске выключена',
  language: 'Язык',
  rateApp: 'Оценить приложение',
};

const units = {
  liters: 'литры',
  l: 'l',
  milliliter: 'миллилитр',
  ml: 'мл',
  gallon: 'галлон',
  gal: 'gal.',
  ounce: 'унция',
  oz: 'oz.',
};

const states = {
  sk: 'Словацкий',
  nl: 'Голландский ',
  en: 'Английский (США)',
  'en-GB': 'Английский (Великобритания)',
  de: 'Deutsche ',
  cs: 'Чешский ',
  ru: 'Pусский',
  pl: 'полировать',
  zh: 'Китайский',
};

export default {
  ...texts,
  ...units,
  ...states,
};
