<template>
  <div class="layout-demo-container">
    <div class="layout-demo-exemple">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Chips</h1>
          </div>
        </s-card-title>
        <s-card-body>
          <!-- DEMO CHIP TYPE START -->
          <div class="container-fluid">
            <div class="row demo-container">
              <!-- CHIP SIZE -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>Sizing</h2>
                  <h3>Sizing available</h3>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-chip small>Default</s-chip>
                  </div>
                  <div class="demo-item">
                    <s-chip>Default</s-chip>
                  </div>

                  <div class="demo-item">
                    <s-chip large>Default</s-chip>
                  </div>
                </div>
              </div>
              <!-- CHIP TYPES -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>Types</h2>
                  <h3>The types of chips available.[ primary, secondary, info, danger, success ]</h3>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-chip>Primary</s-chip>
                  </div>
                  <div class="demo-item">
                    <s-chip type="secondary">Secondary</s-chip>
                  </div>
                   <div class="demo-item">
                    <s-chip type="info">Info </s-chip>
                  </div>
                  <div class="demo-item">
                    <s-chip type="danger">Danger</s-chip>
                  </div>

                  <div class="demo-item">
                    <s-chip type="success">Success</s-chip>
                  </div>
                </div>
              </div>
              <!-- CHIP ICONS -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>whit icons</h2>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-chip><i class="mdi mdi-check"></i></s-chip>
                  </div>
                  <div class="demo-item">
                    <s-chip type="danger"><i class="mdi mdi-heart"></i></s-chip>
                  </div>

                  <div class="demo-item">
                    <s-chip type="success"
                      ><i class="mdi mdi-pencil"></i
                    ></s-chip>
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
          <table-api :tableContent="schipApi" />
        </s-card-body>
      </s-card>
    </div>
  </div>
</template>
<script>
import { schip as schipApi } from "../api";
import TableApi from "../Table";
export default {
  components: {
    TableApi,
  },
  data: () => ({
    schipApi,
  }),
};
</script>