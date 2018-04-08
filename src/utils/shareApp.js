import { Share } from 'react-native'

//helpers
import I18n from '../i18n'

export default async ({ locale }) => {
  try {
    const content = {
      message: I18n.t('shareMessage', { locale }),
    }
    const options = {
      dialogTitle: I18n.t('shareTitle', { locale }),
    }
    await Share.share(content, options)
  } catch (e) {
    console.log(e)
  }
}
