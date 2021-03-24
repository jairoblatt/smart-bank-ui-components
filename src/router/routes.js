function page(path) {
  return () =>
    import(/* webpackChunkName: '' */ `@/pages/${path}`).then(
      m => m.default || m
    );
}

export default [
  {
    path: '/',
    component: page('Home.vue'),
    name: 'Home',
  },
  {
    path: '/login',
    component: page('Auth/Login/index.vue'),
    name: 'Login',
  },
  {
    path: '/recovery',
    component: page('Auth/PasswordRecovery/index.vue'),
    name: 'PasswordRecovery',
  },
  {
    path: '/dashboard',
    component: page('dashboard.vue'),
    name: 'Dashboard',
  },
  {
    path: '/notification',
    component: page('notification.vue'),
    name: 'Notification',
  },
  {
    path: '/payments',
    component: page('payments.vue'),
    name: 'Payments',
  },
  {
    path: '/chat',
    component: page('chat.vue'),
    name: 'Chat',
  },
  {
    path: '/demo',
    component: page('demo.vue'),
    name: 'Demo',
  },

  // {
  //     path: '*',
  //     component: page('errors/404')
  // }
];
