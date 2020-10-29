<template>
  <div class="preview-container">
    <div class="header-wrapper">
      <input
        placeholder="タイトル"
        class="header-wrapper__box header-wrapper--input header-wrapper--input-large header-wrapper--dark"
        type="text"
      >
      <div class="header-wrapper__box header-wrapper__fonts-list header-wrapper--dark">
        <span>フォント：</span>
        <FontList :list="fontList" :on-change="handleFontChange" />
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-wrapper__editor">
        <div class="content-wrapper__editor-header content-wrapper--black-04">
          <UploadImage :on-upload="handleUpload" />
        </div>
        <div class="content-wrapper__content-editor">
          <Editor
            :value="textPreview"
            :on-cursor-position-change="handleCursorPosition"
            :on-change="handleTextPreview"
          />
        </div>
      </div>
      <div class="content-wrapper__preview">
        <div class="content-wrapper__preview-header content-wrapper--black-04">
          <div class="content-wrapper--preview-title">
            Preview
          </div>
          <div class="content-wrapper--preview-label-toggle">
            <span>ダークモード</span>&nbsp;<ToggleButton v-model="darkMode" :color="this.$vuetify.theme.themes.dark.success" :width="40" :margin="2" />
          </div>
        </div>
        <div
          class="content-wrapper__preview-content content-wrapper__content-editor"
          :style="{ fontFamily: currentFont }"
          :class="darkMode ? 'content-wrapper--markdown-dark-mode' : 'content-wrapper--markdown-light-mode'"
        >
          <Markdown :source="textPreview" />
        </div>
      </div>
    </div>
    <div class="bottom-wrapper">
      <button class="post-button" disabled="disabled">
        POST
      </button>
    </div>
  </div>
</template>

<script>
import { uploadImage } from '@/services/imageService'
import { getIdImage } from '@/utils/imageUtil'

export default {
  data () {
    return {
      darkMode: true,
      textPreview: '',
      cursorPosition: 0,
      currentFont: 'Arial, sans-serif',
      fontList: [
        { label: 'Arial', value: 'Arial, sans-serif' },
        { label: 'Andale Mono', value: 'Andale Mono, monospace' },
        { label: 'Impact', value: 'Impact, fantasy' }
      ]
    }
  },
  methods: {
    handleTextPreview (value) {
      this.textPreview = value
    },
    handleCursorPosition (cursorPosition) {
      this.cursorPosition = cursorPosition
    },
    async handleUpload (file) {
      const idImage = getIdImage()
      const textToInsert = `![${idImage}]`
      const textBeforeCursorPosition = this.textPreview.substring(0, this.cursorPosition)
      const textAfterCursorPosition = this.textPreview.substring(this.cursorPosition, this.textPreview.length)
      const content = textBeforeCursorPosition + textToInsert + textAfterCursorPosition
      this.textPreview = content
      const url = await uploadImage(file)
      this.textPreview = content.replace(textToInsert, `![](${url})`)
    },
    handleFontChange (value) {
      this.currentFont = value
    }
  },
  head: {
    title: '記事作成 | SHIMBA'
  }
}
</script>

<style scoped lang="scss">

.preview-container {
  overflow: hidden;

  .header-wrapper {
    display: flex;
    margin-top: 4px;
    margin-bottom: 4px;
    padding-left: 15px;
    padding-right: 15px;

    &__box {
      width: 50%;
      border-radius: 3px;
    }

    &--dark {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &__input {
      margin-right: 2px;
      padding: 12px;
      outline: none;
      border: none;
    }

    &--input-large {
      font-size: 18px;
      font-weight: 600;
    }

    &__fonts-list {
      margin-left: 2px;
      padding: 12px;
    }
  }

  .content-wrapper {
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 7px;

    &--black-04 {
      background-color: rgba(0, 0, 0, 0.4);
    }

    &__editor {
      width: 50%;
      border-right: 1px solid var(--v-bg2-base);
    }

    &__content-editor {
      height: calc(100vh - 222px);
    }

    &__editor-header {
      display: flex;
      justify-content: flex-end;
      padding: 15px;
      height: 48px;
    }

    &__preview {
      width: 50%;
    }

    &__preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      height: 48px;
    }

    &--preview-title {
      font-size: 13px;
      color: var(--v-gray1-base);
    }

    &--preview-label-toggle {
      color: var(--v-gray1-base);
      font-size: 13px;
    }

    &__preview-content {
      padding: 15px;
      overflow-y: scroll;
    }

    &--markdown-dark-mode {
      color: var(--v-primary-base);
      background-color: var(--v-bg1-base);
    }

    &--markdown-light-mode {
      color: var(--v-bg3-base);
      background-color: var(--v-primary-base);
    }
  }

  .bottom-wrapper {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 15px;
    text-align: right;

    .post-button {
      background-image: linear-gradient(117deg, var(--v-warning-base), var(--v-pink-base));
      border-radius: 15px;
      width: 120px;
      border: none;
      outline: none;
      font-weight: 600;
      cursor: pointer;
      color: var(--v-primay-base);
      padding: 8px 10px;

      &:disabled {
        background: var(--v-primary-base);
        color: var(--v-gray-base);
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }
}

</style>
