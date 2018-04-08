import React from 'react'
import { View, Text, Switch } from 'react-native'

//helpers
import I18n from '../i18n'
import { GlobalStyles } from '../assets'

const AutoFocusSwitch = ({ autoFocusInput, toggleAutoFocus, locale }) =>
  <View
    style={[
      GlobalStyles.row,
      GlobalStyles.leftAligned,
      GlobalStyles.middleAligned,
      GlobalStyles.paddingTop,
      GlobalStyles.borderTopLine,
    ]}
  >
    <Switch value={autoFocusInput} onValueChange={() => toggleAutoFocus()} />
    <Text
      style={[
        GlobalStyles.body,
        GlobalStyles.flex1,
        GlobalStyles.paddingLeftSml,
      ]}
    >
      {I18n.t('autoFocusing', { locale })}
    </Text>
  </View>

export default AutoFocusSwitch
