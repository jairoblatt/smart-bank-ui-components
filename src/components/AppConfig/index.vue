<template>
  <modal name="app-config">
    <div class="app-config__container container-fluid">
      <div class="app-config__action">
        <SButton icon x-large text @click="$modal.hide('app-config')">
          <i class="mdi mdi-close"></i
        ></SButton>
      </div>
      <div class="app-config__items">
        <div class="app-config__item">
          <span>{{ $t('settings.darkMode') }}</span>
          <SwitchDarkMode />
        </div>
        <div class="app-config__item">
          <span>{{ $t('settings.language') }}</span>
          <SelectLang />
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
import './AppConfig.scss';

export default {
  data: () => ({
    options: [
      {
        name: 'Testando',
      },
      {
        name: 'Testando 2',
      },
    ],
  }),

  components: {
    SwitchDarkMode: () => import('@/components/SwitchDarkMode'),
    SelectLang: () => import('@/components/SelectLang'),
  },
};
</script>
