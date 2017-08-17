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
          unitLabel={getUnit().baseShort}
          onSubmitEditing={() => secondInput.focus()}
          inputWidth={inputWidth.gas}
          onChangeText={gas => setGasValue(gas)}
          value={gasValue}
          returnKeyType={'next'}
        />
        <ValueInput
          icon={'data-usage'}
          label={I18n.t('oilMixRatio', { locale })}
          inputWidth={inputWidth.oil}
          onChangeText={oil => setOilValue(oil)}
          value={oilValue}
          returnKeyType={'done'}
          textInputRef={input => (secondInput = input)}
        />
      </View>
      <Result result={result} locale={locale} />
      <RatioInfo setOilValue={setOilValue} locale={locale} />
    </KeyboardAvoidingView>
  </ScrollView>;

export default Calculator;
