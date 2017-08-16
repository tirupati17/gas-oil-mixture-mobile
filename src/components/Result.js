import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//helpers
import { GlobalStyles, Constants } from '../assets';
import { getUnit } from '../helpers';
import I18n from '../i18n';

const Result = ({ result, locale }) =>
  <View style={[GlobalStyles.materialCard, GlobalStyles.centerAligned]}>
    <View>
      <Text
        selectable
        style={[GlobalStyles.body, GlobalStyles.textCenterAligned]}
      >
        {I18n.t('youNeedAdd', { locale })}
      </Text>
      <View>
        <Text
          selectable
          style={[GlobalStyles.title, GlobalStyles.textCenterAligned]}
        >
          {`${result.toLocaleString(locale)} ${getUnit().smallShort}`}
        </Text>
        <Icon
          name={'format-color-fill'}
          color={Constants.PRIMARY_COLOR}
          size={35}
          style={{
            position: 'absolute',
            left: -35,
            top: 10,
          }}
        />
      </View>
      <Text
        selectable
        style={[GlobalStyles.body, GlobalStyles.textCenterAligned]}
      >
        {I18n.t('ofOilToGasoline', { locale })}
      </Text>
    </View>
  </View>;

export default Result;
