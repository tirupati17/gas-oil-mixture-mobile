import React from 'react'
import { Text } from 'react-native'

//helpers
import { GlobalStyles } from '../assets'

// Can't measure width of number on various devices
// Must render it and measure onLayout
// Then set width coefficient in input Width calculation
// So shitty CODE :(

const ShitComponent = props =>
  <Text
    style={[
      GlobalStyles.subheading,
      {
        position: 'absolute',
        opacity: 0,
      },
    ]}
    {...props}
  >
    3
  </Text>

export default ShitComponent
