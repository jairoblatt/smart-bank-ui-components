<template>
    <div class="row">
      <div class="col-sm-12 col-lg-5 login-form-container">
        <!-- Title -->
        <div class="login-title">
          <h2>Hello, <span>{{form.email}}</span></h2>
        </div>

        <!-- Form -->
        <div class="login-form-group">
          <div class="login-form-input">
            <s-text-field 
              label="Username"
              v-model="form.email" 
            />
          </div>
          <div class="login-form-input">
            <s-text-field
              label="Password"
              type="password"
              v-model="form.password"
            />
          </div>
        </div>

        <!-- Actions -->
        <div class="login-form-actions">
          <s-button :to="{ name: 'PasswordRecovery' }" text>Forgot password?</s-button>
          <s-button :loading="loading" @click="login">Login</s-button>
        </div>

        <!-- Footer -->
        <div class="login-footer">
          <p>
            Do Not disclose your login, password and verification code to
            prevent fraudsters from using it, A bank employee will never ask
            them.
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  
  layout:'auth',

  data: () => ({
    loading: false,
    form: {
      email: "sophia",
      password: "test123",
    },
  }),


  methods: {
    login() {
      this.loading = true;
      setTimeout( _ =>  this.$router.push({ name:'Payments' }), 1000);
    },
  },
};
</script>
<style lang="scss" src="@/assets/styles/login.scss"></style>