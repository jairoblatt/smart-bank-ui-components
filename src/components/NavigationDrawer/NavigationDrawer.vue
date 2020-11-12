<template>
  <span>
    <!-- App bar -->
    <div class="app-bar" v-if="activeAppBar">
      <button @click="toggleDrawer">
        <i class="mdi mdi-menu"></i>
      </button>
    </div>

    <!-- Navigation drawer -->
    <s-transition transition="slide-left">
      <aside v-show="drawer || !activeAppBar" :class="navigationContainerClasses">
        <div class="navigation-drawer-logo">S.</div>
        <div class="navigation-drawer-items">
          <ul>
            <li v-for="(item, index) in items" :key="index">
              <router-link
                tag="a"
                exact-active-class="active"
                :to="{ name: item.route }">
                <i :class="item.icon"></i>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="navigation-drawer-logout">
          <router-link tag="span" :to="{ name: 'Login' }"><i class="mdi mdi-logout"></i></router-link>
        </div>
      </aside>
    </s-transition>

  </span>
</template>
<script>
const items = [
  {
    icon: "mdi mdi-chart-line",
    route: "Dashboard",
  },
  {
    icon: "mdi mdi-currency-usd ",
    route: "Payments",
  },
  {
    icon: "mdi mdi-bell-outline ",
    route: "Notification",
  },
  {
    icon: "mdi mdi-chat-processing-outline ",
    route: "Chat",
  },
  {
    icon: "mdi mdi-map-marker ",
    route: "Payments",
  },
  {
    icon: "mdi mdi-tune ",
    route: "Dashboard",
  },
];


export default {
  data: () => ({
    items,
    drawer: false,
    window:{
      width: 0
    }
  }),

  computed: {
    navigationContainerClasses(){
      return {
        'navigation-drawer-container':true,
        'isOpen-drawer':this.activeAppBar,
      }
    },

    activeAppBar(){
      if(this.window.width > 952) return false;
      return true;
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
    $route: "toggleDrawer",
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