<template>
  <div class="layout-demo-container">
    <div class="layout-demo-exemple">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Spinner</h1>
          </div>
        </s-card-title>
        <s-card-body>
          <div class="container-fluid">
            <div class="row demo-container">
              <!-- SPINNER EXAMPLE -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>Sizing</h2>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-spinner loading size="20"></s-spinner>
                  </div>
                  <div class="demo-item">
                    <s-spinner loading size="30"></s-spinner>
                  </div>
                  <div class="demo-item">
                    <s-spinner loading size="40"></s-spinner>
                  </div>
                  <div class="demo-item">
                    <s-spinner loading size="50"></s-spinner>
                  </div>

                  <div class="demo-item">
                    <s-spinner loading size="60"></s-spinner>
                  </div>
                </div>
              </div>
              <!-- SPINNER TYPE EXAMPLE -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>Types</h2>
                  <h3>The types of spinners available</h3>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-card-sub-title>Primary</s-card-sub-title>
                    <s-spinner loading size="50" type="primary"></s-spinner>
                  </div>
                  <div class="demo-item">
                    <s-card-sub-title>Success</s-card-sub-title>
                    <s-spinner loading size="50" type="success"></s-spinner>
                  </div>
                  <div class="demo-item">
                    <s-card-sub-title>Danger</s-card-sub-title>
                    <s-spinner loading size="50" type="danger"></s-spinner>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- DEMO CHIP TYPE END -->
        </s-card-body>
      </s-card>
    </div>

    <div class="layout-demo-api">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Props</h1>
          </div>
        </s-card-title>
        <s-card-body>
          <table-api :tableContent="sspinnerApi" />
        </s-card-body>
      </s-card>
    </div>
  </div>
</template>
<script>
import { sspinner as sspinnerApi } from "../api";
import TableApi from "../Table";
export default {
  components: {
    TableApi,
  },
  data: () => ({
    sspinnerApi,
  }),
};
</script>