import { Constants } from '../assets'

//RUSSIAN

const texts = {
  oilRatioCalculator: 'Калькулятор бензина / масла',
  options: 'Параметры',
  amountOfFuel: 'Количество бензина:',
  oilMixRatio: 'Cоотношение смеси:',
  youNeedAdd: 'Вам нужно добавить',
  ofOilToGasoline: 'масла в бензин',
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
  autoFocusing: 'Автофокус Вход для бензинового двигателя.',
  language: 'Язык',
  rateApp: 'Оценить приложение',
  contactMe:
    'Вы хотите помочь мне с переводом приложения или иметь некоторые советы по улучшению? Не стесняйтесь обращаться ко мне по адресу ',
  shareResult:
    'Вам нужно добавить масло {{resultString}} к {{resultGasValue}} бензина в соотношении {{resultRatio}}',
  share: 'доля',
  cancel: 'Отмена',
  save: 'спасти',
  delete: 'Удалить',
  edit: 'Pедактировать',
  detailOfResult: 'Деталь результата',
  cantBeEmpty: 'Он не может быть пустым',
  title: 'заглавие',
  description: 'Описание',
  savedResults: 'Сохраненные результаты',
  yes: 'да',
  no: 'нет',
  rate: 'скорость',
  rateAppInPlayStore: 'Оцените это приложение в Play Маркете',
  doYouLikeApp: 'Вам нравится приложение?',
  unit: 'Ед. изм:',
}

const units = {
  liters: 'литры',
  l: 'l',
  milliliter: 'миллилитр',
  ml: 'мл',
  gallon: 'галлон',
  gal: 'gal.',
  ounce: 'унция',
  oz: 'oz.',
}

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
  es: 'испанский',
}

export default {
  ...texts,
  ...units,
  ...states,
}
