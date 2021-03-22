<template>
  <s-card
    class="chat-type__container"
    @keydown.enter.native="sendMessageHandler"
  >
    <div class="chatbox__emoji">
      <STransition>
        <VEmojiPicker v-show="emojiPickerIsOpen" @select="selectEmoji" />
      </STransition>
    </div>
    <div class="chat-type__file">
      <label for="file-input" class="action__item">
        <i class="mdi mdi-attachment"></i>
      </label>
      <input @change="minifyFileName" type="file" id="file-input" />
    </div>
    <STransition>
      <SChip v-show="filePreviewName" v-text="filePreviewName" />
    </STransition>
    <STextField
      v-model="message"
      placeholder="Type a message..."
      class="chat-type__text-field"
      @focus="emojiPickerIsOpen = false"
    />
    <div class="chat-type__actions">
      <ul>
        <li
          class="action__item"
          :class="{ 'chat-type__actions--active': emojiPickerIsOpen }"
        >
          <s-button text @click="emojiPickerIsOpen = !emojiPickerIsOpen"
            ><i class="mdi mdi-emoticon"></i
          ></s-button>
        </li>
        <li class="action__item">
          <s-button text @click="sendMessageHandler">
            <i class="mdi mdi-send"></i>
          </s-button>
        </li>
      </ul>
    </div>
  </s-card>
</template>
<script>
import './ChatType.scss';
import { VEmojiPicker } from 'v-emoji-picker';

export default {
  components: {
    VEmojiPicker,
  },

  data: () => ({
    message: '',
    emojiPickerIsOpen: false,
    filePreviewName: '',
  }),

  methods: {
    sendMessageHandler() {
      if (this.message.length > 0) {
        this.$emit('message:send', this.message);
        Object.assign(this.$data, this.$options.data());
      }
    },

    selectEmoji(emoji) {
      this.message = this.message + emoji.data;
    },

    minifyFileName(e) {
      const { name } = e.target.files[0];
      if (typeof name === 'string') {
        if (name.length <= 10) return (this.filePreviewName = name);
        this.filePreviewName = name
          .slice(0, 6)
          .concat(`.`, name.substr(name.length - 4));
      }
    },
  },
};
</script>
