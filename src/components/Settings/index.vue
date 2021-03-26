<template>
  <modal name="settings" adaptive height="330px">
    <div class="settings__container container-fluid">
      <div class="settings__header">
        <div class="header-title">
          <h2>Settings</h2>
        </div>

        <div class="header-action">
          <SButton icon x-large text @click="$modal.hide('settings')">
            <i class="mdi mdi-close"></i
          ></SButton>
        </div>
      </div>
      <div class="settings__items">
        <div class="settings__item">
          <span>{{ $t('settings.darkMode') }}</span>
          <SwitchDarkMode />
        </div>
        <div class="settings__item">
          <span>{{ $t('settings.language') }}</span>
          <SelectLang />
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
import './Settings.scss';

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
