import { Constants } from '../assets'

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
  usGallons: '美国加仑',
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
  shareResult: '您需要将{{resultString}}油加入{{resultGasValue}}汽油，比例为{{resultRatio}}',
  share: '分享',
  cancel: '取消',
  save: '保存',
  delete: '删除',
  edit: '编辑',
  detailOfResult: '结果细节',
  cantBeEmpty: '它不能是空的',
  title: '标题',
  description: '说明',
  savedResults: '保存结果',
  yes: '是',
  no: '没有',
  rate: '率',
  rateAppInPlayStore: '请在Play商店评价这个应用程式',
  doYouLikeApp: '你喜欢应用程序吗？',
  unit: '单元:',
}

const units = {
  liters: '升',
  l: '升',
  milliliter: '毫升',
  ml: '毫升',
  gallon: '加仑',
  gal: '加仑',
  ounce: '盎司',
  oz: '盎司',
}

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
  es: '西班牙語',
}

export default {
  ...texts,
  ...units,
  ...states,
}
