<template>
  <div class="component-header-wrapper component-header-wrapper--dark">
    <a href="https://shimba.io" class="component-header-wrapper__header-logo">
      <img class="component-header-wrapper__img" src="https://static.shimba.io/svg/logo_mixed.svg" alt="Logo">
    </a>
    <MenuLeftButton />
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .component-header-wrapper {
    padding: 5px 5px 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--dark {
      background-color: var(--v-bg-base);
      border-bottom: 1px solid #ffffff19;
    }

    &__header-logo {
      padding: 10px 0;
      display: inline-block;
      width: 120px;
    }

    &__img {
      width: 100%;
      height: auto;
    }
  }
</style>
