import { Constants } from '../assets'

//SPANISH

const texts = {
  oilRatioCalculator: 'Calculadora Gas/Petróleo',
  options: 'Opciones',
  amountOfFuel: 'Cantidad de gas',
  oilMixRatio: 'Relación de petróleo:',
  youNeedAdd: 'Necesitas añadir',
  ofOilToGasoline: 'de petróleo a la gasolina.',
  unitsOfMeasurement: 'Unidad de medida',
  litersUnit: 'Litros',
  usGallons: 'galones US',
  imperialGallons: 'Galones imperiales',
  shareApp: 'Comparte la App',
  shareMessage: `Calculadora de mezcla de Gas/Petróleo ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Calculadora de mezcla de Gas/Petróleo',
  firstHoursRecomendation:
    'Si un motor de dos tiempos está 10 horas funcionando, el ratio requerido de mezcla de Gasolina y Petróleo es ',
  afterRecomendation:
    'Después de estar 10 horas funcionando, el ratio requerido de mezcla de Gasolina y Petróleo es ',
  readManual:
    'Por favor, lea el manual de su motor, los ratios podrían diferir con la recomendación propuesta.',
  instructions: 'Instrucciones',
  autoFocusing: 'Ajuste automático de entrada de Gasolina al iniciar.',
  language: 'Idioma',
  rateApp: 'Valora la App',
  contactMe:
    'Deseas ayudarme con la traducción de la app o tienes algunos consejos o propuestas que ofrecerme? Siéntete libre de contactarme a ',
  shareResult:
    'Necesitas añadir {{resultString}} de petróleo a {{resultGasValue}} de gasolina, con la relación {{resultRatio}}.',
  share: 'Compartir',
  cancel: 'Cancelar',
  save: 'Guardar',
  delete: 'Eliminar',
  edit: 'Salir',
  detailOfResult: 'Detalles del resultado',
  cantBeEmpty: 'Esto no puede estar vacío',
  title: 'Título',
  description: 'Descripción',
  savedResults: 'Resultados guardados',
  yes: 'Si',
  no: 'No',
  rate: 'Valora',
  rateAppInPlayStore: 'Por favor valora esta aplicación en Play Store',
  doYouLikeApp: 'Te gusta la App?',
  unit: 'Unidad:',
}

const units = {
  liters: 'litros',
  l: 'l',
  milliliter: 'mililitro',
  ml: 'ml',
  gallon: 'galón',
  gal: 'gal.',
  ounce: 'ounce',
  oz: 'oz.',
}

const states = {
  sk: 'Eslovaco',
  nl: 'Holandés',
  en: 'Inglés (US)',
  'en-GB': 'Inglés (UK)',
  de: 'Alemán',
  cs: 'Checo',
  ru: 'Ruso',
  pl: 'Polaco',
  zh: 'Chino',
  es: 'Español',
}

export default {
  ...texts,
  ...units,
  ...states,
}
