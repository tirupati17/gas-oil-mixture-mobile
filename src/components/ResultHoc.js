import React from 'react'
import { compose, withHandlers, withProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connectActionSheet } from 'react-native-action-sheet-fork'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//helpers
import { GlobalStyles } from '../assets'
import { getUnit, isAndroid } from '../helpers'
import I18n from '../i18n'
import { shareResult } from '../utils'
import { saveResult } from '../store/actions'

//components
import Result from './Result'

//constants
const ICON_STYLE = GlobalStyles.optionsIcon
const ICON_SIZE = 20

const withReduxConnect = connect(
  state => ({
    gasValue: state.app.gasValue,
    oilValue: state.app.oilValue,
    measurementUnit: state.app.measurementUnit,
    result: state.app.result,
    locale: state.settings.currentLocale,
  }),
  dispatch => bindActionCreators({ saveResult }, dispatch),
)

const withResultProps = withProps(({ result, locale }) => {
const unit = getUnit().smallShort
  return {
    resultString: `${I18n.toNumber(result, {
      precision: unit === 'ml' ? 0 : 1,
      delimiter: ' ',
    })} ${I18n.t(getUnit().smallShort, { locale })}`,
  }
})

const withResultHandlers = withHandlers({
  openOptions: ({
    showActionSheetWithOptions,
    locale,
    result,
    resultString,
    oilValue,
    gasValue,
    measurementUnit,
    navigation,
  }) => () => {
    let options = [
      I18n.t('save', { locale }),
      I18n.t('share', { locale }),
      I18n.t('cancel', { locale }),
    ]

    let icons = [
      <Icon name={'content-save'} size={ICON_SIZE} style={ICON_STYLE} />,
      <Icon name={'share-variant'} size={ICON_SIZE} style={ICON_STYLE} />,
      <Icon name={'close'} size={ICON_SIZE} style={ICON_STYLE} />,
    ]

    let cancelButtonIndex = 2

    if (isAndroid()) {
      options.pop()
      icons.pop()
      cancelButtonIndex = null
    }

    showActionSheetWithOptions(
      {
        options,
        icons,
        cancelButtonIndex,
      },
      async buttonIndex => {
        if (buttonIndex === 0) {
          navigation.navigate('ResultDetail', {
            item: {
              oilValue,
              gasValue,
              result,
              measurementUnit,
            },
            isEditable: false,
          })
        }
        if (buttonIndex === 1) {
          shareResult({ oilValue, gasValue, locale, resultString })
        }
      },
    )
  },
})

export default compose(
  withReduxConnect,
  withNavigation,
  connectActionSheet,
  withResultProps,
  withResultHandlers,
)(Result)
