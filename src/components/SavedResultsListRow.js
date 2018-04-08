import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//helpers
import { GlobalStyles, Constants } from '../assets'
import { getUnit } from '../helpers'
import I18n from '../i18n'

// components
import TouchableItem from 'react-navigation/lib-rn/views/TouchableItem'

const SavedResultsListRow = ({ item, locale, openOptions }) => {
  return (
    <TouchableItem onLongPress={() => openOptions()}>
      <View>
        <Text
          style={[
            GlobalStyles.subheading,
            GlobalStyles.flex1,
            !item.desc && GlobalStyles.paddingBottomSml,
          ]}
        >
          {item.name}
        </Text>
        {!!item.desc &&
          <Text
            style={[
              GlobalStyles.body,
              GlobalStyles.flex1,
              GlobalStyles.paddingBottomSml,
            ]}
          >
            {item.desc}
          </Text>}
        <View style={[GlobalStyles.row, GlobalStyles.middleAligned]}>
          <Icon
            name={'format-color-fill'}
            color={Constants.PRIMARY_COLOR}
            size={25}
          />
          <Text style={[GlobalStyles.body, { marginLeft: 4 }]}>
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
            size={25}
            style={GlobalStyles.marginLeft}
          />
          <Text style={[GlobalStyles.body, { marginLeft: 4 }]}>
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
            size={25}
            style={GlobalStyles.marginLeft}
          />
          <Text style={[GlobalStyles.body, { marginLeft: 4 }]}>
            1:{item.oilValue}
          </Text>
        </View>
      </View>
    </TouchableItem>
  )
}

export default SavedResultsListRow
