import store from '../store/store';
import { setLocales } from '../store/actions';
import { getLanguages } from 'react-native-i18n';

export default async () => {
  try {
    const allLocales = await getLanguages();
    const reduxStore = store.getState().settings;
    if (reduxStore.appLocales.length !== allLocales.length) {
      store.dispatch(setLocales(allLocales));
    }
  } catch (e) {
    console.log(e);
  }
};
