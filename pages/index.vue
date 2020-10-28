<template>
  <div class="preview-container">
    <div class="header-wrapper">
      <input
        placeholder="タイトル"
        class="header header-input-title"
        type="text"
      >
      <div class="header header-fonts-list">
        <span>フォント：</span>
        <FontList :list="fontList" :on-change="handleFontChange" />
      </div>
    </div>
    <div class="content-wrapper">
      <div class="editor">
        <div class="editor-header">
          <UploadImage :on-upload="handleUpload" />
        </div>
        <div class="content-preview-editor">
          <Editor
            :value="textPreview"
            :on-cursor-position-change="handleCursorPosition"
            :on-change="handleTextPreview"
          />
        </div>
      </div>
      <div class="preview">
        <div class="preview-header">
          <div class="preview-header-title">
            Preview
          </div>
          <div class="preview-label-toggle">
            <span>ダークモード</span>&nbsp;<ToggleButton v-model="darkMode" color="var(--color-28c56e)" :width="40" :margin="2" />
          </div>
        </div>
        <div class="preview-content content-preview-editor" :style="{ fontFamily: currentFont }" :class="darkMode ? 'markdown-dark-mode' : 'markdown-light-mode'">
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

.header-wrapper {
  display: flex;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-left: 15px;
  padding-right: 15px;

  .header {
    width: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .header-input-title {
    margin-right: 2px;
    padding: 12px;
    font-size: 18px;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    outline: none;
    color: var(--color-fff);
    font-weight: 600;
  }

  .header-fonts-list {
    margin-left: 2px;
    padding: 12px;
  }
}

.content-wrapper {
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 7px;

  .content-preview-editor {
    height: calc(100vh - 222px);
  }

  .editor {
    width: 50%;
    border-right: 1px solid var(--color-232630);

    .editor-header {
      display: flex;
      justify-content: flex-end;
      background-color: rgba(0, 0, 0, 0.4);
      padding: 15px;
      height: 48px;
    }
  }

  .preview {
    width: 50%;
    color: var(--color-fff);

    .preview-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.4);
      padding: 15px;
      height: 48px;
    }

    .preview-header-title {
      font-size: 13px;
      color: var(--color-999);
    }

    .preview-label-toggle {
      color: var(--color-999);
      font-size: 13px;
    }

    .preview-content {
      padding: 15px;
      overflow-y: scroll;
    }
  }

  .markdown-dark-mode {
    color: var(--color-fff);
    background-color: var(--color-171b2d);
  }

  .markdown-light-mode {
    color: var(--color-0c1020);
    background-color: var(--color-fff);
  }
}

.bottom-wrapper {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  text-align: right;

  .post-button {
    background-image: linear-gradient(117deg, var(--color-ffc600), var(--color-cb00ff));
    border-radius: 15px;
    width: 120px;
    border: none;
    outline: none;
    font-weight: 600;
    cursor: pointer;
    color: var(--color);
    padding: 8px 10px;

    &:disabled {
      background: var(--color-ccc);
      color: var(--color-999);
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}

</style>
