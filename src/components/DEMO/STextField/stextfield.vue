<template>
  <div class="layout-demo-container">
    <div class="layout-demo-exemple">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Text Field</h1>
          </div>
        </s-card-title>
        <s-card-body>
          <div class="container-fluid">
            <div class="row demo-container">
              <!-- TEXT FIELD EXAMPLE -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>Examples</h2>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-text-field label="User name"></s-text-field>
                  </div>
                  <div class="demo-item">
                    <s-text-field
                      label="password"
                      type="password"
                    ></s-text-field>
                  </div>
                  <div class="demo-item">
                    <s-text-field
                      outlined
                      label="Outlined"
                      type="text"
                    ></s-text-field>
                  </div>
                </div>
              </div>
              <!-- TEXT FIELD ERRORS -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>Errors</h2>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-card-body>
                      <s-text-field
                        :errors="inputError"
                        label="User name"
                        v-model="inputErrorTest"
                      ></s-text-field>
                    </s-card-body>
                    <s-card-body>
                      <s-button @click="setNewError">OK</s-button>
                    </s-card-body>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <table-api :tableContent="stextfieldDemo" />
        </s-card-body>
      </s-card>
    </div>
  </div>
</template>
<script>
import { stextfield as stextfieldDemo } from "../api";
import TableApi from "../Table";
export default {
  components: {
    TableApi,
  },
  data: () => ({
    stextfieldDemo,
    inputError: "",
    inputErrorTest: "lorem",
  }),

  methods: {
    setNewError() {
      this.inputError = "User is not found";
    },
  },
};
</script>