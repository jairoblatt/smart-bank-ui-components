<template>
  <s-card center>
    <div class="user-card-container">

      <div class="user-info">
        <s-avatar size="70">
          <img
            :src="avatarPath"
            class="avatar"
            alt="User Avatar"
          />
        </s-avatar>

        <h2>Sophia Reyes</h2>
        <h3><span>$</span> {{ userBalance }}</h3>
      </div>

      <div class="user-revenues">
        <div class="revenue-item">
          <h3>Income</h3>
          <h2>${{ income }}<i class="mdi mdi-arrow-up"></i></h2>
        </div>

        <hr class="divider"></hr>

        <div class="revenue-item">
          <h3>Spending</h3>
          <h2>${{ spending }} <i class="mdi mdi-arrow-down"></i></h2>
        </div>
      </div>

      <div class="user-credit-card">
        <div
          :class="`credit-card-item  ${ cardSelected.index == index ? 'active' : '' }`"
          v-for="(card, index) in cards"
          :key="index"
          @click="selectedCard(card,index)"
        >
          <i class="mdi mdi-credit-card-outline"></i>

          <div class="credit-card-info">
            <h2>{{ card.name }}</h2>
            <h3>${{ card.value }}</h3>
          </div>
        
          <s-button text>
            <i class="mdi mdi-dots-vertical"></i>
          </s-button>
        </div>
      </div>
    </div>
  </s-card>
</template>
<script>

export default {
  data: () => ({
    cardSelected: 0,
    avatarPath: "https://randomuser.me/api/portraits/women/49.jpg",
  }),

  props: {
    cards: [Object, Array],
  },

  created() {
    this.cardSelected = {
      card: this.cards[1],
      index: 1,
    };
  },

  computed: {
    income() {
      if (this.cardSelected) return this.cardSelected.card.value;
      else return "2.300";
    },

    spending() {
      if (this.cardSelected)
        return (this.cardSelected.card.value * 0.4).toFixed(3);
      else return "6.455";
    },

    userBalance() {
      return (this.income - this.spending).toFixed(3);
    },
  },
  methods: {
    selectedCard(data, index) {
      this.cardSelected = {
        index: index,
        card: data,
      };
      this.$emit("card-selected", data);
    },
  },
};
</script>

<style lang="scss" src="./UserCard.scss"></style>