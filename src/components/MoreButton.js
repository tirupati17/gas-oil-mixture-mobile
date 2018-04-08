import React from 'react'
import TouchableItem from 'react-navigation/src/views/TouchableItem'
import Icon from 'react-native-vector-icons/MaterialIcons'

//helpers
import { Constants } from '../assets'

const MoreButton = ({
  onPress,
  iconName = 'expand-more',
  iconSize = 25,
  style,
}) =>
  <TouchableItem
    onPress={onPress}
    borderless
    style={{
      position: 'absolute',
      right: 2,
      top: 2,
      ...style,
    }}
  >
    <Icon name={iconName} color={Constants.BORDER} size={iconSize} />
  </TouchableItem>

export default MoreButton
