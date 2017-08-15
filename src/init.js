import { branch, renderNothing, compose, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import Router from './router';

const withReduxConnect = connect(state => ({
  isAppReady: state.init.ready,
}));

export default compose(
  withReduxConnect,
  branch(props => !props.isAppReady, renderComponent(renderNothing())),
)(Router);
