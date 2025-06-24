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
        <v-btn variant="text" class="default_btn">
          <img
            height="14"
            class="mr-1"
            src="~@/assets/images/icon_Vector.svg"
            alt=""
          />
          類似問題</v-btn
        >
        <v-btn variant="text" class="mr-3 default_btn">
          <span class="material-symbols-outlined"> category </span>
          類別設定</v-btn
        >
        <v-btn variant="flat" class="mr-3 default_btn">
          <span class="material-symbols-outlined"> bubble_chart </span>
          對話測試</v-btn
        >
        <v-btn variant="flat" class="bg_gradient_V default_btn">
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
                <div class="">
                  <div class="d-flex align-center tableFillerBtnGrp">
                    <v-btn
                      class="btnIcon ml-1"
                      color="primary"
                      variant="text"
                      @click="expand2 = !expand2"
                    >
                      <span class="material-symbols-outlined"> search </span>
                    </v-btn>
                    <v-expand-x-transition>
                      <div class="" v-show="expand2">
                        <v-text-field
                          label="請輸入關鍵字"
                          clearable
                          class="tableSearch"
                          density="compact"
                          single-line
                          variant="underlined"
                          hide-details="auto"
                        ></v-text-field>
                      </div>
                    </v-expand-x-transition>
                    <v-menu
                      transition="slide-y-transition"
                      v-model="menuPop"
                      :close-on-content-click="false"
                    >
                      <template v-slot:activator="{ props }">
                        <v-tooltip text="篩選功能" location="top">
                          <template v-slot:activator="{ props: tooltipProps }">
                            <!-- 有篩選條件則新增 active classname -->
                            <v-btn
                              class="btnIcon ml-1 active"
                              variant="text"
                              v-bind="{ ...props, ...tooltipProps }"
                              color="primary"
                            >
                              <span class="material-symbols-outlined"
                                >filter_alt</span
                              >
                            </v-btn>
                          </template>
                        </v-tooltip>
                      </template>
                      <v-card class="selectTreeCard pa-1">
                        <treeView />
                        <div class="btnGroup d-flex justify-center">
                          <v-btn
                            elevation="0"
                            color="primary"
                            variant="outlined"
                            class="mr-1"
                            @click="this.menuPop = false"
                            >重設</v-btn
                          >
                          <v-btn
                            elevation="0"
                            color="primary"
                            @click="this.menuPop = false"
                            >套用篩選</v-btn
                          >
                        </div>
                      </v-card>
                    </v-menu>

                    <v-tooltip text="匯出檔案" location="top">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          v-bind="props"
                          class="btnIcon ml-1"
                          variant="text"
                          color="primary"
                        >
                          <span class="material-symbols-outlined">
                            export_notes
                          </span>
                        </v-btn>
                      </template>
                    </v-tooltip>
                  </div>
                </div>
              </div>
              <div class="cardTitle">
                <div class="">
                  <h2>已選擇 : 3</h2>
                  <v-btn variant="text"> 取消選取</v-btn>
                </div>
                <div class="">
                  <v-dialog class="dialogCard">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        class="default_btn"
                        variant="flat"
                        v-bind="activatorProps"
                        >刪除</v-btn
                      >
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-form>
                        <v-card>
                          <v-card-title>
                            <div class="title">
                              <span>確定刪除</span>
                              <v-btn variant="text" class="btn_icon">
                                <span
                                  class="material-symbols-outlined"
                                  @click="isActive.value = false"
                                >
                                  close
                                </span></v-btn
                              >
                            </div>
                          </v-card-title>
                          <v-card-text>
                            <p>請注意：刪除後，將無法回復。</p>
                          </v-card-text>

                          <v-card-actions>
                            <v-btn class="btn_icon elevation-0"> 取消 </v-btn>
                            <v-btn class="btn_icon bg-primary" color="#fff">
                              確認
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </template>
                  </v-dialog>
                  <v-dialog class="dialogCard">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        class="default_btn"
                        variant="flat"
                        v-bind="activatorProps"
                        >停用</v-btn
                      >
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-form>
                        <v-card>
                          <v-card-title>
                            <div class="title">
                              <span>確定刪除</span>
                              <v-btn variant="text" class="btn_icon">
                                <span
                                  class="material-symbols-outlined"
                                  @click="isActive.value = false"
                                >
                                  close
                                </span></v-btn
                              >
                            </div>
                          </v-card-title>
                          <v-card-text>
                            <p>請注意：刪除後，將無法回復。</p>
                          </v-card-text>

                          <v-card-actions>
                            <v-btn class="btn_icon elevation-0"> 取消 </v-btn>
                            <v-btn class="btn_icon bg-primary" color="#fff">
                              確認
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </template>
                  </v-dialog>
                  <v-dialog class="dialogCard">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        class="default_btn"
                        variant="flat"
                        v-bind="activatorProps"
                        >更新回答</v-btn
                      >
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-form>
                        <v-card>
                          <v-card-title>
                            <div class="title">
                              <span>確定更新</span>
                              <v-btn variant="text" class="btn_icon">
                                <span
                                  class="material-symbols-outlined"
                                  @click="isActive.value = false"
                                >
                                  close
                                </span></v-btn
                              >
                            </div>
                          </v-card-title>
                          <v-card-text>
                            <p>請注意：刪除後，將無法回復。</p>
                          </v-card-text>

                          <v-card-actions>
                            <v-btn class="btn_icon elevation-0"> 取消 </v-btn>
                            <v-btn class="btn_icon bg-primary" color="#fff">
                              確認
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </template>
                  </v-dialog>
                  <v-btn class="default_btn" variant="flat"> 匯出</v-btn>
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
import treeView from "@/components/treeView.vue";
export default {
  data: () => ({
    functionGroupToggle: 0,
    tab: null,
    page: 1,
    panel: 1,
    popBox: false,
    selection: 1,
    toggle: null,
    expand2: false,
    selected: [],
    menuPop: false,
  }),
  methods: {},
  mounted() {},
  components: { tableServer, treeView },
};
</script>
<style scoped></style>
