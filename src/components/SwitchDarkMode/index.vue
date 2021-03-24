<template>
  <div class="switch-dark-mode__container">
    <img
      :src="resolveIcon({ name: 'sun', status: !darkModeHandler })"
      alt="Sun dark mode"
    />
    <SSwitch v-model="darkModeHandler" />
    <img
      :src="resolveIcon({ name: 'moon', status: darkModeHandler })"
      alt="Moon dark mode"
    />
  </div>
</template>
<script>
import './SwitchDarkMode.scss';

export default {
  computed: {
    darkModeHandler: {
      set(payload) {
        this.$store.dispatch('navigation/darkModeHandler', payload);
      },
      get() {
        return this.$store.getters['navigation/getDarkMode'];
      },
    },
  },

  methods: {
    resolveIcon({ name, status }) {
      const iconName = status ? `${name}-active.svg` : `${name}.svg`;
      return require('@/assets/images/' + iconName);
    },
  },
};
</script>
