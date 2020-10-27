<template>
  <vue-markdown v-bind="$props" />
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  props: {
    ...VueMarkdown.props
  }
}
</script>
