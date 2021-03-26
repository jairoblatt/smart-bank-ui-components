<template>
  <s-card center>
    <div class="user-card-container">
      <div class="user-info">
        <s-avatar size="70">
          <img :src="user.avatarUrl" class="avatar" alt="User Avatar" />
        </s-avatar>

        <h2>{{ user.fullname }}</h2>
        <h3><span>$</span> {{ userBalance }}</h3>
      </div>

      <div class="user-revenues">
        <div class="revenue-item">
          <h3>{{ $t('dashboard.income') }}</h3>
          <h2>${{ income }}<i class="mdi mdi-arrow-up"></i></h2>
        </div>

        <hr class="divider" />

        <div class="revenue-item">
          <h3>{{ $t('dashboard.spending') }}</h3>
          <h2>${{ spending }} <i class="mdi mdi-arrow-down"></i></h2>
        </div>
      </div>

      <div class="user-credit-card">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="credit-card-item"
          :class="{ active: cardSelected.index == index }"
          @click="selectedCard({ card, index })"
        >
          <i class="mdi mdi-credit-card-outline"></i>

          <div class="credit-card-info">
            <h2>{{ card.name }}</h2>
            <h3>${{ card.value }}</h3>
          </div>

          <SButton text>
            <i class="mdi mdi-dots-vertical"></i>
          </SButton>
        </div>
      </div>
    </div>
  </s-card>
</template>
<script>
import './CardUserAccount.scss';

export default {
  data: () => ({
    cardSelected: 0,
    cards: [
      {
        name: 'Debit card 1',
        value: 23.64,
      },
      {
        name: 'Credit card 1',
        value: 22.43,
      },
      {
        name: 'Credit card 2',
        value: 23.03,
      },
    ],
  }),

  created() {
    this.cardSelected = {
      card: this.cards[1],
      index: 1,
    };
    this.selectedCard();
  },

  computed: {
    income() {
      return this.cardSelected ? this.cardSelected.card.value : '2.30';
    },

    spending() {
      return this.cardSelected
        ? (this.cardSelected.card.value * 0.4).toFixed(3)
        : '6.455';
    },

    userBalance() {
      return (this.income - this.spending).toFixed(3);
    },

    user() {
      return this.$store.getters['auth/getUser'];
    },
  },
  methods: {
    selectedCard({ card, index }) {
      this.cardSelected = { index, card };
      this.$emit('selected', card);
    },
  },
};
</script>
