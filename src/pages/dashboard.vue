<template>
  <div class="layout-content-container">
    <div class="layout-aside">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <user-card :cards="userCards" @card-selected="cardSelected" />
          </div>
          <div class="col-12">
            <card-new-product @NewProduct="storageNewUserCard" />
          </div>
        </div>
      </div>
    </div>

    <div class="layout-section">
      <div class="container-fluid">
        <div class="row">
          <!-- Search bar-->
          <div class="col-sm-11 col-md-12 col-lg-6 mb-section">
            <search-bar />
          </div>
          <!-- Card credit status -->
          <div class="col-md-12 col-sm-12 mb-section">
            <card-debit
              :name="card.name"
              :balance="card.balance"
              :cashBack="card.cashBack"
              :rate="card.rate"
            />
          </div>
          <!-- EXPENSE CARD START -->
          <div class="col-md-12 col-sm-12 mb-section">
            <div class="col-12 section-title">
              <h2>Biggest expense</h2>
            </div>
            <s-card-group>
              <card-expense
                v-for="(content, index) in expenseCardContent"
                :key="index"
                :title="content.title"
                :description="content.description"
              />
            </s-card-group>
          </div>
          <!-- EXPENSE CARD END -->

          <!-- Menu TABS START -->
          <div class="col-12">
            <tabs />
          </div>
          <!-- Menu TABS end -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DefaultLayout from '../layouts/default';
import CardDebit from '@/components/CardDebit';
import CardExpense from '@/components/CardExpense';
import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import CardNewProduct from '@/components/CardNewProduct';
import Tabs from '@/components/Tabs';

import storageNewUser from '@/mixins/storageNewUser';
export default {
  mixins: [storageNewUser],
  components: {
    DefaultLayout,
    CardDebit,
    CardExpense,
    SearchBar,
    UserCard,
    CardNewProduct,
    Tabs,
  },

  data: () => ({
    expenseCardContent: [
      {
        title: 'Clothes and shoes',
        description: 'At least three times a month you go for clothes.',
      },
      {
        title: 'Transport',
        description: 'You after pay ground transportation.',
      },
      {
        title: 'Sporting goods',
        description: 'Soon your dumbbells will hava now here to go.',
      },
    ],
    card: {
      balance: 100,
      cashBack: 20,
      rate: -10,
    },
  }),

  methods: {
    cardSelected(event) {
      return (this.card = {
        name: event.name,
        balance: event.value,
        cashBack: +(Math.random() * (event.value * 2 - 0) + 0).toFixed(0),
        rate: (event.value / 2).toFixed(1),
      });
    },
  },
};
</script>
