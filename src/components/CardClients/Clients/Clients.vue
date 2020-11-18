<template>
  <div class="client bounce-enter-active" @click="$emit('click')">
    
    <div class="client-info">
      <div class="avatar">
        <s-avatar rounded size="30">
          <img :src="client.avatar" alt="" />
        </s-avatar>
      </div>
      <div class="chip">
        <s-chip small :type="client.type">{{ client.subject }}</s-chip>
      </div>
      <small>{{ client.time }}</small>
    </div>
    
    <div class="client-last-message">
      <p>{{ client.messagePreview }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    client: [Object, Array],
  },
};
</script>
<style lang="scss" src="./Clients.scss"/>