<template>
  <div class="layout-demo-container">
    <div class="layout-demo-exemple">
      <s-card>
        <s-card-title>
          <div class="layout-title">
            <h1><span>#</span>Buttons</h1>
          </div>
        </s-card-title>
        <div class="container-fluid">
          <!-- DEMO BTN SIZING START -->
          <div class="row demo-container">
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Sizing</h2>
                <h3>
                  Buttons can be given different sizing options to fit a
                  multitude of scenarios.
                </h3>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-button
                    xSmall
                    :loading="sizing.xsmall"
                    @click="sizing.xsmall = !sizing.xsmall"
                    >Xsmall</s-button
                  >
                </div>
                <div class="demo-item">
                  <s-button
                    small
                    :loading="sizing.small"
                    @click="sizing.small = !sizing.small"
                    >Small</s-button
                  >
                </div>

                <div class="demo-item">
                  <s-button
                    :loading="sizing.xdefault"
                    @click="sizing.xdefault = !sizing.xdefault"
                    >Default</s-button
                  >
                </div>
                <div class="demo-item">
                  <s-button
                    large
                    :loading="sizing.large"
                    @click="sizing.large = !sizing.large"
                    >Large</s-button
                  >
                </div>
                <div class="demo-item">
                  <s-button
                    xLarge
                    :loading="sizing.xlarge"
                    @click="sizing.xlarge = !sizing.xlarge"
                    >Xlarge</s-button
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- DEMO BTN SIZING END -->

          <!-- DEMO BTN ICON START -->
          <div class="row demo-container">
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Icon</h2>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-button
                    large
                    icon
                    @click="icon.pencil = !icon.pencil"
                    :loading="icon.pencil"
                  >
                    <i class="mdi mdi-pencil"></i>
                  </s-button>
                </div>

                <div class="demo-item">
                  <s-button
                    icon
                    @click="icon.heart = !icon.heart"
                    :loading="icon.heart"
                  >
                    <i class="mdi mdi-heart"></i>
                  </s-button>
                </div>

                <div class="demo-item">
                  <s-button
                    large
                    icon
                    outlined
                    @click="icon.outlinedPencil = !icon.outlinedPencil"
                    :loading="icon.outlinedPencil"
                  >
                    <i class="mdi mdi-pencil"></i>
                  </s-button>
                </div>
              </div>
            </div>
          </div>
          <!-- DEMO BTN ICON END -->

          <!-- DEMO BTN OUTLINED START -->
          <div class="row demo-container">
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Outlined</h2>
                <h3>
                  Outlined can be used for the primary content of a button.
                </h3>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-button
                    outlined
                    @click="outlined.default = !outlined.default"
                    :loading="outlined.default"
                    >OUTLINED</s-button
                  >
                </div>
                <div class="demo-item">
                  <s-button
                    outlined
                    icon
                    @click="outlined.icon = !outlined.icon"
                    :loading="outlined.icon"
                    ><i class="mdi mdi-check"></i
                  ></s-button>
                </div>
              </div>
            </div>
          </div>
          <!-- DEMO BTN OUTLINED END -->

          <!-- DEMO BTN TEXT START -->
          <div class="row demo-container">
            <div class="col-md-12 col-sm-12">
              <div class="demo-title">
                <h2><span>#</span>Text</h2>
                <h3>Text can be used for the primary content of a button.</h3>
              </div>
              <div class="demo-content">
                <div class="demo-item">
                  <s-button
                    text
                    large
                    @click="text.default = !text.default"
                    :loading="text.default"
                    >LOGIN</s-button
                  >
                </div>
                <div class="demo-item">
                  <s-button
                    text
                    icon
                    @click="text.icon = !text.icon"
                    :loading="text.icon"
                    ><i class="mdi mdi-pencil"></i
                  ></s-button>
                </div>
              </div>
            </div>
          </div>
          <!-- DEMO BTN TEXT END -->
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
          <TableApi :tableContent="sbuttonApi" />
        </s-card-body>
      </s-card>
    </div>
  </div>
</template>
<script>
import { sbutton as sbuttonApi} from '../api';
import TableApi from '../Table';
export default {
  components: {
    TableApi,
  },
  data: () => ({
    sbuttonApi,
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