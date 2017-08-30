import React from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { Share } from 'react-native';
import { connectActionSheet } from 'react-native-action-sheet-fork';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//helpers
import { GlobalStyles } from '../assets';
import { getUnit } from '../helpers';
import I18n from '../i18n';

//components
import Result from './Result';

const withReduxConnect = connect(state => ({
  gasValue: state.app.gasValue,
  oilValue: state.app.oilValue,
  result: state.app.result,
  locale: state.settings.currentLocale,
}));

const withResultProps = withProps(({ result, locale }) => ({
  resultString: `${I18n.toNumber(result, {
    precision: 0,
    delimiter: ' ',
  })} ${I18n.t(getUnit().smallShort, { locale })}`,
}));

const withResultHandlers = withHandlers({
  openOptions: ({
    showActionSheetWithOptions,
    locale,
    result,
    resultString,
    oilValue,
    gasValue,
  }) => () => {
    const options = [I18n.t('share', { locale }), I18n.t('cancel', { locale })];
    const icons = [
      <Icon
        name={'share-variant'}
        size={20}
        style={GlobalStyles.optionsIcon}
      />,
      <Icon name={'close'} size={20} style={GlobalStyles.optionsIcon} />,
    ];
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        icons,
        cancelButtonIndex,
      },
      async buttonIndex => {
        if (buttonIndex === 0) {
          const resultRatio = `1:${oilValue}`;
          const resultGasValue = `${gasValue} ${I18n.t(getUnit().baseShort, {
            locale,
          })}`;
          try {
            const content = {
              message: I18n.t('shareResult', {
                resultString,
                resultRatio,
                resultGasValue,
                locale,
              }),
            };
            const options = {
              dialogTitle: I18n.t('shareTitle', { locale }),
            };
            await Share.share(content, options);
          } catch (e) {
            console.log(e);
          }
        }
      },
    );
  },
});

export default compose(
  withReduxConnect,
  connectActionSheet,
  withResultProps,
  withResultHandlers,
)(Result);
