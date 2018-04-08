import { compose, branch, renderComponent, renderNothing } from 'recompose'
import { connect } from 'react-redux'

//components
import SavedResultsList from './SavedResultsList'

const withReduxConnect = connect(state => ({
  savedResults: state.app.savedResults,
  locale: state.settings.currentLocale,
}))

const withEmptySavedResults = branch(
  props => props.savedResults.length === 0,
  renderComponent(renderNothing()),
)

export default compose(withReduxConnect, withEmptySavedResults)(
  SavedResultsList,
)
