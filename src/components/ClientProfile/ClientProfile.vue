<template>
  <div class="client__profile-container">
    <s-avatar v-if="avatarUrl" size="120">
      <img :src="avatarUrl" alt="Client Avatar" />
    </s-avatar>
    <h2>{{ name }}</h2>
    <h3>{{ description }}</h3>
    <hr class="divider" />
  </div>
</template>
<script>
import './ClientProfile.scss';

export default {
  props: {
    name: {
      type: String,
    },

    description: {
      type: String,
      default: 'No description',
    },

    avatarUrl: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>
