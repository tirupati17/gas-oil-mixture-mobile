import React from 'react'
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native'

//components
import {
  Result,
  RatioInfo,
  ValueInput,
  ShitComponent,
  MoreButton,
  SavedResultsList,
  RateApp,
} from '../components'

//helpers
import { GlobalStyles, Constants } from '../assets'
import { getUnitLocale, getUnit } from '../helpers'
import I18n from '../i18n'

let secondInput

const Calculator = ({
  setGasValue,
  setOilValue,
  gasValue,
  oilValue,
  inputWidth,
  calculateResult,
  autoFocusInput,
  locale,
  setNumberWidth,
  openUnitsOptions,
  measurementUnit,
}) =>
  <View style={GlobalStyles.flex1}>
    <ScrollView
      style={GlobalStyles.flex1}
      keyboardShouldPersistTaps={'handled'}
    >
      <KeyboardAvoidingView style={GlobalStyles.marginTopSml}>
        <View style={GlobalStyles.materialCard}>
          <ValueInput
            isGasInput
            icon={'local-gas-station'}
            label={I18n.t('amountOfFuel', { locale })}
            unitLabel={I18n.t(getUnit().baseShort, { locale })}
            inputWidth={inputWidth.gas}
            textInputProps={{
              returnKeyType: 'next',
              value: gasValue,
              onChangeText: gas => setGasValue(gas),
              onSubmitEditing: () => secondInput.focus(),
              autoFocus: autoFocusInput,
            }}
          />
          <ValueInput
            icon={'data-usage'}
            label={I18n.t('oilMixRatio', { locale })}
            inputWidth={inputWidth.oil}
            textInputProps={{
              returnKeyType: 'done',
              value: oilValue,
              onChangeText: oil => setOilValue(oil),
              ref: input => (secondInput = input),
            }}
          />
          <Text
            onPress={() => openUnitsOptions()}
            style={[GlobalStyles.body2, { color: Constants.SECONDARY_COLOR }]}
          >
            {`${I18n.t('unit', { locale })} ${I18n.t(
              getUnitLocale(measurementUnit),
              { locale },
            )}`}
          </Text>
          <ShitComponent
            onLayout={item => setNumberWidth(item.nativeEvent.layout.width)}
          />
        </View>
        <Result />
        <SavedResultsList />
        <RatioInfo setOilValue={setOilValue} locale={locale} />
      </KeyboardAvoidingView>
    </ScrollView>
    <RateApp />
  </View>

export default Calculator
