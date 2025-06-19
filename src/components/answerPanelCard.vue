<template>
  <v-expansion-panels class="answerPanelCard" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title hide-actions @click.stop="panelsHandle">
        <div class="">
          <div class="title">
            <div>
              <p>{{ this.title }}</p>
            </div>
            <div class="">
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
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="cardItem">
          <div class="title">
            <div class="d-flex">
              <span class="material-symbols-outlined icon text-primary">
                sms
              </span>
              <span>原回答</span>
            </div>
          </div>
          <div class="content">
            <p>
              內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
            </p>
            <div class="info">
              <span>資料來源：</span><a href="">檔案名稱.pdf</a>
            </div>
          </div>
        </div>
        <div class="cardItem">
          <div class="title">
            <div class="d-flex">
              <span class="material-symbols-outlined icon text-danger">
                sms
              </span>
              <span>新回答</span>
            </div>
            <v-btn
              variant="text"
              :class="['icon', { hide: editStatus }]"
              @click.stop="editHandle"
            >
              <span class="material-symbols-outlined"> edit </span>
            </v-btn>
          </div>
          <div class="content">
            <div v-if="!editStatus" :class="[{ hide: editStatus }]">
              <p>
                {{ this.text }}
              </p>
              <div class="info">
                <span>資料來源：</span><a href="">檔案名稱.pdf</a>
              </div>
            </div>
            <div :class="['textArea', { show: editStatus }]">
              <div v-if="!textEditor" class="editorCard">
                <editorUi />
              </div>
              <div class="btnGrp">
                <v-btn variant="text" @click="editStatus = false">取消</v-btn>
                <v-btn class="elevation-0">儲存</v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import editorUi from "@/components/editorUi.vue";
export default {
  name: "answerPanelCard",
  // props: {
  //   newAnswer: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data: () => ({
    panel: 0,
    editStatus: null,
    title:
      "1.無法親自前往，是否可委託他人借還書? 案內容。勾選欲更新的項目，點擊上方「確認更新",
    text: "可以委託他人借還書，但需要提供您的借閱證或身分證明文件，以及委託書。部分圖書館可能需要事先申請或設定委託人。",
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
