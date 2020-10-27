<template>
  <div class="menu-left">
    <div class="menu-left-button menu-left--button-1" />
    <div class="menu-left-button menu-left--button-2" />
    <div class="menu-left-button menu-left--button-3" />
  </div>
</template>

<script>
export default {
  name: 'MenuLeftButton'
}
</script>
<style scoped lang="scss">
  .menu-left {
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    padding: 10px;

    .menu-left-button {
      background: linear-gradient(120deg, #ffc600, #cb00ff);
      height: 2px;
      border-radius: 1px;
    }

    .menu-left--button-1 {
      width: 24px;
      margin-bottom: 5px;
    }

    .menu-left--button-2 {
      width: 20px;
      margin-bottom: 5px;
    }

    .menu-left--button-3 {
      width: 16px;
    }
  }
</style>
