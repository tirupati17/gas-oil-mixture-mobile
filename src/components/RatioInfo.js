import React from 'react';
import { Text, View } from 'react-native';

//helpers
import { GlobalStyles, Constants } from '../assets';
import I18n from '../i18n';

const textStyle = [
  GlobalStyles.borderTopLine,
  GlobalStyles.paddingVerticalSml,
  GlobalStyles.body,
  { fontSize: 15 },
];

const textLink = [
  { fontSize: 15, textDecorationLine: 'underline' },
  GlobalStyles.link,
];

const RatioInfo = ({ setOilValue }) =>
  <View style={[GlobalStyles.materialCard, GlobalStyles.flex1]}>
    <Text
      selectable
      style={[GlobalStyles.body, { color: Constants.SECONDARY_COLOR }]}
    >
      {I18n.t('instructions')}
    </Text>
    <Text selectable style={textStyle}>
      {I18n.t('firstHoursRecomendation')}
      <Text style={textLink} onPress={() => setOilValue('25')}>
        1:25
      </Text>
    </Text>
    <Text selectable style={textStyle}>
      {I18n.t('afterRecomendation')}
      <Text style={textLink} onPress={() => setOilValue('50')}>
        1:50
      </Text>
    </Text>
    <Text selectable style={[...textStyle, { fontWeight: '500' }]}>
      {I18n.t('readManual')}
    </Text>
  </View>;

export default RatioInfo;
