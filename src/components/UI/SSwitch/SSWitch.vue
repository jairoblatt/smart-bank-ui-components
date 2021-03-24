<template>
  <div :class="classes">
    <input
      v-bind="$attrs"
      v-model="$attrs.value"
      id="switch"
      type="checkbox"
      @input="inputHandler"
    />
    <label for="switch" class="s-switch-inner"></label>
  </div>
</template>
<script>
import './SSwitch.scss';

export default {
  name: 'SSwitch',

  props: {
    small: Boolean,
    large: Boolean,
  },

  computed: {
    classes() {
      return {
        's-switch': true,
        's-switch__size--small': this.small,
        's-switch__size--large': this.large,
      };
    },
  },

  methods: {
    inputHandler(e) {
      return this.$emit('input', e.target.checked);
    },
  },
};
</script>
