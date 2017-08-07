import React from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Constants, GlobalStyles } from '../assets';
import { getUnit } from '../helpers';

let secondInput;

const Calculator = ({
  setGasValue,
  setOilValue,
  gasValue,
  oilValue,
  result,
  inputWidth,
  calculateResult,
  setAutoCalculate,
  toggleAutoCalc,
  autoCalc,
}) =>
  <View style={GlobalStyles.flex1}>
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
          <Text style={[GlobalStyles.subheading, GlobalStyles.paddingLeftSml]}>
            Amount of fuel:
          </Text>
        </View>
        <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
          <TextInput
            keyboardType={'numeric'}
            returnKeyType={'next'}
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
          <Icon name={'data-usage'} color={Constants.PRIMARY_COLOR} size={30} />
          <Text style={[GlobalStyles.subheading, GlobalStyles.paddingLeftSml]}>
            Oil mix ratio:
          </Text>
        </View>
        <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
          <Text style={GlobalStyles.subheading}>1:</Text>
          <TextInput
            keyboardType={'numeric'}
            ref={input => (secondInput = input)}
            returnKeyType={'done'}
            onSubmitEditing={() => calculateResult()}
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
      <Button
        title="Calculate"
        onPress={() => calculateResult()}
        color={Constants.PRIMARY_COLOR}
        disabled={!!autoCalc}
      />
      <View
        style={[
          GlobalStyles.row,
          GlobalStyles.middleAligned,
          GlobalStyles.marginTopSml,
        ]}
      >
        <Switch value={autoCalc} onValueChange={() => toggleAutoCalc()} />
        <Text style={GlobalStyles.body}>
          Turn {autoCalc ? 'OFF' : 'ON'} Auto calculation.
        </Text>
      </View>
    </View>
    <View style={[GlobalStyles.materialCard, GlobalStyles.centerAligned]}>
      <Text style={GlobalStyles.body}>You need add </Text>
      <Text style={GlobalStyles.title}>
        {`${result} ${getUnit().smallShort}`}
      </Text>
      <Text style={GlobalStyles.body}>of oil to gasoline.</Text>
    </View>
  </View>;

export default Calculator;
