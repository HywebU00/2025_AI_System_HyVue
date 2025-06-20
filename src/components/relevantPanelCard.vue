<template>
  <v-expansion-panels class="relevantPanelCard" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title
        v-slot="{ expanded }"
        hide-actions
        @click.stop="panelsHandle"
      >
        <div class="">
          <div class="title">
            <div>
              {{ this.title }}
            </div>

            <div class="">
              <v-btn variant="text" class="icon">
                <span class="material-symbols-outlined"> delete </span>
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
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div>
          <p>
            {{ this.text }}
          </p>
          <ul>
            <li>主分類 : {{ this.maincategory }}</li>
            <li>子分類 : {{ this.subcategory }}</li>
          </ul>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    panel: 0,
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
    },
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
  },
  components: {},
};
</script>

<style scoped></style>
