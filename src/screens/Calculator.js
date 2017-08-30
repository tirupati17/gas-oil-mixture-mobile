import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';

//components
import {
  Result,
  RatioInfo,
  ValueInput,
  ShitComponent,
  MoreButton,
} from '../components';

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
  inputWidth,
  calculateResult,
  autoFocusInput,
  locale,
  setNumberWidth,
  openUnitsOptions,
}) =>
  <ScrollView style={GlobalStyles.flex1} keyboardShouldPersistTaps={'handled'}>
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
        <ShitComponent
          onLayout={item => setNumberWidth(item.nativeEvent.layout.width)}
        />
        <MoreButton onPress={() => openUnitsOptions()} />
      </View>
      <Result />
      <RatioInfo setOilValue={setOilValue} locale={locale} />
    </KeyboardAvoidingView>
  </ScrollView>;

export default Calculator;
