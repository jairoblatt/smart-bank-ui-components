import Vue from 'vue';
import routes from './routes';
import Router from 'vue-router';

Vue.use(Router);
const router = createRouter();

function createRouter() {
  const router = new Router({
    scrollBehavior,
    mode: 'history',
    routes,
  });
  router.beforeEach(beforeEach);
  router.afterEach(afterEach);
  return router;
}

function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition;
  return { x: 0, y: 0 };
}

async function beforeEach(to, from, next) {
  let components = [];
  try {
    components = await resolveComponents(
      router.getMatchedComponents({ ...to })
    );
  } catch (error) {
    if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
      window.location.reload(true);
      return;
    }
  }
  if (components.length === 0) return next();
  const { setLayout, $loading } = appChildren();
  setLayout(components[0] || '');
  if (components[components.length - 1].loading !== false) {
    router.app.$nextTick(() => $loading.start());
  }
  next();
}

async function afterEach(to, from, next) {
  await router.app.$nextTick();
  const { $loading } = appChildren();
  $loading.finish();

  setTimeout(disableAppLoader, 500);
}

function resolveComponents(components) {
  return Promise.all(
    components.map(component => {
      return typeof component === 'function' ? component() : component;
    })
  );
}

function appChildren() {
  return router.app.$children[0];
}

function disableAppLoader() {
  const appLoader = document.querySelector('[data-app="loader"]');
  if (appLoader) appLoader.style.display = 'none';
}

export default router;
