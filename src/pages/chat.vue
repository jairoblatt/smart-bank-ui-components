<template>
  <div class="container-fluid chat-layout">
    <div class="clients-layout">
      <Clients @click:client="clientHandler" />
    </div>

    <div class="chat-container">
      <ChatHead
        :user-name="clientSelected.name"
        :status="clientSelected.status"
      />
      <div class="chatbox-message__container" ref="chatbox">
        <ChatBox
          v-for="(message, index) in messages"
          :key="`chat-box-message-${index}`"
          :message="message"
          @hook:mounted="chatBoxOffset"
        />
      </div>
      <ChatType @send="createNewMessage" />
    </div>

    <s-card class="client-history__container">
      <ClientProfile
        :name="clientSelected.name"
        :description="clientSelected.messagePreview"
        :avatar-url="clientSelected.avatarUrl"
      />
      <hr class="divider" />
      <ClientHistory
        :resolved-issues="clientSelected.resolvedIssues"
        :tags="clientSelected.tags"
      />
    </s-card>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar';
import Clients from '@/components/Clients';
import ClientProfile from '@/components/ClientProfile';
import ClientHistory from '@/components/ClientHistory';
import ChatBox from '@/components/ChatBox';
import ChatHead from '@/components/ChatHead';
import ChatType from '@/components/ChatType';

import '@/assets/styles/chat.scss';

export default {
  name: 'PageChat',

  components: {
    SearchBar,
    Clients,
    ChatBox,
    ChatHead,
    ChatType,
    ClientProfile,
    ClientHistory,
  },

  data: () => ({
    messages: [],
    clientSelected: {},
  }),

  methods: {
    newMessage({ name, avatarUrl, message, recipient, image }) {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}`;

      this.messages.push({
        name,
        message,
        recipient,
        avatarUrl,
        time,
        image,
      });
    },

    createNewMessage({ message, image }) {
      this.newMessage({
        message,
        image,
        name: 'You',
        avatarUrl: 'https://randomuser.me/api/portraits/men/99.jpg',
        recipient: true,
      });

      setTimeout(() => {
        const { name, avatarUrl, status } = this.clientSelected;
        const userChat = {
          name,
          avatarUrl,
          message,
          recipient: false,
          image,
        };
        if (status === 'online') return this.newMessage(userChat);

        this.newMessage({
          ...userChat,
          message: 'Sorry, I am not online at the moment 😕',
        });
      }, Math.random() * 3000);
    },

    chatBoxOffset() {
      const chatboxElement = this.$refs.chatbox;
      chatboxElement.scrollTop = chatboxElement.scrollHeight;
    },

    clientHandler(client) {
      this.clientSelected = client;
      this.messages = [];
    },
  },
};
</script>
