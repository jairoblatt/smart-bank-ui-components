<template>
  <div :class="classes">
    <label for="">{{ label }}</label>
    <input
      v-model="$attrs.value"
      v-bind="$attrs"
      :type="type"
      @focus="$emit('focus')"
      @input="$emit('input', $event.target.value)"
    />
    <transition mode="out-in" name="slide">
      <small v-show="isError">{{ isError }}</small>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'STextField',

  props: {
    label: [String, Number],

    type: {
      type: String,
      default: 'text',
    },

    outlined: Boolean,

    errors: {
      type: [String, Array],
      default: '',
    },
  },

  computed: {
    classes() {
      return {
        's-text-field': true,
        's-text-field-outlined': this.outlined,
        error: this.isError,
      };
    },

    isError() {
      const errors = this.errors;
      if (!errors.length > 0) return '';
      else if (typeof errors == 'object') return errors[0];
      else if (typeof errors == 'string') return errors;
    },
  },
};
</script>
<style lang="scss" src="./STextField.scss"></style>
