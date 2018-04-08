import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withNavigation } from 'react-navigation'
import { connectActionSheet } from 'react-native-action-sheet-fork'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

//helpers
import { GlobalStyles } from '../assets'
import { deleteResult } from '../store/actions'
import I18n from '../i18n'

//components
import SavedResultsListRow from './SavedResultsListRow'

//constants
const ICON_STYLE = GlobalStyles.optionsIcon
const ICON_SIZE = 20

const withReduxConnect = connect(
  state => ({
    locale: state.settings.currentLocale,
  }),
  dispatch => bindActionCreators({ deleteResult }, dispatch),
)

const withRowHandlers = withHandlers({
  openOptions: ({
    showActionSheetWithOptions,
    locale,
    deleteResult,
    item,
    navigation,
  }) => () => {
    const options = [
      I18n.t('edit', { locale }),
      I18n.t('delete', { locale }),
      I18n.t('cancel', { locale }),
    ]
    const icons = [
      <Icon name={'pencil'} size={ICON_SIZE} style={ICON_STYLE} />,
      <Icon name={'delete-forever'} size={ICON_SIZE} style={ICON_STYLE} />,
      <Icon name={'close'} size={ICON_SIZE} style={ICON_STYLE} />,
    ]
    const cancelButtonIndex = 2
    showActionSheetWithOptions(
      {
        options,
        icons,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          navigation.navigate('ResultDetail', {
            item,
            isEditable: true,
          })
        }
        if (buttonIndex === 1) {
          deleteResult({ id: item.id })
        }
      },
    )
  },
})

export default compose(
  withReduxConnect,
  withNavigation,
  connectActionSheet,
  withRowHandlers,
)(SavedResultsListRow)
