import Cookies from 'js-cookie';
import locales from '@/lang';

export const state = {
  locale: Cookies.get('language') || 'en',
  locales,
};

export const getters = {
  locale: state => state.locale,
  locales: state => state.locales,
};

export const mutations = {
  SET_LOCALE(state, { locale }) {
    state.locale = locale;
  },
};

export const actions = {
  setLocale({ commit }, { locale }) {
    commit('SET_LOCALE', { locale });

    Cookies.set('language', locale, { expires: 365 });
  },
};
