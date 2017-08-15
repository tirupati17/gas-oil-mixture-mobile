import { compose, withProps, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//componenets
import Calculator from './Calculator';

//helpers
import { Constants } from '../assets';
import { getResult } from '../helpers';
import { setGasValue, setOilValue } from '../store/actions';

const withReduxConnect = connect(
  state => ({
    gasValue: state.app.gasValue,
    oilValue: state.app.oilValue,
    result: state.app.result,
    measurementUnit: state.app.measurementUnit,
    autoFocusInput: state.settings.autoFocusInput,
  }),
  dispatch => bindActionCreators({ setGasValue, setOilValue }, dispatch),
);

const withAutoInputWidth = withProps(props => ({
  inputWidth: {
    gas: Constants.INITIAL_INPUT_WIDTH + props.gasValue.length * 10,
    oil: Constants.INITIAL_INPUT_WIDTH + props.oilValue.length * 10,
  },
}));

const withFirstCalculation = lifecycle({
  componentWillMount() {
    getResult();
  },
  componentWillReceiveProps() {
    getResult();
  },
});

export default compose(
  withReduxConnect,
  withAutoInputWidth,
  withFirstCalculation,
)(Calculator);
