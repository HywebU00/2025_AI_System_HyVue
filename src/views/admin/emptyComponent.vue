<template>
  <v-container class="container">
    <div class="title pb-4">
      <h1 class="h1">問答集</h1>
    </div>

    <div class="filterGrp">
      <div class="">
        <v-tabs class="teb" v-model="tab">
          <v-tab>啟用中(0)</v-tab>
          <v-tab value="two">停用中</v-tab>
        </v-tabs>
      </div>
      <div class="">
        <v-btn variant="flat" class="bg_gradient_V">
          <span class="icon material-symbols-outlined"> wand_stars </span>
          建立問答</v-btn
        >
      </div>
    </div>
    <v-row>
      <v-col>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <div class="emptyCard">
              <div class="">
                <img src="~@/assets/images/doc_empty.svg" alt="" />
                <div class="">
                  <p>
                    未建立任何問答<br />
                    點擊上方建立問答按鈕以建立問答
                  </p>
                </div>
              </div>
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <div class="emptyCard">
              <div class="">
                <img src="~@/assets/images/doc_empty.svg" alt="" />
                <div class="">
                  <p>
                    <b>未建立任何問答</b>
                    <br />
                    請至左側導覽列待審核問答區確認欲啟用的問答
                  </p>
                </div>
              </div>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import tableServer from "@/components/dataTableServer.vue";
export default {
  data: () => ({
    functionGroupToggle: 0,
    tab: null,
    page: 1,
    panel: 1,
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: { tableServer },
};
</script>
<style scoped></style>
