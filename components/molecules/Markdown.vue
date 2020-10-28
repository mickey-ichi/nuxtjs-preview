<template>
  <div v-html="reversedSource" />
</template>

<script>

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import markdownIt from 'markdown-it'

const markdowned = markdownIt({
  langPrefix: 'hljs',
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs hljs-custom"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
      } catch (__) {}
    }
    return ''
  }
})

export default {
  props: {
    source: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      markdown: ''
    }
  },
  computed: {
    reversedSource () {
      return markdowned.render(this.source)
    }
  }
}
</script>

<style>
  .hljs-custom {
    background: var(--color-0c1020);
    color: var(--color-fff);
    font-size: 13px;
    padding: 15px;
  }
</style>
