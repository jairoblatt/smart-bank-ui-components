import Vue from 'vue';
import store from '@/store';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {},
});

/**
 * @param {String} locale
 */
export async function loadMessages(locale) {
  if (
    !Object.keys(i18n.getLocaleMessage(locale)).length &&
    typeof locale === 'string'
  ) {
    const messages = await import(
      /* webpackChunkName: '' */ `@/lang/${locale}`
    );
    i18n.setLocaleMessage(locale, messages);
    store.dispatch('lang/setLocale', { locale });
  }

  if (i18n.locale !== locale) {
    i18n.locale = locale;
  }
}

(async function() {
  await loadMessages(store.getters['lang/locale']);
})();

export default i18n;
