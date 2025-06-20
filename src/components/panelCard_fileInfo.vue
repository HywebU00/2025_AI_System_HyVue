<template>
  <v-expansion-panels class="fileInfoPanelCard" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title
        v-slot="{ expanded }"
        hide-actions
        @click.stop="panelsHandle"
      >
        <div class="">
          <div class="title">
            <div class="">
              <!-- <span class="material-symbols-outlined icon"> comment </span> -->
              <span class="icon icon_folder"></span>
              <span v-if="textArea" class="text">文件名稱</span>
              <span v-else class="text">文件說明</span>
            </div>
            <div class="">
              <v-btn
                variant="text"
                :class="['icon', { hide: editStatus }]"
                @click.stop="editHandle"
              >
                <span class="material-symbols-outlined"> edit </span>
              </v-btn>
              <v-btn
                class="icon"
                :disabled="editStatus"
                @click.stop="panelsHandle"
                variant="text"
              >
                <span v-if="panel === 1" class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
                <span v-else class="material-symbols-outlined">
                  keyboard_arrow_up
                </span>
              </v-btn>
            </div>
          </div>
          <v-fade-transition leave-absolute>
            <span v-if="expanded"></span>
            <div v-else class="subtitle">
              {{ this.text }}
            </div>
          </v-fade-transition>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <p :class="[{ hide: editStatus }]">
          {{ this.text }}
        </p>
        <div :class="['textArea', { show: editStatus }]">
          <v-textarea
            v-if="textArea"
            single-line
            label=""
            variant="outlined"
            hide-details="auto"
            :value="this.text"
          ></v-textarea>
          <div v-if="textEditor" class="editorCard">
            <editorUi />
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
import editorUi from "@/components/editorUi.vue";
export default {
  name: "panelCard",
  props: {
    textArea: {
      type: Boolean,
      default: false,
    },
    textEditor: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    panel: 1,
    text: " 這是一段很長很長的文字，希望收合時仍顯示一行，展開時顯示全部內容。內容必須是連續的不可斷行。 這是一段很長很長的文字，希望收合時仍顯示一行。",
    editStatus: false,
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
    editorUi,
  },
};
</script>

<style scoped></style>
