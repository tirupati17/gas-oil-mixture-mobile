import store from '../store/store'
import { setLocales } from '../store/actions'
import I18n from '../i18n'

export default async () => {
  const allLocales = Object.keys(I18n.translations)
  const reduxStore = store.getState().settings
  if (reduxStore.appLocales.length !== allLocales.length) {
    store.dispatch(setLocales(allLocales))
  }
}
