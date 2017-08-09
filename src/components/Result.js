import React from 'react';
import { Text, View } from 'react-native';

//helpers
import { GlobalStyles } from '../assets';
import { getUnit } from '../helpers';
import I18n from '../i18n';

const Result = ({ result }) =>
  <View style={[GlobalStyles.materialCard, GlobalStyles.centerAligned]}>
    <Text style={GlobalStyles.body}>
      {I18n.t('youNeedAdd')}
    </Text>
    <Text style={GlobalStyles.title}>
      {`${result} ${getUnit().smallShort}`}
    </Text>
    <Text style={GlobalStyles.body}>
      {I18n.t('ofOilToGasoline')}
    </Text>
  </View>;

export default Result;
