import {
  branch,
  renderNothing,
  compose,
  renderComponent,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';

import Router from './router';
import { getLocales } from './helpers';
import I18n from './i18n';

const withReduxConnect = connect(state => ({
  isAppReady: state.init.ready,
  locale: state.settings.currentLocale,
}));

export default compose(
  withReduxConnect,
  branch(props => !props.isAppReady, renderComponent(renderNothing())),
  lifecycle({
    componentWillMount() {
      getLocales();
      I18n.locale = this.props.locale;
    },
  }),
)(Router);
