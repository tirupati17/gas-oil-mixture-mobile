import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

//helpers
import { GlobalStyles, Constants } from '../assets'

const ValueInput = ({
  icon,
  label,
  isGasInput,
  inputWidth,
  unitLabel,
  textInputProps,
}) =>
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
      <Icon name={icon} color={Constants.PRIMARY_COLOR} size={30} />
      <Text style={[GlobalStyles.subheading, GlobalStyles.paddingLeftSml]}>
        {label}
      </Text>
    </View>
    <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
      {!isGasInput && <Text style={GlobalStyles.subheading}>1:</Text>}
      <TextInput
        keyboardType={'numeric'}
        style={[
          GlobalStyles.subheading,
          GlobalStyles.textCenterAligned,
          isGasInput && GlobalStyles.marginLeftSml,
          {
            maxWidth: 110,
            width: inputWidth,
          },
        ]}
        selectTextOnFocus
        selectionColor={Constants.PRIMARY_COLOR}
        underlineColorAndroid={Constants.PRIMARY_COLOR}
        {...textInputProps}
      />
      {isGasInput &&
        <Text style={GlobalStyles.subheading}>
          {unitLabel}
        </Text>}
    </View>
  </View>

export default ValueInput
