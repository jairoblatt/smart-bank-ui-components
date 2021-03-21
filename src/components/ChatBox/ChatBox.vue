<template>
  <div :class="classes">
    <div class="message__date">
      <p>{{ message.time }}</p>
    </div>

    <div class="message__box">
      <div class="box__content">
        <h2>{{ message.name }}</h2>
        <span>{{ message.content }}</span>
      </div>

      <div class="box__avatar">
        <s-avatar rounded>
          <img :src="message.avatarPath" :alt="`${message.name} chat Avatar`" />
        </s-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {},
    },
    avatar: Boolean,
    recipient: Boolean,
  },

  computed: {
    classes() {
      return {
        'chatbox-message': true,
        'bounce-enter-active': true,
        'chatbox-message--recipient': this.recipient,
      };
    },
  },
};
</script>

<style lang="scss" src="./ChatBox.scss" />
