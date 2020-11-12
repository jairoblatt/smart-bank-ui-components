<template>
  <s-card center >
    <div class="new-contact-card-container">
      <s-spinner :loading="loading" size="45">
        <div class="new-contact-icon">
          <s-button xLarge icon outlined @click="addNewContact">
            <i class="mdi mdi-plus"></i>
          </s-button>
        </div>
      </s-spinner>
    </div>
  </s-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    addNewContact() {
      this.loading = true;
      const that = this;
      setTimeout((_) => {
        that.loading = false;
        that.$emit("newContact");
      }, 1500);
    },
  },
};
</script>
<style lang="scss" src="./NewContactCard.scss"></style>