import React from 'react';
import { Text, View } from 'react-native';

//helpers
import { GlobalStyles } from '../assets';
import { getUnit } from '../helpers';

const Result = ({ result }) =>
  <View style={[GlobalStyles.materialCard, GlobalStyles.centerAligned]}>
    <Text style={GlobalStyles.body}>You need add </Text>
    <Text style={GlobalStyles.title}>
      {`${result} ${getUnit().smallShort}`}
    </Text>
    <Text style={GlobalStyles.body}>of oil to gasoline.</Text>
  </View>;

export default Result;
