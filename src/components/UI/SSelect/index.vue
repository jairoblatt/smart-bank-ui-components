<template>
  <div class="s-select">
    <li class="s-select__toggle" @click="toggleMenu">
      {{ itemSelected.name }}
      <i :class="`mdi mdi-menu-${isOpen ? 'up' : 'down'}`"></i>
    </li>
    <STransition>
      <ul class="s-select__menu" v-if="isOpen">
        <li
          v-for="(item, id) in items"
          :key="`s-select-item-${id}`"
          class="s-select__item"
        >
          <span @click="selectItem(item)">
            {{ item.name }}
          </span>
        </li>
      </ul>
    </STransition>
  </div>
</template>

<script>
import './SSelect.scss';

export default {
  name: 'SSelect',

  data: () => ({
    itemSelected: {
      name: '',
    },
    isOpen: false,
  }),

  props: {
    items: {
      type: [Array, Object],
      defualt: () => {},
    },
    selected: {},
    closeOutside: Boolean,
  },

  mounted() {
    this.itemSelected = this.selected;
    this.closeOutside && this.clickOutsideHandler('addEventListener');
    this.$once('hook:beforeDestroy', () =>
      this.clickOutsideHandler('removeEventListener')
    );
  },

  watch: {
    itemSelected: {
      immediate: true,
      deep: true,
      handler(option) {
        this.$emit('input', option);
      },
    },
  },

  methods: {
    selectItem(item) {
      this.itemSelected = item;
      this.isOpen = false;
      this.$emit('select', item);
    },

    toggleMenu() {
      this.isOpen = !this.isOpen;
    },

    clickElementHandler(event) {
      const { target } = event;
      if (!this.$el.contains(target)) this.isOpen = false;
    },

    clickOutsideHandler(type) {
      document[type]('click', this.clickElementHandler);
    },
  },
};
</script>
