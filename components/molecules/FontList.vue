<template>
  <select class="font-list" @change="handleChange">
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

<style scoped>
  .font-list {
    background: transparent;
    border: none;
    outline: none;
    appearance: none;
    color: var(--color-fff);
    cursor: pointer;
  }
</style>
