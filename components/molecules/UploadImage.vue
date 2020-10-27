<template>
  <div class="molecules-upload-image">
    <span class="upload-image-title">
      upload image
    </span>
    <IconPicture />
    <input type="file" class="upload-image-input-hidden">
  </div>
</template>

<script>
export default {
  name: 'UploadImage'
}
</script>

<style scoped lang="scss">
  .molecules-upload-image {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

    .upload-image-title {
      font-size: 12px;
      margin-right: 5px;
      font-weight: 700;
    }

    .upload-image-input-hidden {
      display: none;
    }
  }
</style>
