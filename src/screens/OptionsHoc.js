import { compose, withHandlers } from 'recompose';
import { Share } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMeasurementUnit, setResult } from '../store/actions';

//components
import Options from './Options';

//helpers
import { getResult } from '../helpers';
import I18n from '../i18n';

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
  shareApp: () => async () => {
    try {
      const content = {
        message: I18n.t('shareMessage'),
      };
      const options = {
        dialogTitle: I18n.t('shareTitle'),
      };
      await Share.share(content, options);
    } catch (e) {
      console.log(e);
    }
  },
});

export default compose(withReduxConnect, withOptionsHandlers)(Options);
