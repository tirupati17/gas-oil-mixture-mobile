import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TouchableItem from 'react-navigation/lib-rn/views/TouchableItem';

//helpers
import { GlobalStyles, Constants } from '../assets';
import I18n from '../i18n';

const Result = ({ resultString, locale, openOptions }) =>
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
          {resultString}
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
    <TouchableItem
      onPress={() => openOptions()}
      borderless
      style={{
        position: 'absolute',
        right: 2,
        top: 2,
      }}
    >
      <Icon name={'expand-more'} color={Constants.BORDER} size={25} />
    </TouchableItem>
  </View>;

export default Result;
