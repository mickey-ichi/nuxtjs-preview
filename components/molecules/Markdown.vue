<template>
  <vue-markdown :source="source" />
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  props: {
    source: {
      type: String,
      default: ''
    }
  }
}
</script>
