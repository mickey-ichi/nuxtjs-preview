<template>
  <textarea
    class="component-molecules-editor"
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

<style scoped>
  .component-molecules-editor {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    resize: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 15px;
    color: var(--v-primary-base);
    overflow-y: scroll;
  }
</style>
