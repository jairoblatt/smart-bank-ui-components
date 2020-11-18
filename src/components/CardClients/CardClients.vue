<template>
  <s-card class="clients-container ">
    <!-- Search bar -->
    <div class="clients-search-bar">
      <search-bar v-model="query" />
      <hr />
    </div>

    <!-- Client chat card -->
    <div class="clients-avaliable">
      <!-- Not found alert-->
      <s-transition>
        <small
          class="d-flex justify-content-center"
          v-if="clientsFilter.length === 0"
          >Not found</small
        >
      </s-transition>
      <!-- clients history -->
      <clients
        v-for="(client, index) in clientsFilter"
        :key="index"
        :client="client"
        @click="clientSelected(client)"
      />
    </div>

    <!-- New chat button -->
    <div class="clients-action">
      <s-button block @click="addNewClient" :loading="loading"
        ><i class="mdi mdi-check"></i>
        New Chat
      </s-button>
    </div>
  </s-card>
</template>
<script>
import SearchBar from "../SearchBar";
import Clients from "./Clients";
export default {
  components: { SearchBar, Clients },
  data: () => ({
    loading: false,
    query: "",
    clients: [
      {
        avatar: "https://randomuser.me/api/portraits/women/95.jpg",
        subject: "Transfer",
        time: "30 min ago",
        messagePreview: "aliquam dolor eaque aspernatur recusandae a?",
        type: "danger",
        name: "Angela Mayer",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        subject: "Mobile App",
        time: "3 min ago",
        messagePreview: "Lorem, ipsum dolor sit amet consectetur adipisicing",
        type: "secondary",
        name: "Lorem Ipsum",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/88.jpg",
        subject: "Account",
        time: "2 hour ago",
        messagePreview: "dipisicing elit. Deleniti non quas...",
        type: "success",
        name: "Lorem Ipsum",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/61.jpg",
        subject: "Debit card",
        time: "11 min ago",
        messagePreview: "mollitia laborum atque tenetur culpa...",
        type: "info",
        name: "Lorem Ipsum",
      },
    ],
  }),

  computed: {
    clientsFilter() {
      let query = this.query;
      return this.clients.filter((item) => {
        return item.subject.toLowerCase().match(query.toLowerCase());
      });
    },
  },

  created(){
    this.clientSelected(this.clients[0])
  },

  methods: {
    addNewClient() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        const sortClient = ({ random, round }) =>
          round(random() * this.clients.length);
        this.clients.push({
          ...this.clients[sortClient(Math)],
        });
      }, 1500);
    },
    clientSelected(client){
      return this.$emit('client-selected', client)
    }
  },
};
</script>
<style lang="scss" src="./CardClients.scss"/>