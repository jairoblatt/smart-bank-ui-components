<template>
  <div class="client__container bounce-enter-active">
    <div class="client__info">
      <div class="client__info-avatar">
        <s-avatar rounded size="30">
          <img :src="client.avatarUrl" alt="User avatar" />
        </s-avatar>
      </div>
      <div class="chip">
        <s-chip small :type="client.type">{{ client.subject }}</s-chip>
      </div>
      <small>{{ client.time }}</small>
    </div>

    <div class="client__last-message">
      <p>{{ client.messagePreview }}</p>
    </div>
  </div>
</template>
<script>
import './Client.scss';

export default {
  props: {
    client: [Object, Array],
  },
};
</script>
