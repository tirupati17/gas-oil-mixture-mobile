import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMeasurementUnit, setResult } from '../store/actions';

//components
import Options from './Options';

//helpers
import { getResult } from '../helpers';

const withReduxConnect = connect(
  state => ({
    selectedUnit: state.measurementUnit,
  }),
  dispatch => bindActionCreators({ setMeasurementUnit, setResult }, dispatch),
);

const withOptionsHandlers = withHandlers({
  setUnit: ({ setMeasurementUnit, setResult }) => value => {
    setMeasurementUnit(value);
    setResult(getResult());
  },
});

export default compose(withReduxConnect, withOptionsHandlers)(Options);
