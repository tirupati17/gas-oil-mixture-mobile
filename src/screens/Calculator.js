import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';

//components
import { Result, RatioInfo, ValueInput } from '../components';

//helpers
import { GlobalStyles } from '../assets';
import { getUnit } from '../helpers';
import I18n from '../i18n';

let secondInput;

const Calculator = ({
  setGasValue,
  setOilValue,
  gasValue,
  oilValue,
  result,
  inputWidth,
  calculateResult,
  autoFocusInput,
  locale,
}) =>
  <ScrollView style={GlobalStyles.flex1} keyboardShouldPersistTaps={'handled'}>
    <KeyboardAvoidingView style={GlobalStyles.marginTopSml}>
      <View style={GlobalStyles.materialCard}>
        <ValueInput
          isGasInput
          icon={'local-gas-station'}
          label={I18n.t('amountOfFuel', { locale })}
          unitLabel={getUnit(locale).baseShort}
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
      </View>
      <Result result={result} locale={locale} />
      <RatioInfo setOilValue={setOilValue} locale={locale} />
    </KeyboardAvoidingView>
  </ScrollView>;

export default Calculator;
