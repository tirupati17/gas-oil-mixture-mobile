import React from 'react';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OptionsButton = ({ onPress }) =>
  <TouchableItem onPress={onPress} borderless>
    <Icon
      name={'more-vert'}
      size={25}
      style={{
        padding: 8,
        color: 'white',
      }}
    />
  </TouchableItem>;

export default OptionsButton;
