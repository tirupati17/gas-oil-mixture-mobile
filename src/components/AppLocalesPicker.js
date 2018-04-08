import React from 'react'
import { Picker, View, Text } from 'react-native'

//helpers
import I18n from '../i18n'
import GlobalStyles from '../assets/GlobalStyles'

const AppLocalesPicker = ({ appLocales, locale, setLocale }) => {
  if (!!appLocales) {
    return (
      <View style={[GlobalStyles.paddingTop, GlobalStyles.borderTopLine]}>
        <Text style={GlobalStyles.subheading}>
          {I18n.t('language', { locale })}
        </Text>
        <Picker
          mode={'dropdown'}
          selectedValue={locale}
          onValueChange={value => setLocale(value)}
        >
          {appLocales.map(item =>
            <Picker.Item
              label={I18n.t(item, { locale })}
              value={item}
              key={item + Math.random()}
            />,
          )}
        </Picker>
      </View>
    )
  } else {
    return null
  }
}

export default AppLocalesPicker
