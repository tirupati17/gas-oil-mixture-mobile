import { Constants } from '../assets';

//CHINESE

const texts = {
    oilRatioCalculator: '油比计算器',
    options: '选项',
    amountOfFuel: '燃油量',
    oilMixRatio: '油混比：',
    youNeedAdd: '你需要添加：',
    ofOilToGasoline: '油到汽油',
    unitsOfMeasurement: '测量单位',
    litersUnit: '升',
    usGallons: '美国加仑',
    imperialGallons: '皇家加仑',
    shareApp: '分享应用',
    shareMessage: `Super Gas/Oil ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
    shareTitle: 'Super Gas/Oil ratio calculator',
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

export default {
    ...texts,
    ...units,
};
