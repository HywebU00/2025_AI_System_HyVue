<template>
  <v-expansion-panels class="resultPanelCard" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title
        v-slot="{ expanded }"
        hide-actions
        @click.stop="panelsHandle"
      >
        <div class="">
          <div class="title">
            <div v-if="!editStatus">
              {{ this.title }}
            </div>
            <v-text-field
              v-if="editStatus"
              density="compact"
              single-line
              variant="outlined"
              class="titleInput"
              hide-details="auto"
            >
              {{ title }}
            </v-text-field>

            <div class="">
              <v-btn
                variant="text"
                :class="['icon', { hide: editStatus }]"
                @click.stop="editHandle"
              >
                <span class="material-symbols-outlined"> edit </span>
              </v-btn>
              <v-btn variant="text" class="icon">
                <span class="material-symbols-outlined"> delete </span>
              </v-btn>
              <v-btn
                class="icon"
                :disabled="editStatus"
                @click.stop="panelsHandle"
                variant="text"
              >
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span></v-btn
              >
            </div>
          </div>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-if="!editStatus" :class="[{ hide: editStatus }]">
          <p>
            {{ this.text }}
          </p>
          <ul>
            <li>主分類 : {{ this.maincategory }}</li>
            <li>子分類 : {{ this.subcategory }}</li>
          </ul>
        </div>
        <div :class="['textArea', { show: editStatus }]">
          <div v-if="textEditor" class="editorCard">
            <QuillEditor />
            <v-row class="formGrp">
              <v-col cols="auto">
                <label class="ml-0" for="">主選單</label>
              </v-col>
              <v-col>
                <v-select
                  label="所有分類"
                  density="compact"
                  single-line
                  variant="outlined"
                  class="bg-white"
                  hide-details="auto"
                  menu-icon="mdi-chevron-down"
                  :items="['選項ㄧ', '選項二', '選項三']"
                ></v-select
              ></v-col>
              <v-col cols="auto">
                <label class="ml-0" for="">主選單</label>
              </v-col>
              <v-col>
                <v-select
                  label="所有分類"
                  density="compact"
                  single-line
                  variant="outlined"
                  class="bg-white"
                  hide-details="auto"
                  menu-icon="mdi-chevron-down"
                  :items="['選項ㄧ', '選項二', '選項三']"
                ></v-select
              ></v-col>
            </v-row>
          </div>
          <div class="btnGrp">
            <v-btn variant="text" @click="editStatus = false">取消</v-btn>
            <v-btn class="elevation-0">儲存</v-btn>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
//載入 文字編輯器
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  name: "panelCard",
  props: {
    textEditor: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    panel: null,
    title:
      "1.無法親自前往，是否可委託他人借還書? 案內容。勾選欲更新的項目，點擊上方「確認更新",
    text: "可以委託他人借還書，但需要提供您的借閱證或身分證明文件，以及委託書。部分圖書館可能需要事先申請或設定委託人。",
    editStatus: false,
    maincategory: "借閱規則",
    subcategory: "期刊借閱",
  }),
  methods: {
    editHandle() {
      this.panel = 0;
      this.editStatus = true;
    },
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
  },
  components: {
    QuillEditor,
  },
};
</script>

<style scoped></style>
