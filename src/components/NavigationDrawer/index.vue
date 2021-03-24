<template>
  <span>
    <!-- App bar -->
    <div class="app-bar" v-if="activeAppBar">
      <button @click="toggleDrawer">
        <i class="mdi mdi-menu"></i>
      </button>
    </div>

    <!-- Navigation drawer -->
    <STransition transition="slide-left">
      <aside
        v-show="drawer || !activeAppBar"
        :class="navigationContainerClasses"
      >
        <div class="navigation-drawer-logo">S.</div>
        <div class="navigation-drawer-items">
          <ul>
            <li
              v-for="(item, index) in navItems"
              :key="`navigation-drawer-item-${index}`"
            >
              <RouterLink
                :to="{ name: item.routeName }"
                tag="a"
                exact-active-class="active"
              >
                <i :class="item.icon"></i>
              </RouterLink>
            </li>
            <li @click="$modal.show('app-config')">
              <i class="mdi mdi-cog"></i>
            </li>
          </ul>
        </div>
        <div class="navigation-drawer-logout">
          <router-link tag="span" :to="{ name: 'Login' }"
            ><i class="mdi mdi-logout"></i
          ></router-link>
        </div>
      </aside>
    </STransition>
  </span>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    appConfig: false,
    window: {
      width: 0,
    },
  }),

  computed: {
    navigationContainerClasses() {
      return {
        'navigation-drawer-container': true,
        'isOpen-drawer': this.activeAppBar,
      };
    },

    activeAppBar() {
      return this.window.width <= 952;
    },

    navItems() {
      return this.$store.getters['navigation/getNavItems'] || [];
    },
  },

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  watch: {
    $route: 'toggleDrawer',
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },

    handleResize() {
      this.window.width = window.innerWidth;
    },
  },
};
</script>
<style lang="scss" src="./NavigationDrawer.scss"></style>
