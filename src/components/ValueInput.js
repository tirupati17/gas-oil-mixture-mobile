import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//helpers
import { GlobalStyles, Constants } from '../assets';

const ValueInput = ({
  icon,
  label,
  autoFocusInput,
  isGasInput,
  onSubmitEditing,
  inputWidth,
  onChangeText,
  value,
  unitLabel,
  returnKeyType,
  textInputRef,
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
        ref={textInputRef}
        keyboardType={'numeric'}
        returnKeyType={returnKeyType}
        maxLength={10}
        autoFocus={isGasInput ? autoFocusInput : false}
        onSubmitEditing={onSubmitEditing}
        style={[
          GlobalStyles.subheading,
          GlobalStyles.textCenterAligned,
          isGasInput && GlobalStyles.marginLeftSml,
          {
            maxWidth: 110,
            width: inputWidth,
          },
        ]}
        onChangeText={onChangeText}
        value={value}
        selectTextOnFocus
        selectionColor={Constants.PRIMARY_COLOR}
        underlineColorAndroid={Constants.PRIMARY_COLOR}
      />
      {isGasInput &&
        <Text style={GlobalStyles.subheading}>
          {unitLabel}
        </Text>}
    </View>
  </View>;

export default ValueInput;
