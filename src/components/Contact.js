import React from 'react'
import { Text, View, Linking } from 'react-native'

//helpers
import { GlobalStyles, Constants } from '../assets'
import I18n from '../i18n'

const contactMe = async () => {
  try {
    await Linking.openURL(`mailto:${Constants.DEVELOPER_EMAIL}`)
  } catch (e) {
    console.log(e)
  }
}

const textLink = [
  { fontSize: 14, textDecorationLine: 'underline' },
  GlobalStyles.link,
]

const Contact = ({ locale }) =>
  <View style={[GlobalStyles.materialCard]}>
    <Text selectable style={GlobalStyles.body}>
      {I18n.t('contactMe', { locale })}
      <Text style={textLink} onPress={() => contactMe()}>
        {Constants.DEVELOPER_EMAIL}
      </Text>
    </Text>
  </View>

export default Contact
