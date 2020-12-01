<template>
  <div :class="classes" :style="styles">
    <loading ref="loading" />
    <slot />
  </div>
</template>
<script>
import Loading from "../../LoadingBar/index";
export default {
  name: "SCard",

  components: {
    Loading,
  },

  props: {
    loading: Boolean,
    center: Boolean,
    height: [String, Number],
    minHeight: [String, Number],
    maxHeight: [String, Number],
    width: [String, Number],
    minWidth: [String, Number],
    maxWidth: [String, Number],
  },

  watch: {
    loading() {
      const { loading } = this.$refs;
      if (this.loading) {
        loading.start();
        return;
      }
      loading.finish();
    },
  },

  computed: {
    classes() {
      return {
        "s-card": true,
        "s-card-center": this.center,
      };
    },
    styles() {
      return {
        minHeight: `${this.minHeight}px`,
        height: `${this.height}px`,
        maxHeight: `${this.maxHeight}px`,
        minWidth: `${this.minWidth}px`,
        width: `${this.width}px`,
        maxWidth: `${this.maxWidth}px`,
      };
    },
  },
};
</script>

<style lang="scss" src="./SCard.scss"></style>
