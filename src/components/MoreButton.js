import React from 'react';
import TouchableItem from 'react-navigation/src/views/TouchableItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

//helpers
import { Constants } from '../assets';

const MoreButton = ({ onPress }) =>
  <TouchableItem
    onPress={onPress}
    borderless
    style={{
      position: 'absolute',
      right: 2,
      top: 2,
    }}
  >
    <Icon name={'expand-more'} color={Constants.BORDER} size={25} />
  </TouchableItem>;

export default MoreButton;
