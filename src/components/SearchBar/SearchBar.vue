<template>
  <div class="search-bar-container">
    <input
      v-model="$attrs.value"
      type="text"
      class="search-input"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <button type="submit" class="search-button">
      <i class="mdi mdi-magnify"></i>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" src="./SearchBar.scss" />
