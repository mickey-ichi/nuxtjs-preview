<template>
  <textarea
    class="component-molecules-editor component-molecules-editor--dark"
    :value="value"
    @input="handleChange"
    @keydown="handleCursorPosition"
    @click="handleCursorPosition"
  />
</template>

<script>
export default {
  name: 'Editor',
  props: {
    value: {
      type: String,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    },
    onCursorPositionChange: {
      type: Function,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    handleCursorPosition (e) {
      this.onCursorPositionChange(e.target.selectionEnd)
    },
    handleChange (e) {
      this.onChange(e.target.value)
      this.onCursorPositionChange(e.target.selectionStart)
    }
  }
}
</script>

<style scoped lang="scss">
  .component-molecules-editor {
    border: none;
    resize: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 15px;
    overflow-y: scroll;

    &--dark {
      color: var(--v-primary-base);
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

</style>
