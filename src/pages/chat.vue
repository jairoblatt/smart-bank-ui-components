<template>
  <div class="container-fluid chat-layout">
    <div class="clients-layout">
      <card-clients @client-selected="testing" />
    </div>

    <!-- Chat -->
    <div class="chat-container">
      <!-- Title and status -->

      <chat-head :name="clientSelected.name" status="Online" />

      <!-- Chat Box -->
      <div class="chat-Mensagens">
        <chat-box
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
          :recipient="message.recipient"
          :isTyping="msg.length > 0"
        />
      </div>

      <!-- Chat action -->
      <div class="chat-text-box" @keydown.enter="sendMsg">
        <s-card class="chat-client-info text-box">
          <!-- File input -->
          <div class="file">
            <label for="file-input">
              <i class="mdi mdi-attachment"></i>
            </label>
            <input type="file" id="file-input" />
          </div>

          <!-- Field message -->
          <s-text-field v-model="msg" />

          <!-- Chat Actions -->
          <div class="chat-client-actions">
            <ul>
              <li><i class="mdi mdi-emoticon"></i></li>
              <li @click="sendMsg"><i class="mdi mdi-send"></i></li>
            </ul>
          </div>
        </s-card>
      </div>
    </div>

    <!-- History -->
    <s-card class="client-history-container">
      <!-- Client Profile -->
      <client-profile />
      <!-- Line -->
      <hr />
      <!-- Client history -->
      <client-history />
    </s-card>
  </div>
</template>
<script>
import SearchBar from "@/components/SearchBar";
import CardClients from "@/components/CardClients";
import ChatBox from "@/components/ChatBox";
import ChatHead from "@/components/ChatHead";
import ClientProfile from "@/components/ClientProfile";
import ClientHistory from "@/components/ClientHistory";
export default {
  components: {
    SearchBar,
    CardClients,
    ChatBox,
    ChatHead,
    ClientProfile,
    ClientHistory,
  },

  data: () => ({
    msg: "",
    messages: [],
    clientSelected: "",
  }),

  methods: {
    // Factory for new message
    createMessage(name, avatarPath, content, recipient = false) {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}`;
      avatarPath = `https://randomuser.me/api/portraits/${avatarPath}`;
      this.messages.push({
        name,
        content,
        recipient,
        avatarPath,
        time,
      });
    },

    sendMsg() {
      const msgClone = this.msg.repeat(1);
      // Clear form
      this.msg = "";

      // send message
      this.createMessage("You", "men/33.jpg", msgClone, true);

      //  Clone the same message
      setTimeout(() => {
        this.createMessage("Lorem Ipsum", "women/95.jpg", msgClone);
      }, Math.random() * 3000);
    },

    testing(event) {
      this.clientSelected = event;
    },
  },
};
</script>

<style lang="scss" src="../assets/styles/chat.scss"/>