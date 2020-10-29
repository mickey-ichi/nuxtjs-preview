<template>
  <label class="molecules-upload-image">
    <span class="molecules-upload-image__title">
      upload image
    </span>
    <IconPicture />
    <input type="file" class="molecules-upload-image__input-hidden" accept="image/x-png,image/jpeg" @change="handleUpload">
  </label>
</template>

<script>
export default {
  name: 'UploadImage',
  props: {
    onUpload: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleUpload (e) {
      e.preventDefault()
      if (!e.target.files) { return }
      const file = e.target.files[0]
      this.onUpload(file)
    }
  }
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

    &__title {
      font-size: 12px;
      margin-right: 5px;
      font-weight: 700;
    }

    &__input-hidden {
      display: none;
    }
  }
</style>
