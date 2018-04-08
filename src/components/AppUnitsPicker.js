import React from 'react'
import { Picker, View, Text } from 'react-native'

//helpers
import I18n from '../i18n'
import GlobalStyles from '../assets/GlobalStyles'

const AppUnitsPicker = ({ setUnit, selectedUnit, locale }) =>
  <View>
    <Text style={GlobalStyles.subheading}>
      {I18n.t('unitsOfMeasurement', { locale })}
    </Text>
    <Picker
      mode={'dropdown'}
      selectedValue={selectedUnit}
      onValueChange={value => setUnit(value)}
    >
      <Picker.Item label={I18n.t('litersUnit', { locale })} value="liters" />
      <Picker.Item label={I18n.t('usGallons', { locale })} value="us" />
      <Picker.Item
        label={I18n.t('imperialGallons', { locale })}
        value="imperial"
      />
    </Picker>
  </View>

export default AppUnitsPicker
