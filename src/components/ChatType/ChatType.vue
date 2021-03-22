<template>
  <div class="chat-type">
    <!-- Emoji panel -->
    <STransition>
      <div v-show="emojiPickerIsOpen" class="chatbox__emoji">
        <VEmojiPicker @select="selectEmoji" />
      </div>
    </STransition>

    <s-card
      class="chat-type__container"
      @keydown.enter.native="sendMessageHandler"
    >
      <div class="chat-type__loading">
        <Loading ref="loading" />
      </div>

      <!-- File Input -->
      <div class="chat-type__file">
        <label for="file-input" class="action__item">
          <i class="mdi mdi-attachment"></i>
        </label>
        <input @change="uploadFile" type="file" id="file-input" />
      </div>
      <STransition>
        <SChip v-show="file.name" class="chat-type__file-preview">
          {{ file.name }}
          <SButton x-small text @click="clearFileInput">
            <i class="mdi mdi-close"></i>
          </SButton>
        </SChip>
      </STransition>

      <!-- Text field -->
      <STextField
        v-model="message"
        placeholder="Type a message..."
        class="chat-type__text-field"
        @focus="emojiPickerIsOpen = false"
      />

      <!-- Send/Emoji Actions -->
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
  </div>
</template>
<script>
import Loading from '@/components/LoadingBar';
import { VEmojiPicker } from 'v-emoji-picker';

import './ChatType.scss';

export default {
  components: {
    Loading,
    VEmojiPicker,
  },

  data: () => ({
    message: '',
    emojiPickerIsOpen: false,
    file: {
      name: '',
      base64: '',
    },
  }),

  methods: {
    sendMessageHandler() {
      const message = this.message;
      const fileBase64 = this.file.base64;
      if (message || fileBase64) {
        this.$emit('send', { message, image: fileBase64 });
        Object.assign(this.$data, this.$options.data());
      }
    },

    selectEmoji(emoji) {
      this.message = this.message + emoji.data;
    },

    async uploadFile(e) {
      this.loadingBarHandler('start');
      try {
        const file = e.target.files[0];
        this.file.base64 = await this.generateFileBase64(file);
        this.file.name = this.generateFileName(file.name);
        this.loadingBarHandler('finish');
      } catch {
        this.loadingBarHandler('fail');
      }
    },

    generateFileName(currentFileName) {
      if (currentFileName.length <= 10) return currentFileName;
      const fileExtensionIndex = currentFileName.lastIndexOf('.');
      const fileExtension = currentFileName.slice(fileExtensionIndex);
      return currentFileName.slice(0, 6).concat('..', fileExtension);
    },

    generateFileBase64(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = error => reject(error);
      });
    },

    clearFileInput() {
      this.file = {
        name: '',
        base64: '',
      };
    },

    loadingBarHandler(status) {
      this.$refs.loading[status]();
    },
  },
};
</script>
