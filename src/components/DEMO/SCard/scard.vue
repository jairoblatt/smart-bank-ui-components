<template>
  <div class="layout-demo-container">
    <div class="layout-demo-exemple">
      <s-card-title>
        <div class="layout-title">
          <h1><span>#</span>Card</h1>
        </div>
      </s-card-title>
      <s-card-body>
        <div class="container-fluid">
          <div class="row demo-container">
            <!-- CARD EXAMPLE -->
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Examples</h2>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-card max-width="400">
                    <s-card-title>Title here</s-card-title>
                    <s-card-sub-title>Subtitle here</s-card-sub-title>
                    <s-card-text
                      >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam excepturi perspiciatis voluptatibus. Quia tempore
                      facere velit repellendus?</s-card-text
                    >
                    <s-card-body>
                      <s-button outlined>Click here</s-button>
                    </s-card-body>
                  </s-card>
                </div>
              </div>
            </div>
            <!-- CARD LOADING -->
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Loading</h2>
                <h3>Loading top bar example</h3>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-card max-width="400" :loading="loading">
                    <s-card-title>Sr. Lorem</s-card-title>
                    <s-card-sub-title>11/10/2020</s-card-sub-title>
                    <s-card-text
                      >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam excepturi perspiciatis voluptatibus. Quia tempore
                      facere velit repellendus?</s-card-text
                    >
                    <s-card-body>
                      <s-button @click="loadingDemo()">Login</s-button>
                    </s-card-body>
                  </s-card>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Functional components</h2>
                <h3>Can be used together</h3>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-card-title>s-card</s-card-title>
                  <s-card-title>s-card-title</s-card-title>
                  <s-card-title>s-card-sub-title</s-card-title>
                  <s-card-title>s-card-text</s-card-title>
                  <s-card-title>s-card-body</s-card-title>
                </div>
              </div>
            </div>
          </div>
        </div>
      </s-card-body>
    </div>

    <div class="layout-demo-api">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Props</h1>
          </div>
        </s-card-title>
        <s-card-body>
          <table-api :tableContent="scardApi" />
        </s-card-body>
      </s-card>
    </div>
  </div>
</template>
<script>
import { scard as scardApi } from "../api";
import TableApi from "../Table";
export default {
  components: {
    TableApi,
  },
  data: () => ({
    scardApi,
    loading: false,
  }),

  methods: {
    loadingDemo() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>