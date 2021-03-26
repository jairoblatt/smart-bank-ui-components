<template>
  <SCard>
    <SCardBody>
      <div class="debit-container">
        <div class="debit-stats">
          <div class="stats-title">
            <h2>{{ name }}<span>+8492</span></h2>
          </div>

          <div class="debit-content-container">
            <div class="debit-content">
              <h2>{{ $t('dashboard.balance') }}</h2>
              <h4>$ {{ balance }}</h4>
            </div>
            <div class="debit-content">
              <h2>
                {{ $t('dashboard.cashback') }}
                <SChip type="success" v-text="'?'" />
              </h2>
              <h4>$ {{ cashBack }}</h4>
            </div>
            <div class="debit-content">
              <h2>{{ $t('dashboard.rate') }}</h2>
              <h4>
                {{ rate }}%
                <SChip :type="percent.type" :icon="percent.icon"
                  >{{ percent.rate }}%</SChip
                >
              </h4>
            </div>
          </div>
        </div>

        <div class="debit-action">
          <div class="ml-1">
            <SButton @click="loading = !loading" :loading="loading">{{
              $t('dashboard.pay')
            }}</SButton>
          </div>
          <div class="ml-1">
            <SButton outlined>{{ $t('dashboard.more') }}</SButton>
          </div>
        </div>
      </div>
    </SCardBody>
  </SCard>
</template>

<script>
import './CardBalance.scss';

export default {
  data: () => ({
    loading: false,
    percent: '',
  }),

  props: {
    balance: [String, Number],
    cashBack: [String, Number],
    rate: [String, Number],
    name: String,
  },

  watch: {
    name() {
      this.percent = this.generateRate();
    },
  },

  methods: {
    generateRate() {
      if ((Math.floor(Math.random() * 201) - 100).toFixed(0) < 0) {
        return {
          icon: 'mdi mdi-arrow-down',
          type: 'danger',
          rate: rate,
        };
      }

      return {
        icon: 'mdi mdi-arrow-up',
        type: 'success',
        rate: rate,
      };
    },
  },
};
</script>
