<template>
  <span :class="messageContainerClasses">
    
    <div class="message-date">
      <p>{{ message.time }}</p>
    </div>

    <div class="message-box-container">
      <div class="message-box">
        <h2>{{message.name}}</h2>
        <span>{{ message.content }}</span>
      </div>

      <div :class="avatarClasses">
        <s-avatar rounded >
          <img :src="message.avatarPath" alt="" />
        </s-avatar>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    message: Object,
    avatar: Boolean,
    recipient: Boolean
  },
  computed:{
    messageContainerClasses(){
      return {
        'message-container': true,
        'bounce-enter-active': true,
        'recipient-container': this.recipient
      }
    },

    avatarClasses(){
      return {
        'message-avatar': true,
      }
    },

    testing(){
      return this.message.content.length
    }
  }
};
</script>

<style lang="scss" src="./ChatBox.scss"/>