<template>
  <s-card class="chat-client-info client-info">
    <div class="chat-client-name">
      <h2>{{ name }}</h2>
      <div class="chat-client-status">
        <!-- Status -->
        <div></div>
        <p>{{ status }} Now</p>
      </div>
    </div>
    <div class="chat-client-actions">
      <ul>
        <li><i class="mdi mdi-phone"></i></li>
        <li><i class="mdi mdi-magnify"></i></li>
        <hr />
        <li><i class="mdi mdi-dots-vertical"></i></li>
      </ul>
    </div>
  </s-card>
</template>
<script>
export default {
  props: {
    name: String,
    status: String,
  },
};
</script>
<style lang="scss" src="./ChatHead.scss"/>