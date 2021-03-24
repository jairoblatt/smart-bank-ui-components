<template>
  <STransition transition="fade">
    <slot>
      <router-view />
    </slot>
  </STransition>
</template>

<script>
import STransition from './UI/STransition';
export default {
  name: 'Child',
  components: {
    STransition,
  },
};
</script>
