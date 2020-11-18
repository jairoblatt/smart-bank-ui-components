<template>
  <div id="app">
    <loading ref="loading" />
    <component :is="layout" />
  </div>
</template>

<script>
import loading from "@/components/LoadingBar";

// Load layout components dynamically.
const requireContext = require.context("@/layouts", false, /.*\.vue$/);
const layouts = requireContext
  .keys()
  .map((file) => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component;
    return components;
  }, {});
export default {

  metaInfo() {
    return {
      titleTemplate: "%s - Smart Bank Template",
      title: this.currentPageName,
      htmlAttrs: {
        lang: "en",
        amp: true,
      },
    };
  },

  computed: {
    // Get name of current route
    currentPageName() {
      const { name } = this.$route;
      if (!name) return "Unknown";
      return name.replace(/[A-Z]/g, " $&").trim();
    },
  },

  components: {
    loading,
  },

  data: () => ({
    layout: null,
    defaultLayout: "default",
  }),

  mounted() {
    this.$loading = this.$refs.loading;
  },

  methods: {
  //  Set the application layout.
    setLayout({ layout }) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout;
      }
      this.layout = layouts[layout];
    },
  },
};
</script>
<style lang="scss" src="./assets/styles/section.scss"/>
