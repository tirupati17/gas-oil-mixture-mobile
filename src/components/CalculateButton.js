import React from 'react';
import { View, Button, Switch, Text } from 'react-native';

//helpers
import { GlobalStyles, Constants } from '../assets';

const CalculateButton = ({ onPress, autoCalc, toggleAutoCalc }) =>
  <View>
    <Button
      title="Calculate"
      onPress={onPress}
      color={Constants.PRIMARY_COLOR}
      disabled={!!autoCalc}
    />
    <View
      style={[
        GlobalStyles.row,
        GlobalStyles.middleAligned,
        GlobalStyles.marginTopSml,
      ]}
    >
      <Switch value={autoCalc} onValueChange={toggleAutoCalc} />
      <Text style={GlobalStyles.body}>
        Turn {autoCalc ? 'OFF' : 'ON'} Auto calculation.
      </Text>
    </View>
  </View>;

export default CalculateButton;
