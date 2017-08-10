import { Constants } from '../assets';

//VIETNAMESE

const texts = {
  oilRatioCalculator: 'Bộ tính tỷ lệ dầu',
  options: 'Tùy chọn',
  amountOfFuel: 'Lượng nhiên liệu:',
  oilMixRatio: 'Tỷ lệ pha trộn dầu:',
  youNeedAdd: 'Bạn cần thêm',
  ofOilToGasoline: 'dầu với xăng',
  unitsOfMeasurement: 'đơn vị đo lường',
  litersUnit: 'Lít',
  usGallons: 'Gallon Mỹ',
  imperialGallons: 'Gallon Imperial',
  shareApp: 'Chia sẻ ứng dụng',
  shareMessage: `Super Gas/Oil ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Super Gas/Oil ratio calculator',
};

const units = {
  liters: 'lít',
  l: 'l',
  milliliter: 'mililit',
  ml: 'ml',
  gallon: 'gallon',
  gal: 'gal.',
  ounce: 'ounce',
  oz: 'oz.',
};

export default {
  ...texts,
  ...units,
};
