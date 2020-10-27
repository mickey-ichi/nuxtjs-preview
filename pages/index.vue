<template>
  <div class="container">
    <Markdown :source="'# h1 Heading 8-)'" />
  </div>
</template>

<script>
export default {
  head: {
    title: '記事作成 | SHIMBA'
  }
}
</script>

<style>
.container {
  min-height: calc(100vh - 51px);
  display: flex;
}

</style>
