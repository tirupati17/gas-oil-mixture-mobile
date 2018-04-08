import React from 'react'
import { View, Text } from 'react-native'
import TouchableItem from 'react-navigation/src/views/TouchableItem'
import Icon from 'react-native-vector-icons/MaterialIcons'

//helpers
import { Constants, GlobalStyles } from '../assets'
import I18 from '../i18n'

const RateApp = ({ rateApp, closeRate, isVisible, locale }) =>
  isVisible &&
  <View
    style={[
      GlobalStyles.paddingVerticalSml,
      GlobalStyles.paddingHorizontal,

      {
        backgroundColor: Constants.SECONDARY_COLOR,
      },
    ]}
  >
    <Text
      style={[
        GlobalStyles.subheading,
        GlobalStyles.marginBottom,
        { color: Constants.WHITE },
      ]}
    >
      {I18.t('doYouLikeApp', { locale })}
    </Text>
    <View style={[GlobalStyles.row, { alignSelf: 'flex-end' }]}>
      <View style={[GlobalStyles.materialCard, { padding: 0 }]}>
        <TouchableItem
          onPress={() => closeRate()}
          borderless
          style={[
            GlobalStyles.paddingHorizontal,
            GlobalStyles.paddingVerticalSml,
            GlobalStyles.flex1,
            GlobalStyles.verticalMiddleAligned,
          ]}
        >
          <Text style={[GlobalStyles.body2, GlobalStyles.textCenterAligned]}>
            {I18.t('no', { locale }).toUpperCase()}
          </Text>
        </TouchableItem>
      </View>

      <View style={[GlobalStyles.materialCard, { padding: 0 }]}>
        <TouchableItem
          onPress={() => rateApp()}
          borderless
          style={[
            GlobalStyles.paddingHorizontal,
            GlobalStyles.paddingVerticalSml,
            GlobalStyles.flex1,
            GlobalStyles.verticalMiddleAligned,
          ]}
        >
          <Text style={[GlobalStyles.body2, GlobalStyles.textCenterAligned]}>
            {I18.t('yes', { locale }).toUpperCase()}
          </Text>
        </TouchableItem>
      </View>

      <View style={[GlobalStyles.materialCard, { padding: 0 }]}>
        <TouchableItem
          onPress={() => rateApp()}
          borderless
          style={[
            GlobalStyles.paddingHorizontal,
            GlobalStyles.paddingVerticalSml,
          ]}
        >
          <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
            <Icon
              name={'star'}
              style={{
                fontSize: 25,
                color: Constants.PRIMARY_COLOR,
                paddingRight: 4,
              }}
            />
            <Text style={[GlobalStyles.body, GlobalStyles.textCenterAligned]}>
              {I18.t('rate', { locale }).toUpperCase()}
            </Text>
          </View>
        </TouchableItem>
      </View>
    </View>
  </View>

export default RateApp
