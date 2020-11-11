<template>
  <div class="layout-demo-container">
    <div class="layout-demo-exemple">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Avatars</h1>
          </div>
        </s-card-title>
        <div class="container-fluid">
          <!-- DEMO AVATAR TYPE -->
          <div class="row demo-container">
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Types</h2>
                <h3>
                  Avatars types available
                </h3>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-avatar rounded size="60">A</s-avatar>
                </div>
                 <div class="demo-item">
                  <s-avatar rounded size="60"><img src="https://randomuser.me/api/portraits/women/49.jpg" alt=""></s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar size="60">A</s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar size="60"><img src="https://randomuser.me/api/portraits/women/49.jpg" alt=""></s-avatar>
                </div>
              </div>
            </div>
          </div>
          <!-- DEMO AVATAR SIZE -->
          <div class="row demo-container">
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Sizing</h2>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-avatar size="50">A</s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar size="60">A</s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar size="70">A</s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar size="80">A</s-avatar>
                </div>
              </div>
            </div>
          </div>
          <!-- DEMO AVATAR COLORS -->
          <div class="row demo-container">
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Colors</h2>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-avatar size="60">C</s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar color="#9568ff" size="60">S</s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar color="#eb62d0" size="60">T</s-avatar>
                </div>
                <div class="demo-item">
                  <s-avatar color="#1eba62" size="60">P</s-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <TableApi :tableContent="savatarApi" />
        </s-card-body>
      </s-card>
    </div>
  </div>
</template>
<script>
import { savatar as savatarApi } from '../api'
import TableApi from "../Table";
export default {
  components: {
    TableApi,
  },
  data: () => ({
    savatarApi,
    text: {
      default: false,
      icon: false,
    },
    outlined: {
      default: false,
      icon: false,
    },
    sizing: {
      xdefault: false,
      small: false,
      xsmall: false,
      large: false,
      xlarge: false,
    },
    icon: {
      pencil: false,
      heart: false,
      outlinedPencil: false,
    },
  }),
};
</script>
