import React from 'react';
import { View, Picker, Text, Button } from 'react-native';

//helpers
import { GlobalStyles, Constants } from '../assets';
import I18n from '../i18n';

//components
import {
  AutoFocusSwitch,
  AppLocalesPicker,
  AppUnitsPicker,
} from '../components';

const Options = ({
  setUnit,
  selectedUnit,
  shareApp,
  autoFocusInput,
  toggleAutoFocus,
  appLocales,
  setLocale,
  locale,
}) =>
  <View style={[GlobalStyles.flex1, GlobalStyles.marginTopSml]}>
    <View style={GlobalStyles.materialCard}>
      <AppUnitsPicker
        setUnit={setUnit}
        selectedUnit={selectedUnit}
        locale={locale}
      />
      <AppLocalesPicker
        appLocales={appLocales}
        locale={locale}
        setLocale={setLocale}
      />
      <AutoFocusSwitch
        autoFocusInput={autoFocusInput}
        toggleAutoFocus={toggleAutoFocus}
        locale={locale}
      />
    </View>
    <View style={GlobalStyles.materialCard}>
      <Button
        onPress={() => shareApp()}
        title={I18n.t('shareApp', { locale })}
        color={Constants.PRIMARY_COLOR}
      />
    </View>
  </View>;

export default Options;
