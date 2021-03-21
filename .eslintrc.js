module.exports = {
  root: true,

  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],

  plugins: ['prettier'],

  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
