<template>
  <div class="container">
    <Markdown :source="'# h1 Heading 8-)'" />
    <ToggleButton :value="darkMode" color="var(--color-28c56e)" @change="handleToggle" />
  </div>
</template>

<script>
export default {
  data () {
    console.log(this.$colorMode)
    return {
      darkMode: true
    }
  },
  methods: {
    handleToggle () {
      this.darkMode = !this.darkMode
    }
  },
  head: {
    title: '記事作成 | SHIMBA'
  }
}
</script>

<style>
.container {
  min-height: calc(100vh - 51px);
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
}

</style>
