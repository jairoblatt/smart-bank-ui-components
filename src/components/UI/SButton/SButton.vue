<template>
  <button
    v-bind="$attrs"
    :class="classes"
    :style="styles"
    :disabled="disabled"
    @click="clickHandler"
  >
    <s-transition>
      <s-spinner :size="spinnerSize" :loading="spinnerLoading">
        <span>
          <slot />
        </span>
      </s-spinner>
    </s-transition>
  </button>
</template>

<script>
import './SButton.scss';

export default {
  name: 'SButton',

  props: {
    color: String,
    block: Boolean,
    outlined: Boolean,
    text: Boolean,
    loading: Boolean,
    icon: Boolean,
    to: Object,
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean,
    disabled: Boolean,
    bg: String,
  },

  computed: {
    classes() {
      return {
        's-btn': true,
        's-btn__size--default': true,
        's-btn--text': this.text,
        's-btn--block': this.block,
        's-btn--outlined': this.outlined,
        's-btn--icon': this.icon,
        's-btn__size--small': this.small,
        's-btn__size--large': this.large,
        's-btn__size--xsmall': this.xSmall,
        's-btn__size--xlarge': this.xLarge,
      };
    },

    styles() {
      return {
        color: this.color,
        backgroundColor: this.bg,
      };
    },

    spinnerSize() {
      if (this.large) return 31;
      if (this.xLarge) return 32;
      if (this.small) return 23;
      if (this.xSmall) return 21;
      return 30;
    },

    spinnerLoading() {
      return this.loading && !this.disabled;
    },
  },

  methods: {
    clickHandler() {
      if (this.to && Object.keys(this.to).length) {
        this.$router.push(this.to);
      }
      this.$emit('click');
    },
  },
};
</script>
