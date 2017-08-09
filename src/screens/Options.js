import React from 'react';
import { View, Picker, Text } from 'react-native';

//helpers
import { GlobalStyles } from '../assets';
import I18n from '../i18n';

const Options = ({ setUnit, selectedUnit }) =>
  <View style={[GlobalStyles.flex1, GlobalStyles.marginTopSml]}>
    <View style={GlobalStyles.materialCard}>
      <Text style={GlobalStyles.subheading}>
        {I18n.t('unitsOfMeasurement')}
      </Text>
      <Picker
        mode={'dropdown'}
        selectedValue={selectedUnit}
        onValueChange={value => setUnit(value)}
      >
        <Picker.Item label={I18n.t('litersUnit')} value="liters" />
        <Picker.Item label={I18n.t('usGallons')} value="us" />
        <Picker.Item label={I18n.t('imperialGallons')} value="imperial" />
      </Picker>
    </View>
  </View>;

export default Options;
