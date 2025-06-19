<template>
  <v-expansion-panels class="panelCard addPanelCard" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title hide-actions @click.stop="panelsHandle">
        <div class="">
          <div class="title">
            <div class="">
              <span class="text">問題</span>
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
        <div class="textArea">
          <div class="">
            <div class="itemTitle">問題</div>
            <v-text-field
              density="compact"
              single-line
              variant="outlined"
              hide-details="auto"
              label="請輸入問題"
            ></v-text-field>
          </div>
          <div class="">
            <div class="itemTitle">回答</div>
            <div class="editorCard">
              <editorUi />
            </div>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import editorUi from "@/components/editorUi.vue";
//載入樣式
export default {
  data: () => ({
    panel: 0,
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
