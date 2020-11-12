<template>
  <s-transition>
    <s-card :loading="loading" v-if="contact" >
      <div class="contact-card-container">
        <!-- close/delete user -->
        <div class="contact-card-action">
          <button @click="$emit('delete-favorite', contact)">
            <i class="mdi mdi-close"></i>
          </button>
        </div>

        <!-- User name and infos -->
        <div class="contact-card-body">
          <s-avatar size="58">
            <img :src="contact.avatarPath" alt=""/>
          </s-avatar>
          <h2>{{ contact.name }}</h2>
        </div>
      </div>
    </s-card>
  </s-transition>
</template>

<script>
export default {
  props: {
    contact: [Array, Object],
    loading: Boolean
  },
};
</script>

<style lang="scss" src="./ContactCard.scss"></style>