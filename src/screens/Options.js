import React from 'react';
import { View, Picker, Text } from 'react-native';

import { GlobalStyles } from '../assets';

const Options = ({ setUnit, selectedUnit }) =>
  <View style={GlobalStyles.flex1}>
    <View style={GlobalStyles.materialCard}>
      <Text style={GlobalStyles.subheading}>Units of measurement:</Text>
      <Picker
        mode={'dropdown'}
        selectedValue={selectedUnit}
        onValueChange={value => setUnit(value)}
      >
        <Picker.Item label="Liters" value="liters" />
        <Picker.Item label="US gallons" value="us" />
        <Picker.Item label="Imperial gallons" value="imperial" />
      </Picker>
    </View>
  </View>;

export default Options;
