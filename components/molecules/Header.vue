<template>
  <div class="header-wrapper">
    <a href="https://shimba.io" class="header-logo">
      <img src="https://static.shimba.io/svg/logo_mixed.svg" alt="Logo">
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
  .header-wrapper {
    background-color: #1c2238;
    border-bottom: 1px solid #ffffff19;
    padding: 5px 5px 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-logo {
    padding: 10px 0;
    display: inline-block;
    width: 120px;

    img {
      width: 100%;
      height: auto;
    }
  }
</style>
