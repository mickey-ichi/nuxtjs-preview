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
      </div>
    </div>
    <div class="content-wrapper">
      <div class="editor">
        <div class="editor-header">
          <UploadImage />
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
          <ToggleButton :value="darkMode" @change="handleToggle" />
        </div>
        <div class="content-preview-editor preview-content">
          <Markdown :source="textPreview" />
        </div>
      </div>
    </div>
    <div class="bottom-wrapper">
      <button class="primary-button">
        POST
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      darkMode: true,
      textPreview: '',
      cursorPosition: 0
    }
  },
  mounted () {
    console.log('this.textPreview', this.textPreview)
  },
  methods: {
    handleToggle (value) {
      this.darkMode = value
    },
    handleTextPreview (value) {
      this.textPreview = value
    },
    handleCursorPosition (cursorPosition) {
      this.cursorPosition = cursorPosition
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
    height: calc(100vh - 215px);
  }

  .editor {
    width: 50%;
    border-right: 1px solid var(--color-232630);

    .editor-header {
      display: flex;
      background-color: rgba(0, 0, 0, 0.4);
      padding: 15px;
      max-height: 48px;
    }
  }

  .preview {
    width: 50%;
    color: var(--color-fff);

    .preview-header {
      display: flex;
      background-color: rgba(0, 0, 0, 0.4);
      padding: 15px;
      max-height: 48px;
    }

    .preview-content {
      display: flex;
      background-color: var(--color-171b2d);
      padding: 15px;
      overflow-y: scroll;
    }
  }
}

.bottom-wrapper {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
}

</style>
