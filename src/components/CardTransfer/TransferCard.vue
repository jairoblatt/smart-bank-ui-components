<template>
  <s-card :loading="loading">
    <!-- Title card -->
    <s-card-title>
      <i class="mdi mdi-currency-usd "></i>
      Transfer 
      <s-chip v-show="negativeBalance" type="danger">Negative balance</s-chip>
    </s-card-title>
    <!-- Card form -->
    <s-card-body>
      <div class="transfer-card-container">
        <div class="col-sm-12 col-md-5">
          <s-text-field 
            outlined 
            label="Debit card first" 
            v-model="debitCardFirst"
            />
        </div>
       <i class="mdi mdi-arrow-right"></i>
        <div class="col-sm-12 col-md-5">
          <s-text-field 
            outlined
            label="Debit Second"
            v-model="debitCardSecond"
          />
        </div>

        <div class="col-sm-12 col-md-5">
          <s-text-field  
            v-model="balanceCard"
            outlined
            label="balance in Debit first"
          />
        </div>
        <div class="col-sm-12 col-md-5 col-lg-3 ml-md-1 ml-lg-3 ">
          <s-button 
            block 
            :loading="loading" 
            x-large 
            @click="op"
           >
           Transfer
           <i class="mdi mdi-arrow-right"></i>
           </s-button>
        </div>
      </div>
    </s-card-body>
  </s-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    debitCardFirst:'U$ 23.8',
    debitCardSecond:'U$ 250.70',
    balanceCard: 'U$ 23.8',
    negativeBalance: false
  }),

  methods:{
    op(){
      this.loading = true; 
      setTimeout(()=>{
        this.balanceCard = 'U$-226,9';
        this.negativeBalance = true;
        this.loading = false;
      },2300);
    }
  }

};
</script>
<style lang="scss" src="./TransferCard.scss"></style>