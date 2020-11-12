<template>
  <s-card min-height="150" :loading="loading">
    <div class="d-flex flex-column">
      <!-- Title -->
      <s-card-title>
        <i class="mdi mdi-cellphone-android"></i>
        Cellular Service
      </s-card-title>

      <!-- Alert mensagem -->
      <s-transition transition="slide-down">
        <s-card-text v-show="numberSuccess">
          <i class="mdi mdi-check"></i>
          Check your messages {{ cellNumber }}
        </s-card-text>
      </s-transition>

      <!-- Form -->
      <s-card-body>
        <div class="row">
          <div class="col-sm-12 col-md-8 col-lg-9">
            <s-text-field v-model="cellNumber" outlined label="Phone Number" />
          </div>
          <div class="mt-1 mt-md-0 col-sm-12 col-md-4 col-lg-3">
            <s-button large block icon @click="phoneNumber">
              <i class="mdi mdi-send"></i>
            </s-button>
          </div>
        </div>
      </s-card-body>

      <!-- History -->
      <s-card-body>
        <s-card-title class="d-inline-flex m-0 p-0" v-for="(last, index) in lastNumbers" :key="index">
          <s-chip
            small
            :type="!last.status ? 'danger' : 'success'"
            class="ml-2"
            @click="deleteNumber(last)"
          >
            <i :class="`mdi ${!last.status ? 'mdi-close' : 'mdi-check'}`"></i>
            {{ last.number }}</s-chip
          >
        </s-card-title>
      </s-card-body>
    </div>
  </s-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    numberSuccess: false,
    cellNumber: "",
    lastNumbers: [
      {
        number: "202-555-0188",
        status: 1,
      },
      {
        number: "202-555-0124",
        status: 0,
      },
      {
        number: "202-555-0117",
        status: 1,
      },
    ],
  }),

  methods: {
    phoneNumber() {
      this.loading = true;
      setTimeout((_) => {
        this.loading = false;
        this.lastNumbers.push({
          number: this.cellNumber,
          status: Math.round(Math.random()),
        });
        this.sendNumber();
      }, 2000);
    },

    sendNumber() {
      this.numberSuccess = true;
      setTimeout(() => {
        this.numberSuccess = false;
      }, 2000);
    },

    deleteNumber(data) {
      this.loading = true;
      setTimeout(() => {
        const index = this.lastNumbers.indexOf(data);
        this.loading = false;
        this.lastNumbers.splice(index, 1);
      }, 1000);
    },
  },
};
</script>