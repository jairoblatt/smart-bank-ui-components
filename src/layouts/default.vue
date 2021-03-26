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
    <Settings />
  </div>
</template>

<script>
export default {
  components: {
    NavigationDrawer: () => import('@/components/NavigationDrawer/index.vue'),
    Settings: () => import('@/components/Settings'),
  },
};
</script>
