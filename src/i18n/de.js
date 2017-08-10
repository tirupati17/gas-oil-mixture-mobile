import { Constants } from '../assets';

//GERMAN

const texts = {
    oilRatioCalculator: 'Olieverhouding Calculator',
    options: 'Opties',
    amountOfFuel: 'Bedrag brandstof:',
    oilMixRatio: 'Oliemix ratio:',
    youNeedAdd: 'Je moet toevoegen',
    ofOilToGasoline: 'van olie naar benzine.',
    unitsOfMeasurement: 'Meeteenheid',
    litersUnit: 'Liters',
    usGallons: 'Amerikaanse gallons',
    imperialGallons: 'Keizerlijke gallons',
    shareApp: 'Deel app',
    shareMessage: `Super Gas/Oil ratio calculator ${Constants.GOOGLE_PLAY_LINK}`,
    shareTitle: 'Super Gas/Oil ratio calculator',
};

const units = {
    liters: 'liter',
    l: 'l',
    milliliter: 'milliliter',
    ml: 'ml',
    gallon: 'gallon',
    gal: 'gal.',
    ounce: 'ons',
    oz: 'oz.',
};

export default {
    ...texts,
    ...units,
};
