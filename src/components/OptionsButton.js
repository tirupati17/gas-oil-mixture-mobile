import React from 'react'
import TouchableItem from 'react-navigation/src/views/TouchableItem'
import Icon from 'react-native-vector-icons/MaterialIcons'

const OptionsButton = ({ onPress, iconName = 'more-vert' }) =>
  <TouchableItem
    onPress={onPress}
    borderless
    style={{
      marginRight: 8,
    }}
  >
    <Icon
      name={iconName}
      size={25}
      style={{
        padding: 8,
        color: 'white',
      }}
    />
  </TouchableItem>

export default OptionsButton
