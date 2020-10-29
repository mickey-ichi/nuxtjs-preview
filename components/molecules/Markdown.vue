<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="preview-markdown" v-html="reversedSource" />
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
  computed: {
    reversedSource () {
      return markdowned.render(this.source)
    }
  }
}
</script>

<style lang="scss">
  .preview-markdown {
    white-space: pre-wrap;

    img {
      width: 100%;
      height: auto;
      padding: 15px;
    }
  }

  .hljs-custom {
    background: var(--v-bg3-base);
    color: var(--v-primary-base);
    font-size: 13px;
    padding: 15px;
  }
</style>
