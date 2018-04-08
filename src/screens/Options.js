import React from 'react'
import { View, ScrollView, Button, KeyboardAvoidingView } from 'react-native'

//helpers
import { GlobalStyles, Constants } from '../assets'
import I18n from '../i18n'

//components
import {
  AutoFocusSwitch,
  AppLocalesPicker,
  AppUnitsPicker,
  Contact,
} from '../components'

const Options = ({
  setUnit,
  selectedUnit,
  shareApp,
  rateApp,
  autoFocusInput,
  toggleAutoFocus,
  appLocales,
  setLocale,
  locale,
}) =>
  <ScrollView style={GlobalStyles.flex1}>
    <KeyboardAvoidingView style={GlobalStyles.marginTopSml}>
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
        <View style={GlobalStyles.paddingTop}>
          <Button
            onPress={() => rateApp()}
            title={I18n.t('rateApp', { locale })}
            color={Constants.PRIMARY_COLOR}
          />
        </View>
      </View>
      <Contact locale={locale} />
    </KeyboardAvoidingView>
  </ScrollView>

export default Options
