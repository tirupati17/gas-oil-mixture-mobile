import React from 'react'
import { ScrollView, KeyboardAvoidingView, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextField } from 'react-native-material-textfield'

//helpers
import { GlobalStyles, Constants } from '../assets'
import I18n from '../i18n'
import { getUnit } from '../helpers'

let descInput

const resetError = (value, callback) => {
  if (value !== 0) {
    callback
  }
}

const SaveResult = ({
  item,
  name,
  setName,
  locale,
  desc,
  setDesc,
  error,
  setError,
}) =>
  <ScrollView style={GlobalStyles.flex1} keyboardShouldPersistTaps={'handled'}>
    <KeyboardAvoidingView style={GlobalStyles.marginTopSml}>
      <View style={GlobalStyles.materialCard}>
        <TextField
          autoFocus
          labelHeight={16}
          autoCapitalize={'sentences'}
          label={I18n.t('title', { locale })}
          style={GlobalStyles.subheading}
          containerStyle={{ paddingTop: 0 }}
          tintColor={Constants.PRIMARY_COLOR}
          value={name}
          onChangeText={value => {
            setName(value)
            resetError(value, setError(''))
          }}
          onSubmitEditing={() => descInput.focus()}
          returnKeyType={'next'}
          error={error}
        />
        <TextField
          multiline
          labelHeight={16}
          autoCapitalize={'sentences'}
          tintColor={Constants.PRIMARY_COLOR}
          label={I18n.t('description', { locale })}
          ref={input => (descInput = input)}
          style={GlobalStyles.body}
          value={desc}
          onChangeText={value => setDesc(value)}
        />
      </View>
      <View style={GlobalStyles.materialCard}>
        <View style={[GlobalStyles.row, GlobalStyles.centerAligned]}>
          <Icon
            name={'format-color-fill'}
            color={Constants.PRIMARY_COLOR}
            size={30}
          />
          <Text style={[GlobalStyles.subheading, { marginLeft: 4 }]}>
            {`${I18n.toNumber(item.result, {
              precision: 0,
              delimiter: ' ',
            })} ${I18n.t(getUnit(item.measurementUnit).smallShort, {
              locale,
            })}`}
          </Text>
          <Icon
            name={'gas-station'}
            color={Constants.PRIMARY_COLOR}
            size={30}
            style={GlobalStyles.marginLeft}
          />
          <Text style={[GlobalStyles.subheading, { marginLeft: 4 }]}>
            {`${item.gasValue} ${I18n.t(
              getUnit(item.measurementUnit).baseShort,
              {
                locale,
              },
            )}`}
          </Text>
          <Icon
            name={'chart-donut'}
            color={Constants.PRIMARY_COLOR}
            size={30}
            style={GlobalStyles.marginLeft}
          />
          <Text style={[GlobalStyles.subheading, { marginLeft: 4 }]}>
            1:{item.oilValue}
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  </ScrollView>

export default SaveResult
