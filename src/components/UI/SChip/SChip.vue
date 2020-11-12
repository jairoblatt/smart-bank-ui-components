<template>
  <span :class="[classes, chipType]" @click="$emit('click')">
    <i v-if="icon" :class="icon"></i>
    <slot />
  </span>
</template>

<script>
export default {
  name: "SChip",

  props: {
    icon: {
      type: [String, Boolean],
      default: false,
    },

    type: {
      type: String,
      default: "primary",
    },

    large: Boolean,
    small: Boolean,
  },

  computed: {
    classes() {
      return {
        "s-chip": true,
        "s-chip-small": this.small,
        "s-chip-large": this.large,
      };
    },

    chipType() {
      return `s-chip-${this.type.toLowerCase()}`;
    },
  },
};
</script>

<style lang="scss" src="./SChip.scss"></style>