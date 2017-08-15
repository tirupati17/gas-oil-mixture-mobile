import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//components
import { Result, RatioInfo } from '../components';

//helpers
import { Constants, GlobalStyles } from '../assets';
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
}) =>
  <ScrollView style={GlobalStyles.flex1} keyboardShouldPersistTaps={'handled'}>
    <KeyboardAvoidingView style={GlobalStyles.marginTopSml}>
      <View style={GlobalStyles.materialCard}>
        <View
          style={[
            GlobalStyles.row,
            GlobalStyles.spaceBetween,
            GlobalStyles.borderBottomLine,
            GlobalStyles.marginBottom,
            GlobalStyles.paddingBottomSml,
          ]}
        >
          <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
            <Icon
              name={'local-gas-station'}
              color={Constants.PRIMARY_COLOR}
              size={30}
            />
            <Text
              style={[GlobalStyles.subheading, GlobalStyles.paddingLeftSml]}
            >
              {I18n.t('amountOfFuel')}
            </Text>
          </View>
          <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
            <TextInput
              keyboardType={'numeric'}
              returnKeyType={'next'}
              maxLength={10}
              autoFocus={autoFocusInput}
              onSubmitEditing={() => secondInput.focus()}
              style={[
                GlobalStyles.subheading,
                GlobalStyles.textCenterAligned,
                GlobalStyles.marginLeftSml,
                {
                  maxWidth: 110,
                  width: inputWidth.gas,
                },
              ]}
              onChangeText={gas => setGasValue(gas)}
              value={gasValue}
              selectTextOnFocus
              selectionColor={Constants.PRIMARY_COLOR}
              underlineColorAndroid={Constants.PRIMARY_COLOR}
            />
            <Text style={GlobalStyles.subheading}>
              {getUnit().baseShort}
            </Text>
          </View>
        </View>
        <View
          style={[
            GlobalStyles.row,
            GlobalStyles.spaceBetween,
            GlobalStyles.borderBottomLine,
            GlobalStyles.marginBottom,
            GlobalStyles.paddingBottomSml,
          ]}
        >
          <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
            <Icon
              name={'data-usage'}
              color={Constants.PRIMARY_COLOR}
              size={30}
            />
            <Text
              style={[GlobalStyles.subheading, GlobalStyles.paddingLeftSml]}
            >
              {I18n.t('oilMixRatio')}
            </Text>
          </View>
          <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
            <Text style={GlobalStyles.subheading}>1:</Text>
            <TextInput
              keyboardType={'numeric'}
              ref={input => (secondInput = input)}
              returnKeyType={'done'}
              maxLength={5}
              style={[
                GlobalStyles.subheading,
                GlobalStyles.textCenterAligned,
                {
                  maxWidth: 110,
                  width: inputWidth.oil,
                },
              ]}
              onChangeText={oil => setOilValue(oil)}
              value={oilValue}
              selectTextOnFocus
              selectionColor={Constants.PRIMARY_COLOR}
              underlineColorAndroid={Constants.PRIMARY_COLOR}
            />
          </View>
        </View>
      </View>
      <Result result={result} />
      <RatioInfo setOilValue={setOilValue} />
    </KeyboardAvoidingView>
  </ScrollView>;

export default Calculator;
