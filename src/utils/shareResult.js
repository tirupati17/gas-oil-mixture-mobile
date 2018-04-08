import { Share } from 'react-native'

//helpers
import I18n from '../i18n'
import { getUnit } from '../helpers'

export default async ({ oilValue, gasValue, resultString, locale }) => {
  const resultRatio = `1:${oilValue}`
  const resultGasValue = `${gasValue} ${I18n.t(getUnit().baseShort, {
    locale,
  })}`
  try {
    const content = {
      message: I18n.t('shareResult', {
        resultString,
        resultRatio,
        resultGasValue,
        locale,
      }),
    }
    const options = {
      dialogTitle: I18n.t('shareTitle', { locale }),
    }
    await Share.share(content, options)
  } catch (e) {
    console.log(e)
  }
}
