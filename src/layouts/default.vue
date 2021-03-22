<template>
  <div class="layout-container container-fluid">
    <div class="layout-navigation-drawer">
      <navigation-drawer />
    </div>
    <div class="layout-content-page">
      <div class="row">
        <child />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer';
export default {
  components: {
    NavigationDrawer,
  },
};
</script>
