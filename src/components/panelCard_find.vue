<template>
  <v-expansion-panels class="panelCard findPanelCard" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-title hide-actions @click.stop="panelsHandle">
        <div class="">
          <div class="title">
            <div class="">
              <span class="text">https://tpml.gov.taipei/</span>
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
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span></v-btn
              >
            </div>
          </div>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="">
          <div class="itemTitle">包含下列 2 個網址</div>
          <div class="findCard">
            <div class="">
              <div class="titleText">1.臺北市立圖書館-到館資訊</div>
              <div class="url">
                https://tpml.gov.taipei/Content_List.aspx?n=5C3348C277535CA3
              </div>
            </div>
            <v-btn variant="text" color="neutral10">
              <span class="material-symbols-outlined"> delete </span>
            </v-btn>
          </div>
          <div class="findCard">
            <div class="">
              <div class="titleText">
                1.臺北市立圖書館-到館資訊臺北市立圖書館-到館資訊臺北市立圖書館-到館資訊臺北市立圖書館-到館資訊臺北市立圖書館-到館資訊
              </div>
              <div class="url">
                https://tpml.gov.taipei/Content_List.aspx?n=5C3348C277535CA3
                https://tpml.gov.taipei/Content_List.aspx?n=5C3348C277535CA3
              </div>
            </div>
            <v-btn variant="text" color="neutral10">
              <span class="material-symbols-outlined"> delete </span>
            </v-btn>
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
