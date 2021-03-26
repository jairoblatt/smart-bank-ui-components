export const state = () => ({
  navItems: [
    {
      icon: 'mdi mdi-chart-line',
      routeName: 'Dashboard',
    },
    {
      icon: 'mdi mdi-currency-usd ',
      routeName: 'Payments',
    },
    {
      icon: 'mdi mdi-bell-outline ',
      routeName: 'Notification',
    },
    {
      icon: 'mdi mdi-chat-processing-outline ',
      routeName: 'Chat',
    },
    {
      icon: 'mdi mdi-map-marker ',
      routeName: 'Payments',
    },
    {
      icon: 'mdi mdi-tune ',
      routeName: 'Dashboard',
    },
    {
      icon: 'mdi mdi-code-tags ',
      routeName: 'Demo',
    },
  ],
  darkMode: false,
});

export const getters = {
  getNavItems: state => state.navItems,
  getDarkMode: state => state.darkMode,
};

export const mutations = {
  setDarkMode(state, payload) {
    return (state.darkMode = payload);
  },
};

export const actions = {
  darkModeHandler({ commit }, payload) {
    document.body.classList[payload ? 'add' : 'remove']('dark-mode');
    localStorage.setItem('@dark-mode', payload);
    commit('setDarkMode', payload);
  },

  loaderApp(_, payload) {
    const appLoader = document.querySelector('[data-app="loader"]');
    appLoader.style.display = payload ? 'flex' : 'none';
    window.onscroll = () => (payload ? window.scrollTo(0, 0) : {});
    document.body.classList[payload ? 'add' : 'remove']('overflow-hidden');
  },
};
