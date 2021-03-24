<template>
  <div class="row">
    <div class="col-sm-12 col-lg-5 login-form-container">
      <!-- Title -->
      <div class="login-title">
        <h2>
          {{ $t('auth.hello') }}, <span>{{ form.username }}</span>
        </h2>
      </div>

      <!-- Form -->
      <div class="login-form-group">
        <div class="login-form-input">
          <STextField :label="$t('auth.username')" v-model="form.username" />
        </div>
        <div class="login-form-input">
          <STextField
            :label="$t('auth.password')"
            type="password"
            v-model="form.password"
          />
        </div>
      </div>

      <!-- Actions -->
      <div class="login-form-actions">
        <s-button :to="{ name: 'PasswordRecovery' }" text>{{
          $t('auth.forgot')
        }}</s-button>
        <s-button :loading="loading" @click="login">{{
          $t('auth.login')
        }}</s-button>
      </div>

      <!-- Footer -->
      <div class="login-footer">
        <p>
          {{ $t('auth.description') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/login.scss';

export default {
  layout: 'auth',

  data: () => ({
    loading: false,
    form: {
      username: 'sophia',
      password: 'test123',
    },
    userPreview: '',
  }),

  methods: {
    login() {
      this.loading = true;
      setTimeout(_ => this.$router.push({ name: 'Payments' }), 1000);
    },
  },
};
</script>
