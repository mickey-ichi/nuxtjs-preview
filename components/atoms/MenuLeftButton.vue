<template>
  <div class="menu-left">
    <div class="menu-left--button menu-left__style-1" />
    <div class="menu-left--button menu-left__style-2" />
    <div class="menu-left--button menu-left__style-3" />
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

    &--button {
      background: linear-gradient(120deg, #ffc600, #cb00ff);
      height: 2px;
      border-radius: 1px;
    }

    &__style-1 {
      width: 24px;
      margin-bottom: 5px;
    }

    &__style-2 {
      width: 20px;
      margin-bottom: 5px;
    }

    &__style-3 {
      width: 16px;
    }
  }
</style>
