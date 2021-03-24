<template>
  <div class="select-lang__container">
    <SSelect :items="locales" :selected="localeSelected" @select="setLocale" />
  </div>
</template>
<script>
import { loadMessages } from '@/plugins/i18n';
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    lang: [],
  }),

  computed: {
    ...mapGetters({ locale: 'lang/locale', locales: 'lang/locales' }),
    localeSelected() {
      const currentLocale = this.$i18n.locale;
      return this.locales.find(({ code }) => code === currentLocale);
    },
  },

  methods: {
    ...mapActions({
      loaderApp: 'navigation/loaderApp',
      setNewLocale: 'lang/setLocale',
    }),

    setLocale({ code }) {
      if (this.$i18n.locale !== code) {
        this.loaderApp(true);
        this.setNewLocale({ locale: code });
        loadMessages(code);
        setTimeout(() => this.loaderApp(false), 500);
      }
    },
  },
};
</script>
