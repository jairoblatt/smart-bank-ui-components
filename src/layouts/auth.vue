<template>
  <div class="container login-container">
    <div class="row">
      <div class="col-lg-5 login-header-container">
        <ul>
          <li
            v-for="(item, index) in headItems"
            :key="index"
          >
            <router-link to="" tag="span">{{ item.title }} </router-link>
          </li>
        </ul>
      </div>
    </div>
      <child/>
  </div>
</template>
<script>
const headItems = [
  {
    title: "Terms & Conditions",
    route: "/",
  },
  {
    title: "Privacy policy",
    route: "/",
  },
  {
    title: "Help",
    route: "/",
  },
];
export default {
  data: () => ({
    headItems,
  }),
};
</script>