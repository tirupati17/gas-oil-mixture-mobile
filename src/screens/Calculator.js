import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TouchableItem from 'react-navigation/lib-rn/views/TouchableItem';

//components
import { Result, RatioInfo, ValueInput, ShitComponent } from '../components';

//helpers
import { GlobalStyles, Constants } from '../assets';
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
        <TouchableItem
          onPress={() => openUnitsOptions()}
          borderless
          style={{
            position: 'absolute',
            right: 2,
            top: 2,
          }}
        >
          <Icon name={'expand-more'} color={Constants.BORDER} size={25} />
        </TouchableItem>
      </View>
      <Result />
      <RatioInfo setOilValue={setOilValue} locale={locale} />
    </KeyboardAvoidingView>
  </ScrollView>;

export default Calculator;
