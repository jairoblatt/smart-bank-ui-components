<template>
  <div class="layout-content-container">
    <!-- Left side -->
    <div class="layout-aside">
      <div class="container-fluid">
        <div class="row">
          <!-- User infos card -->
          <div class="col-12">
            <CardUserAccount :cards="userCards" />
          </div>
          <!-- Generate new card product -->
          <div class="col-12">
            <card-new-product @NewProduct="storageNewUserCard" />
          </div>
        </div>
      </div>
    </div>

    <!-- Rigth side -->
    <div class="layout-section">
      <div class="container-fluid">
        <div class="row">
          <!-- Debit card -->
          <div class="col-12">
            <div class="row debit-card-top-container">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <s-text-field label="Debit card first" />
              </div>
              <i class="mdi mdi-arrow-right"></i>
              <div class="col-sm-12 col-md-12 col-lg-5">
                <s-text-field label="Payee name" />
              </div>
            </div>
          </div>

          <!-- Favorites contacts -->
          <div class="col-12">
            <div class="section-title">
              <h2>Contact favorites</h2>
            </div>
            <s-card-group
              class="d-flex justify-content-sm-center justify-content-md-start"
            >
              <card-contact
                v-for="(item, index) in favorites"
                :key="index"
                :contact="item"
                @delete-favorite="deleteFavoriteUser"
              />
              <card-new-contact @newContact="generateFavoriteUser" />
            </s-card-group>
          </div>

          <div class="col-lg-6 col-sm-12 col-md-12">
            <state-service />
          </div>
          <div class="col-lg-6 col-sm-12 col-md-12">
            <cellular-service />
          </div>
          <div class="col-12">
            <card-transfer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardContact from '../components/CardContact';
import CellularService from '../components/CellularService';
import StateService from '../components/StateService';
import CardNewContact from '@/components/CardNewContact';
import CardTransfer from '@/components/CardTransfer';

import demo from '@/mixins/storageNewUser';
export default {
  mixins: [demo],

  components: {
    CardUserAccount: () => import('@/components/CardUserAccount/index.vue'),
    CardNewProduct: () => import('@/components/CardNewProduct/index.vue'),
    CardContact,
    CellularService,
    StateService,
    CardNewContact,
    CardTransfer,
  },

  created() {
    for (let index = 0; index < 3; index++) {
      this.generateFavoriteUser();
    }
  },
};
</script>
