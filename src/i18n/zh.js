import { Constants } from '../assets';

//CHINESE

const texts = {
  oilRatioCalculator: '汽油/石油计算器',
  options: '选项',
  amountOfFuel: '汽油量：',
  oilMixRatio: '油混比：',
  youNeedAdd: '你需要添加',
  ofOilToGasoline: '油到汽油',
  unitsOfMeasurement: '测量单位',
  litersUnit: '升',
  usGallons: '美国加仑”',
  imperialGallons: '皇家加仑',
  shareApp: '分享应用',
  shareMessage: `汽油/油混合比计算器 ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: '汽油/油混比计算器',
  firstHoursRecomendation: '如果二冲程发动机运行前10个工作小时，所需的汽油/油混合比为 ',
  afterRecomendation: '运行前10个营业时间后，汽油/石油所需混合比 ',
  readManual: '请阅读您的发动机的手册，比率可能与列出的建议不同。',
  instructions: '说明',
  autoFocusing: '自动对焦汽油输入开始',
  language: '语言',
  rateApp: '评价应用',
  contactMe: '你想帮助我翻译应用程序，还是有一些改进提示？ 随时与我联系 ',
};

const units = {
  liters: '升',
  l: '升',
  milliliter: '毫升',
  ml: '毫升',
  gallon: '加仑',
  gal: '加仑',
  ounce: '盎司',
  oz: '盎司',
};

const states = {
  sk: '斯洛伐克语',
  nl: '荷兰人',
  en: '英文（美国）',
  'en-GB': '英语（英国）',
  de: '德语',
  cs: '捷克语 ',
  ru: '俄',
  pl: '抛光',
  zh: '中文',
};

export default {
  ...texts,
  ...units,
  ...states,
};
