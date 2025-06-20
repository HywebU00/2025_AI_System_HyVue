<template>
  <v-container class="container">
    <div class="title">
      <h1 class="h1">問答集</h1>
    </div>

    <div class="filterGrp">
      <div class="">
        <v-menu
          v-model="popBox"
          :close-on-content-click="false"
          location="bottom"
          class="addFile"
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="bg-primary default_btn" variant="flat">
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
        </v-menu>
      </div>
    </div>
    <v-row>
      <v-col>
        <div class="containerCard">
          <div class="cardTitle">
            <div class="">
              <h2>啟用中問答(30)</h2>
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
              <v-btn class="default_btn" variant="flat"> 下載</v-btn>
              <v-dialog
                class="dialogCard largeWidth hiddenScrollBar largeHeight"
              >
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    class="bg_gradient_V default_btn"
                    variant="flat"
                    v-bind="activatorProps"
                    >建立問答</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-form>
                    <v-card>
                      <v-card-title>
                        <div class="title">
                          <span>已選擇3筆文件</span>
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
                        <div class="fileCardGrp pt-6">
                          <div class="chooseFileCard" v-bind="props">
                            <div class="icon">
                              <span class="material-symbols-outlined">
                                description
                              </span>
                            </div>
                            <div class="text">
                              <div class="titleContent">
                                文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超
                              </div>
                              <div class="">
                                <span>檔案大小：3MB</span>
                                <span>上傳日期：2025/05/14</span>
                                <span
                                  >狀態：<span class="error">未使用</span></span
                                >
                              </div>
                            </div>
                            <div class="icon_cancel">
                              <span class="material-symbols-outlined">
                                cancel
                              </span>
                            </div>
                          </div>

                          <div class="chooseFileCard" v-bind="props">
                            <div class="icon">
                              <span class="material-symbols-outlined">
                                description
                              </span>
                            </div>
                            <div class="text">
                              <div class="titleContent">
                                文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超
                              </div>
                              <div class="">
                                <span>檔案大小：3MB</span>
                                <span>上傳日期：2025/05/14</span>
                                <span
                                  >狀態：<span class="error">未使用</span></span
                                >
                              </div>
                            </div>
                            <div class="icon_cancel">
                              <span class="material-symbols-outlined">
                                cancel
                              </span>
                            </div>
                          </div>
                          <div class="chooseFileCard active" v-bind="props">
                            <div class="icon">
                              <span class="material-symbols-outlined">
                                description
                              </span>
                            </div>
                            <div class="text">
                              <div class="titleContent">
                                文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超
                              </div>
                              <div class="">
                                <span>檔案大小：3MB</span>
                                <span>上傳日期：2025/05/14</span>
                                <span>狀態：<span>已使用</span></span>
                              </div>
                            </div>
                            <div class="icon_cancel">
                              <span class="material-symbols-outlined">
                                cancel
                              </span>
                            </div>
                          </div>
                          <div class="upfile">
                            <div class="fileUpload">
                              <div class="item">
                                <div class="text">
                                  <div class="text-truncate">
                                    文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字.png
                                  </div>
                                  <div class="size">3mb</div>
                                </div>
                                <v-btn variant="text">
                                  <span
                                    class="material-symbols-outlined btn_icon"
                                  >
                                    delete
                                  </span>
                                </v-btn>
                              </div>
                              <div class="item error">
                                <div class="text">
                                  <div class="text-truncate">
                                    文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字.png
                                  </div>
                                  <div class="size">上傳失敗</div>
                                </div>
                                <v-btn variant="text">
                                  <span
                                    class="material-symbols-outlined btn_icon"
                                  >
                                    delete
                                  </span>
                                </v-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn class="btn_icon elevation-0"> 取消 </v-btn>
                        <v-btn class="btn_icon bg-primary" color="#fff">
                          下一步
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </template>
              </v-dialog>
            </div>
          </div>
          <tableServerEdit />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import editorUi from "@/components/editorUi.vue";
import tableServerEdit from "@/components/dataTableServerEdit.vue";
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
  components: { tableServerEdit, treeView, editorUi },
};
</script>
<style scoped></style>
