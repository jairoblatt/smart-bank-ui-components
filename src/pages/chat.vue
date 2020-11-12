<template>
  <div class="container-fluid demo-container">
    <tabs>
      <tab title="Button">
        <div class="col-12">
          <s-button-demo />
        </div>
      </tab>

      <tab title="Chip">
        <div class="col-12">
          <s-chip-demo />
        </div>
      </tab>

      <tab title="Avatar">
        <div class="col-12">
          <s-avatar-demo />
        </div>
      </tab>

      <tab title="Card">
        <div class="col-12">
          <s-card-demo />
        </div>
      </tab>

      <tab title="Spinner">
        <div class="col-12">
          <s-spinner-demo />
        </div>
      </tab>

      <tab title="Text Field">
        <div class="col-12">
          <s-text-field-demo />
        </div>
      </tab>

      <tab title="Transition animation">
        <div class="col-12">
          <s-transition-demo />
        </div>
      </tab>

    </tabs>
  </div>
</template>

<script>
import SButtonDemo from "../components/DEMO/SButton/sbutton";
import SChipDemo from "../components/DEMO/SChip/schip";
import SAvatarDemo from "../components/DEMO/SAvatar/savatar";
import SCardDemo from "../components/DEMO/SCard/scard";
import SSpinnerDemo from "../components/DEMO/SSpinner/sspinner";
import STextFieldDemo from "../components/DEMO/STextField/stextfield";
import STransitionDemo from "../components/DEMO/SStransition/stransition";
import { Tabs, Tab } from "@hiendv/vue-tabs";
export default {
  components: {
    SButtonDemo,
    SChipDemo,
    SAvatarDemo,
    SCardDemo,
    SSpinnerDemo,
    STextFieldDemo,
    STransitionDemo,
    Tabs,
    Tab,
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 900px) {
  .demo-container{
    margin-top:90px;
  }
}
</style>