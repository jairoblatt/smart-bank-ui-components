<template>
  <div class="layout-container container-fluid">

    <!-- Navigation drawer -->
    <div class="layout-navigation-drawer">
      <navigation-drawer />
    </div>

    <!-- Content -->
    <div class="layout-content-page">
      <div class="row">
        <child />
      </div>
    </div>
    
  </div>
</template>

<script>

import NavigationDrawer from "@/components/NavigationDrawer";
export default {

  components: {
    NavigationDrawer,
  },

};
</script>
