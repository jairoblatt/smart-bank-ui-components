<template>
  <SCard class="card-manager">
    <div class="card-manager__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque
        iste autem ullam doloribus.
      </p>
      <SButton bg="#4753d7" :to="{ name: 'Payments' }">
        Read more
      </SButton>
    </div>
    <img
      class="card-manager__image"
      :src="require('@/assets/images/manager.svg')"
      alt="Manager image"
    />
  </SCard>
</template>
<script>
import './CardManage.scss';
export default {};
</script>
