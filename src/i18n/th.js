import { Constants } from '../assets';

//THAILAND

const texts = {
  oilRatioCalculator: 'เครื่องคำนวณอัตราส่วนน้ำมัน',
  options: 'ตัวเลือก',
  amountOfFuel: 'ปริมาณเชื้อเพลิง:',
  oilMixRatio: 'อัตราส่วนการผสมน้ำมัน:',
  youNeedAdd: 'คุณต้องเพิ่ม',
  ofOilToGasoline: 'น้ำมันกับน้ำมันเบนซิน',
  unitsOfMeasurement: 'หน่วยวัด',
  litersUnit: 'ลิตร',
  usGallons: 'แกลลอนสหรัฐ',
  imperialGallons: 'อิมพีเรียลแกลลอน',
  shareApp: 'แชร์แอพ',
  shareMessage: `Super Gas/Oil ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
  shareTitle: 'Super Gas/Oil ratio calculator',
};

const units = {
  liters: 'ลิตร',
  l: 'l',
  milliliter: 'มิลลิลิตร',
  ml: 'ml',
  gallon: 'แกลลอน',
  gal: 'gal.',
  ounce: 'ออนซ์',
  oz: 'oz.',
};

export default {
  ...texts,
  ...units,
};
