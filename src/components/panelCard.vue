<template>
  <v-expansion-panels class="panelCard" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title
        v-slot="{ expanded }"
        hide-actions
        @click.stop="panelsHandle"
      >
        <div class="">
          <div class="title">
            <div class="">
              <span class="material-symbols-outlined icon"> comment </span>
              <span class="text">問題</span>
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
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span></v-btn
              >
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
            single-line
            label=""
            variant="outlined"
            hide-details="auto"
            :value="this.text"
          ></v-textarea>
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
export default {
  data: () => ({
    panel: null,
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
};
</script>

<style scoped></style>
