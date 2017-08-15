import React from 'react';
import { View, Text, Switch } from 'react-native';

//helpers
import I18n from '../i18n';
import { GlobalStyles } from '../assets';

const AutoFocusSwitch = ({ autoFocusInput, toggleAutoFocus }) =>
  <View
    style={[
      GlobalStyles.row,
      GlobalStyles.leftAligned,
      GlobalStyles.middleAligned,
      GlobalStyles.paddingTopSml,
      GlobalStyles.borderTopLine,
    ]}
  >
    <Switch value={autoFocusInput} onValueChange={() => toggleAutoFocus()} />
    <Text style={GlobalStyles.body}>
      {I18n.t(autoFocusInput ? 'autoFocusingOn' : 'autoFocusingOff')}
    </Text>
  </View>;

export default AutoFocusSwitch;
