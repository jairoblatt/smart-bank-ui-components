<template>
  <s-card class="clients__container">
    <div class="clients__searchbar">
      <SearchBar
        v-model="query"
        class="clients__searchbar-input"
        placeholder="Search inbox"
      />
      <hr class="divider" />
    </div>
    <div class="clients__avaliable" ref="clients">
      <STransition>
        <small v-if="clientFilter.length === 0" class="client__notfound">
          Not found
        </small>
      </STransition>
      <Client
        v-for="(client, index) in clientFilter"
        :key="`clients-${index}`"
        :client="client"
        :class="{ 'client__avaliable--active': client.id === currentClient.id }"
        @click.native="clickClient(client)"
        @hook:mounted="clientsWrapperOffset"
      />
    </div>
    <div class="clients__actions">
      <SButton block :loading="loading" @click="newChat">
        <i class="mdi mdi-plus"></i>New Chat
      </SButton>
    </div>
  </s-card>
</template>
<script>
import SearchBar from '../SearchBar';
import Client from './Client';

import './Clients.scss';

const CLIENTS_MOCK = [
  {
    id: 1,
    avatarUrl: 'https://randomuser.me/api/portraits/women/95.jpg',
    subject: 'Transfer',
    time: '30 min ago',
    messagePreview: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    type: 'danger',
    name: 'Angela Mayer',
    status: 'online',
    resolvedIssues: 0,
    tags: ['Mobile App', 'Transfers', 'Business'],
  },
  {
    id: 2,
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    subject: 'Mobile App',
    time: '3 min ago',
    messagePreview: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    type: 'secondary',
    name: 'James P. Bush',
    status: 'online',
    resolvedIssues: 23,
    tags: ['Mobile App', 'Debit Card', 'Account'],
  },
  {
    id: 3,
    avatarUrl: 'https://randomuser.me/api/portraits/women/88.jpg',
    subject: 'Account',
    time: '2 hour ago',
    messagePreview: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    type: 'success',
    name: 'Dawn J. Heath',
    status: 'offline',
    resolvedIssues: 3,
    tags: ['Account', 'Transfers', 'Debit Card'],
  },
  {
    id: 4,
    avatarUrl: 'https://randomuser.me/api/portraits/women/61.jpg',
    subject: 'Debit card',
    time: '11 min ago',
    messagePreview: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    type: 'info',
    name: 'Nettie F. Robicheaux',
    status: 'offline',
    resolvedIssues: 13,
    tags: ['Mobile App', 'Debit Card', 'Account'],
  },
];

export default {
  components: { SearchBar, Client },

  data: () => ({
    loading: false,
    query: '',
    clients: CLIENTS_MOCK,
    currentClient: {},
  }),

  computed: {
    clientFilter() {
      return (
        this.clients.filter(item => {
          return item.subject.toLowerCase().match(this.query.toLowerCase());
        }) || []
      );
    },
  },

  created() {
    this.clickClient(this.clients[0]);
  },

  methods: {
    newChat() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        const radomClient = this.clients[
          Math.round(Math.random() * this.clients.length)
        ];
        this.clients.push({
          ...radomClient,
          id: radomClient.id++,
        });
      }, 1500);
    },

    clickClient(client) {
      this.currentClient = client;
      this.$emit('click:client', client);
    },

    clientsWrapperOffset() {
      const clientsElement = this.$refs.clients;
      clientsElement.scrollTop = clientsElement.scrollHeight;
    },
  },
};
</script>
