import React from 'react'
import { Text, View } from 'react-native'
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

//componenets
import { MoreButton } from '../components'
//helpers
import { GlobalStyles, Constants } from '../assets'
import I18n from '../i18n'

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
        <CommunityIcon
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
    <MoreButton onPress={() => openOptions()} />
  </View>

export default Result
