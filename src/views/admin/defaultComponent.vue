<template>
  <v-container class="container">
    <div class="title">
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
        <v-btn variant="text" class="">
          <img
            height="14"
            class="mr-1"
            src="~@/assets/images/icon_Vector.svg"
            alt=""
          />
          類似問題</v-btn
        >
        <v-btn variant="text" class="mr-3">
          <span class="material-symbols-outlined"> category </span>
          類別設定</v-btn
        >
        <v-btn variant="flat" class="mr-3">
          <span class="material-symbols-outlined"> bubble_chart </span>
          對話測試</v-btn
        >
        <v-btn variant="flat" class="bg_gradient_V">
          <span class="icon material-symbols-outlined"> wand_stars </span>
          建立問答</v-btn
        >
        <!-- <v-menu
          v-model="popBox"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="bg-primary">
              <span class="icon material-symbols-outlined"> add </span>
              新增文件</v-btn
            >
          </template>
          <v-card>
            <v-row class="formGrp d-block">
              <v-col cols="12">
                <span>上傳文件</span>
              </v-col>
              <v-col cols="12">
                <span>爬取網址</span>
              </v-col>
              <v-col cols="12">
                <span>上傳EXCEL檔案</span>
              </v-col>
            </v-row>
          </v-card>
        </v-menu> -->
      </div>
    </div>
    <v-row>
      <v-col>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <div class="containerCard">
              <div class="cardTitle">
                <div class="">
                  <h2>啟用中問答(30)</h2>
                  <v-select
                    label="知識庫名稱"
                    density="compact"
                    single-line
                    variant="solo"
                    hide-details="auto"
                    menu-icon="mdi-chevron-down"
                    :items="['選項ㄧ', '選項二', '選項三']"
                  ></v-select>
                </div>
                <div class=""></div>
              </div>
              <div class="cardTitle">
                <div class="">
                  <h2>已選擇 : 3</h2>
                  <v-btn variant="text"> 取消選取</v-btn>
                </div>
                <div class="">
                  <v-btn variant="flat">刪除</v-btn>
                  <v-btn variant="flat">停用</v-btn>
                  <v-btn variant="flat"> 更新回答</v-btn>
                  <v-btn variant="flat"> 匯出</v-btn>
                </div>
              </div>
              <tableServer />
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <div class="containerCard">
              <tableServer />
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
    popBox: false,
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: { tableServer },
};
</script>
<style scoped></style>
