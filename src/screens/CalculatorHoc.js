import { compose, withProps, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//componenets
import Calculator from './Calculator';

//helpers
import { Constants } from '../assets';
import { getResult, handleWidth } from '../helpers';
import { setGasValue, setOilValue } from '../store/actions';

const withReduxConnect = connect(
  state => ({
    gasValue: state.app.gasValue,
    oilValue: state.app.oilValue,
    result: state.app.result,
    measurementUnit: state.app.measurementUnit,
    autoFocusInput: state.settings.autoFocusInput,
    locale: state.settings.currentLocale,
  }),
  dispatch => bindActionCreators({ setGasValue, setOilValue }, dispatch),
);

const withAutoInputWidth = withProps(props => ({
  inputWidth: {
    gas: handleWidth(props.gasValue.length, props.numberWidth),
    oil: handleWidth(props.oilValue.length, props.numberWidth),
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

const measureNumberWidth = withState(
  'numberWidth',
  'setNumberWidth',
  Constants.INITIAL_NUMBER_WIDTH,
);

export default compose(
  withReduxConnect,
  measureNumberWidth,
  withAutoInputWidth,
  withFirstCalculation,
)(Calculator);
