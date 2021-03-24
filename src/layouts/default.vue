<template>
  <div class="layout-container container-fluid">
    <div class="layout-navigation-drawer">
      <NavigationDrawer />
    </div>
    <div class="layout-content-page">
      <div class="row">
        <Child />
      </div>
    </div>
    <AppConfig />
  </div>
</template>

<script>
export default {
  components: {
    NavigationDrawer: () => import('@/components/NavigationDrawer/index.vue'),
    AppConfig: () => import('@/components/AppConfig'),
  },
};
</script>
