import { Linking } from 'react-native'

//helpers
import { Constants } from '../assets'

export default async () => {
  try {
    await Linking.openURL(Constants.GOOGLE_PLAY_LINK)
  } catch (e) {
    console.log(e)
  }
}
