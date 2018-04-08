import {
  compose,
  withProps,
  withState,
  lifecycle,
  withHandlers,
} from 'recompose'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//components
import ResultDetail from './ResultDetail'

//helpers
import { saveResult, editSavedResult } from '../store/actions'
import I18n from '../i18n'

const withReduxConnect = connect(
  state => ({
    locale: state.settings.currentLocale,
  }),
  dispatch => bindActionCreators({ saveResult, editSavedResult }, dispatch),
)

const withStates = compose(
  withState('name', 'setName', props => props.item.name || ''),
  withState('desc', 'setDesc', props => props.item.desc || ''),
  withState('error', 'setError', ''),
)

const withResultDetailProps = withProps(props => ({
  item: props.navigation.state.params.item,
  isEditable: props.navigation.state.params.isEditable,
}))

const withLifeCycle = lifecycle({
  componentDidMount() {
    const { navigation, submitForm } = this.props
    navigation.setParams({ handleSave: submitForm })
  },
})

const withResultDetailHandlers = withHandlers({
  submitForm: ({
    saveResult,
    item,
    isEditable,
    name,
    desc,
    navigation,
    setError,
    editSavedResult,
    locale,
  }) => () => {
    if (name.length === 0) {
      setError(I18n.t('cantBeEmpty', { locale }))
    } else {
      if (isEditable) {
        editSavedResult({ ...item, name, desc })
      } else {
        saveResult({ ...item, name, desc })
      }
      navigation.goBack()
    }
  },
})

export default compose(
  withReduxConnect,
  withNavigation,
  withResultDetailProps,
  withStates,
  withResultDetailHandlers,
  withLifeCycle,
)(ResultDetail)
