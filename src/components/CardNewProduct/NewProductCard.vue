<template>
  <s-card min-height="90">
    <div class="new-product">
      <div class="new-product-icon">
        <s-button color="#212121" :loading="spinner" icon @click="addNewCard()">
          <i class="mdi mdi-plus"></i>
        </s-button>
      </div>
      <div class="new-produtc-content">
        <h2>Open a new product</h2>
        <h3>Debit cards, deposits</h3>
      </div>
    </div>
  </s-card>
</template>
<script>
// Only false data for testing *Remove this*
import { userCards } from "@/demos/user";
export default {
  data: () => ({
    spinner: false,
  }),
  methods: {
    addNewCard() {
      this.spinner = true;
      setTimeout((_) => {
        this.$emit("NewProduct", {
          name: `Debit card ${userCards.length + 1}`,
          value: (Math.random() * (23 - 10) + 20).toFixed(3),
        });
        this.spinner = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" src="./NewProductCard.scss"></style>