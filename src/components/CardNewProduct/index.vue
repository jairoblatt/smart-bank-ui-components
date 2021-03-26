<template>
  <SCard min-height="90" class="new-product">
    <div class="new-product__btn">
      <SButton
        :loading="spinner"
        color="#212121"
        icon
        outlined
        @click="spinner = !spinner"
      >
        <i class="mdi mdi-plus"></i>
      </SButton>
    </div>
    <div class="new-product__content">
      <h2>{{ $t('dashboard.openProduct') }}</h2>
      <h3>{{ $t('dashboard.cards') }}</h3>
    </div>
  </SCard>
</template>
<script>
import './CardNewProduct.scss';

export default {
  data: () => ({
    spinner: false,
  }),
};
</script>
