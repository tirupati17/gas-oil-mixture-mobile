import {
  compose,
  withProps,
  withHandlers,
  lifecycle,
  shouldUpdate,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//componenets
import Calculator from './Calculator';

//helpers
import { Constants } from '../assets';
import { getResult } from '../helpers';
import {
  setGasValue,
  setOilValue,
  setResult,
  setAutoCalc,
} from '../store/actions';

const withReduxConnect = connect(
  state => ({
    calcValues: state.calcValues,
    gasValue: state.gasValue,
    oilValue: state.oilValue,
    result: state.result,
    measurementUnit: state.measurementUnit,
    autoCalc: state.autoCalc,
  }),
  dispatch =>
    bindActionCreators(
      { setGasValue, setOilValue, setResult, setAutoCalc },
      dispatch,
    ),
);

const withAutoInputWidth = withProps(props => ({
  inputWidth: {
    gas: Constants.INITIAL_INPUT_WIDTH + props.gasValue.length * 10,
    oil: Constants.INITIAL_INPUT_WIDTH + props.oilValue.length * 10,
  },
}));

const withCalculation = withHandlers({
  calculateResult: ({ setResult }) => () => {
    setResult(getResult());
  },
  toggleAutoCalc: ({ setAutoCalc, autoCalc }) => () => {
    setAutoCalc(!autoCalc);
  },
});

const withFirstCalculation = lifecycle({
  componentWillMount() {
    this.props.calculateResult();
  },
});

const withAutoUpdate = shouldUpdate((props, nextProps) => {
  if (nextProps.autoCalc) {
    props.setResult(getResult());
  }
  return true;
});

export default compose(
  withReduxConnect,
  withCalculation,
  withAutoInputWidth,
  withFirstCalculation,
  withAutoUpdate,
)(Calculator);
