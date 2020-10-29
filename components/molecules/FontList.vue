<template>
  <select class="font-list font-list--dark" @change="handleChange">
    <option v-for="item in list" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'FontList',
  props: {
    list: {
      type: Array,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleChange (e) {
      this.onChange(e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  .font-list {
    border: none;
    outline: none;
    appearance: none;
    cursor: pointer;

    &--dark {
      color: var(--v-primary-base);
      background: transparent;
    }
  }
</style>
