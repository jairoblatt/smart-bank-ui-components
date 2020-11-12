<template>
  <div class="layout-demo-container">
    <div class="layout-demo-exemple">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Transition</h1>
          </div>
        </s-card-title>
        <s-card-body>
          <div class="container-fluid">
            <div class="row demo-container">
              <!-- TRANSITION BOUNCE EXAMPLE -->
              <div class="col-md-12 col-sm-12">
                <div class="demo-title">
                  <h2><span>#</span>Animations type</h2>
                  <h3>Styles available "bounce", "fade", "slide", "expand"</h3>
                </div>
                <div class="demo-content">
                  <div class="demo-item">
                    <s-transition :transition="animation.name">
                      <s-card-text v-show="animation.active"
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Veritatis impedit quam fugit labore tempore, iusto
                        voluptate ullam eos quod, sed maxime accusantium?
                        Repellat necessitatibus quod earum tenetur non, impedit
                        numquam!</s-card-text
                      >
                    </s-transition>
                  </div>
                  <div class="demo-item">
                    <s-button @click="animation.active = false" outlined
                      >Reset</s-button
                    >
                  </div>
                  <div class="demo-item" v-for="(animation,index) in animationItems" :key="index">
                    <s-button @click="transitionHandle(animation)">{{ firstUpperCase(animation) }}</s-button>
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
          <table-api :tableContent="stransitionApi" />
        </s-card-body>
      </s-card>
    </div>
  </div>
</template>
<script>
import { stransition as stransitionApi } from "../api";
import TableApi from "../Table";
export default {
  components: {
    TableApi,
  },
  data: () => ({
    stransitionApi,
    animation: {
      name: "",
      active: false,
    },
    animationItems:['fade', 'bounce', 'slide', 'slide-left', 'expand']
  }),

  methods: {
    transitionHandle(name) {
      this.animation.name = name;
      this.animation.active = true;
    },
    firstUpperCase(name){
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  },
};
</script>