

function page(path) {
    return () => import( /* webpackChunkName: '' */  `@/pages/${path}`).then(m => m.default || m)
  }

  export default [
    {
      path: '/',
      component: page('Home.vue'),
      name: 'Home',
    },
    {
      path: '/login',
      component: page('auth/Login.vue'),
      name: 'Login',
    },
    {
      path: '/recovery',
      component: page('auth/PasswordRecovery.vue'),
      name: 'PasswordRecovery',
    },
    {
      path: '/dashboard',
      component: page('dashboard.vue'),
      name: 'Dashboard',
    },
    {
      path: '/dashboard/notification',
      component: page('notification.vue'),
      name: 'Notification',
    },
    {
      path: '/dashboard/payments',
      component: page('payments.vue'),
      name: 'Payments',
    },
    {
      path: '/dashboard/chat',
      component: page('chat.vue'),
      name: 'Chat',
    },
    {
      path: '/dashboard/demo',
      component: page('demo.vue'),
      name: 'Demo',
    },

  
    // {
    //     path: '*',
    //     component: page('errors/404')
    // }
  
  ]