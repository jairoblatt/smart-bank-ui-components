<template>
  <div class="layout-content-container">
    <div class="layout-aside">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <CardUserAccount @selected="cardSelected" />
          </div>
          <div class="col-12">
            <CardNewProduct />
          </div>
        </div>
      </div>
    </div>

    <div class="layout-section">
      <div class="container-fluid">
        <div class="row">
          <div class=" col-sm-11 col-lg-6">
            <CardManage />
          </div>
          <div class="col-md-12 col-sm-12 mb-section">
            <CardBalance
              :name="card.name"
              :balance="card.balance"
              :cash-back="card.cashBack"
              :rate="card.rate"
            />
          </div>
          <div class="col-md-12 col-sm-12 mb-section">
            <div class="col-12 section-title">
              <h2>Biggest expense</h2>
            </div>
            <SCardGroup>
              <CardExpense
                v-for="(content, index) in expenseCardContent"
                :key="index"
                :title="content.title"
                :description="content.description"
              />
            </SCardGroup>
          </div>
          <div class="col-12">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardExpense from '@/components/CardExpense';
import Tabs from '@/components/Tabs';
import storageNewUser from '@/mixins/storageNewUser';

export default {
  mixins: [storageNewUser],

  components: {
    CardBalance: () => import('@/components/CardBalance/index.vue'),
    CardNewProduct: () => import('@/components/CardNewProduct/index.vue'),
    CardManage: () => import('@/components/CardManage/index.vue'),
    CardUserAccount: () => import('@/components/CardUserAccount/index.vue'),
    CardExpense,
    // SearchBar,
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
      rate: '-9.9',
    },
  }),

  methods: {
    cardSelected({ name, value }) {
      console.log((value / 2).toFixed(1));
      this.card = {
        name,
        balance: value,
        cashBack: +(Math.random() * (value * 2 - 0) + 0).toFixed(0),
        rate: (value / 2).toFixed(1),
      };
    },
  },
};
</script>
