<template>
  <v-container class="container">
    <div class="title pb-4">
      <h1 class="h1">問答集</h1>
    </div>
    <div class="">
      <h3 class="mb-2">管理介面已建立</h3>
      <v-dialog class="dialogCard">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >管理介面已建立</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-title>
              <div class="title">
                <span>管理介面已建立</span>
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
              <p>
                管理介面已準備完成，您可以前往管理介面或點擊「繼續建立問答」開始生成您的問答集。
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="btn_icon elevation-0"> 前往我的管理介面 </v-btn>
              <v-btn class="btn_icon bg-primary" color="#fff">
                繼續建立問答
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">生成成功</h3>
      <v-dialog class="dialogCard">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >生成成功</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-title>
              <div class="title">
                <span>生成成功</span>
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
              <p>已為您生成 60 則問答</p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="btn_icon bg-primary" color="#fff"> 確認 </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">選擇資料來源</h3>
      <v-dialog class="dialogCard selectSource largeHeight">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >選擇資料來源</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card>
              <v-card-title>
                <div class="title">
                  <span>選擇資料來源</span>
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
                <p>系統將透過您選擇的資料建立問答</p>
                <div class="btnCardGrp">
                  <v-btn-toggle v-model="toggle_exclusive">
                    <v-btn>
                      <div class="content">
                        <div class="">AI 文件生成</div>
                        <p>
                          透過上傳文件資料以AI建立問答 支援txt, pdf, md, docx
                        </p>
                      </div>
                    </v-btn>
                    <v-btn>
                      <div class="content">
                        <div class="">AI 爬取網址</div>
                        <p>透過爬取您輸入的網址資料 以AI建立問答</p>
                      </div>
                    </v-btn>

                    <v-btn>
                      <div class="content">
                        <div class="">EXCEL 匯入</div>
                        <p>
                          如果你已經有完整的問答內容，使用 Excel
                          匯入，直接建立問答
                        </p>
                      </div>
                    </v-btn>
                    <v-btn>
                      <div class="content">
                        <div class="">手動建立</div>
                        <p>直接在系統內手動逐筆編寫問答</p>
                      </div>
                    </v-btn>
                  </v-btn-toggle>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0"> 取消選取 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff"> 下一步 </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">上傳文件( Vuetify元件 )</h3>
      <v-dialog class="dialogCard largeWidth hiddenScrollBar largeHeight">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >上傳文件</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card>
              <v-card-title>
                <div class="title">
                  <span>上傳文件</span>
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
                <p>選擇檔案以上傳</p>
                <div class="upfile">
                  <v-file-upload
                    clearable
                    title="點擊或將檔案拖曳至此區域以上傳"
                    divider-text="支援txt, pdf, md, docx"
                  ></v-file-upload>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0">上一步 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff"> 下一步 </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">上傳文件( 手刻UI )</h3>
      <v-dialog class="dialogCard largeWidth largeHeight hiddenScrollBar">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >上傳文件</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card>
              <v-card-title>
                <div class="title">
                  <span>上傳文件</span>
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
                <p>選擇檔案以上傳</p>
                <div class="upfile">
                  <div class="fileUpload">
                    <div class="box">
                      <span class="material-symbols-outlined icon">
                        drive_folder_upload
                      </span>
                      <span>點擊或將檔案拖曳至此區域以上傳</span>
                      <span>支援txt, pdf, md, docx</span>
                    </div>
                    <div class="item">
                      <div class="text">
                        <div class="text-truncate">
                          文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字最多一行超過顯示...文字.png
                        </div>
                        <div class="size">3mb</div>
                      </div>
                      <v-btn variant="text">
                        <span class="material-symbols-outlined btn_icon">
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
                        <span class="material-symbols-outlined btn_icon">
                          delete
                        </span>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0">上一步 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff"> 下一步 </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">文件集</h3>
      <v-dialog class="dialogCard largeWidth largeHeight hiddenScrollBar">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >文件集</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card>
              <v-card-title>
                <div class="title">
                  <span>文件集</span>
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
                <p>
                  點擊以選擇欲使用的文件檔案，如需使用已整理好的EXCEL檔案，請返回選擇資料來源使用EXCEL匯入功能。
                </p>

                <div class="d-flex align-center justify-end">
                  <div class="d-flex align-center tableFillerBtnGrp">
                    <v-select
                      class="select"
                      label="知識庫名稱"
                      density="compact"
                      single-line
                      variant="outlined"
                      hide-details="auto"
                      menu-icon="mdi-chevron-down"
                      :menu-props="{ contentClass: 'custom-select' }"
                      :items="['所有狀態', '已使用', '未使用']"
                    ></v-select>
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
                      v-model="menuPop3"
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
                            @click="this.menuPop3 = false"
                            >重設</v-btn
                          >
                          <v-btn
                            elevation="0"
                            color="primary"
                            @click="this.menuPop3 = false"
                            >套用篩選</v-btn
                          >
                        </div>
                      </v-card>
                    </v-menu>
                    <v-menu
                      transition="slide-y-transition"
                      v-model="menuPop2"
                      :close-on-content-click="false"
                    >
                      <template v-slot:activator="{ props }">
                        <v-tooltip text="篩選功能" location="top">
                          <template v-slot:activator="{ props: tooltipProps }">
                            <v-btn
                              class="btnIcon ml-1"
                              variant="text"
                              v-bind="{ ...props, ...tooltipProps }"
                              color="primary"
                            >
                              <!-- 更換升降冪icon start-->
                              <span class="icon_img_down"> </span>
                              <!-- <span class="icon_img_up"> </span> -->
                              <!-- 更換升降冪icon end-->
                            </v-btn>
                          </template>
                        </v-tooltip>
                      </template>
                      <v-card class="selectCard pa-1">
                        <div class="">
                          <ul>
                            <li class="active">上傳日期新至舊</li>
                            <li>上傳日期舊至新</li>
                            <li>檔案名稱A至Z</li>
                            <li>檔案名稱Z至Ａ</li>
                          </ul>
                        </div>
                      </v-card>
                    </v-menu>
                  </div>
                </div>
                <div class="fileCardGrp">
                  <v-tooltip
                    class="fileCardTooltip"
                    text="文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超"
                    location="top"
                  >
                    <template v-slot:activator="{ props }">
                      <div class="fileCard" v-bind="props">
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
                            <span>狀態：<span class="error">未使用</span></span>
                          </div>
                        </div>
                      </div>
                    </template>
                  </v-tooltip>
                  <v-tooltip
                    class="fileCardTooltip"
                    text="文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超"
                    location="top"
                  >
                    <template v-slot:activator="{ props }">
                      <div class="fileCard" v-bind="props">
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
                            <span>狀態：<span class="error">未使用</span></span>
                          </div>
                        </div>
                      </div>
                    </template>
                  </v-tooltip>
                  <v-tooltip
                    class="fileCardTooltip"
                    text="文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超"
                    location="top"
                  >
                    <template v-slot:activator="{ props }">
                      <div class="fileCard active" v-bind="props">
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
                      </div>
                    </template>
                  </v-tooltip>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0"> 取消選取 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff"> 下一步 </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">爬取網址</h3>
      <v-dialog class="dialogCard largeWidth largeHeight hiddenScrollBar">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >爬取網址</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card class="">
              <v-card-title>
                <div class="title">
                  <span>爬取網址</span>
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
                <div class="">
                  輸入網址後點擊爬取，將為您爬取該網域下所有頁面，不包含檔案及圖表。
                </div>
                <div class="d-flex mt-3 searchGrp">
                  <v-text-field
                    v-model="keyword"
                    label="請輸入關鍵字"
                    density="compact"
                    single-line
                    variant="outlined"
                    hide-details="auto"
                  ></v-text-field>
                  <v-btn class="ml-2" color="primary" variant="flat">
                    爬取
                  </v-btn>
                </div>
                <div class="my-3">以下為爬取結果，請移除不需要使用的連結</div>
                <findPanelCard />

                <div class="d-flex justify-end">
                  <v-btn class="" variant="text">
                    <span class="material-symbols-outlined"> add </span>
                    <span>新增問題</span>
                  </v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0">上一步 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff"> 下一步 </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">手動建立</h3>
      <v-dialog class="dialogCard largeWidth largeHeight hiddenScrollBar">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >手動建立</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card class="">
              <v-card-title>
                <div class="title">
                  <span>手動建立</span>
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
                <ul class="mb-5">
                  <li>直接在系統中逐筆建立 FAQ，適合少量新增。</li>
                  <li>
                    📌 若需要 AI 協助從原始資料中萃取
                    FAQ，請使用「文件生成」或「網址爬取」功能
                  </li>
                  <li>
                    📌 若你已經有完整的問答內容，可以使用「 Excel 匯入」功能
                  </li>
                </ul>
                <addPanelCard />
                <addPanelCard />

                <div class="d-flex justify-end">
                  <v-btn class="" variant="text">
                    <span class="material-symbols-outlined"> add </span>
                    <span>新增問題</span>
                  </v-btn>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0">上一步 </v-btn>
                <!-- "disable" 切換樣式 -->
                <v-btn variant="flat" color=" disable" disabled
                  >開始生成
                </v-btn>
                <!-- <v-btn
                                    class="btn_icon bg-primary disable"
                                    color="#fff"
                                  >
                                    新增
                                  </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">問答設定</h3>
      <v-dialog class="dialogCard largeWidth largeHeight hiddenScrollBar">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >問答設定</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card class="">
              <v-card-title>
                <div class="title">
                  <span>問答設定</span>
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
                <div class="">
                  <p>
                    輸入網址後點擊爬取，將為您爬取該網域下所有頁面，不包含檔案及圖表。
                  </p>
                </div>
                <div class="formContent">
                  <v-row class="formGrp">
                    <v-col class="pb-0" cols="12">
                      <label class="" for="">您想建立幾則問答?</label>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-select
                        label="下拉式選單"
                        density="compact"
                        single-line
                        variant="outlined"
                        hide-details="auto"
                        :items="['30', '60', '90']"
                        :menu-props="{ contentClass: 'custom-select' }"
                      >
                      </v-select>
                    </v-col>
                  </v-row>

                  <v-row class="formGrp">
                    <v-col class="pb-0" cols="12">
                      <label class="" for=""
                        ><span>您想建立關於什麼類別的問答？</span>
                      </label>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-radio-group
                        label=""
                        hide-details="auto"
                        v-model="radioValue"
                        color="primary"
                      >
                        <v-radio label="不指定類別" value="1"></v-radio>
                        <v-radio label="指定類別" value="2"> </v-radio>

                        <v-row class="" v-if="radioValue === '2'">
                          <v-col cols="12">
                            <!-- input空值 style start -->
                            <!-- <div class="d-flex align-center tableFillerBtnGrp">
                              <div class="chipsBox">
                                <div class="content">
                                  <span class="labelText">請選擇類別</span>
                                </div>
                                <span class="icon material-symbols-outlined">
                                  arrow_drop_down
                                </span>
                              </div>
                            </div> -->
                            <!-- input空值 style end -->
                            <div class="d-flex align-center tableFillerBtnGrp">
                              <v-menu
                                transition="slide-y-transition"
                                v-model="menuPop"
                                :close-on-content-click="false"
                              >
                                <template v-slot:activator="{ props }">
                                  <div class="chipsBox" v-bind="{ ...props }">
                                    <div class="content">
                                      <div class="chip" v-for="i in 3" :key="i">
                                        <span class="text"> 主分類 </span>
                                        <v-btn variant="text" class="icon">
                                          <span
                                            class="material-symbols-outlined"
                                          >
                                            close
                                          </span></v-btn
                                        >
                                      </div>
                                    </div>
                                    <span
                                      v-if="!menuPop"
                                      class="icon material-symbols-outlined"
                                    >
                                      arrow_drop_down
                                    </span>
                                    <span
                                      v-else
                                      class="icon material-symbols-outlined"
                                    >
                                      arrow_drop_up
                                    </span>
                                  </div>
                                </template>
                                <v-card class="selectTreeCard pa-1">
                                  <div class="content">
                                    <treeView />
                                  </div>
                                  <div class="btnGroup d-flex justify-center">
                                    <v-btn
                                      elevation="0"
                                      color="primary"
                                      variant="text"
                                      block
                                      @click="this.menuPop = false"
                                      >新增類別</v-btn
                                    >
                                  </div>
                                </v-card>
                              </v-menu>
                            </div>
                          </v-col>
                        </v-row>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </div>
                <!-- <div class="d-flex justify-end">
                  <v-btn class="" variant="text">
                    <span class="material-symbols-outlined"> add </span>
                    <span>新增問題</span>
                  </v-btn>
                </div> -->
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0">上一步 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff">
                  開始生成
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">新增類別</h3>
      <v-dialog class="dialogCard">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >新增類別</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card>
              <v-card-title>
                <div class="title">
                  <span>新增類別</span>
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
                <div class="formContent">
                  <v-row class="formGrp">
                    <v-col class="pb-0" cols="12">
                      <label class="" for="">請輸入新的類別名稱</label>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="keyword"
                        label="請輸入名稱"
                        chips
                        density="compact"
                        single-line
                        variant="outlined"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="formGrp">
                    <v-col cols="12">
                      <v-checkbox
                        hide-details="auto"
                        label="於主分類下建立子分類"
                      ></v-checkbox>
                      <v-select
                        label="請選擇主分類"
                        class="select"
                        density="compact"
                        single-line
                        variant="outlined"
                        hide-details="auto"
                        :menu-props="{ contentClass: 'custom-select' }"
                        :items="['選項ㄧ', '選項二', '選項三']"
                      ></v-select>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon bg-primary" color="#fff"> 取消 </v-btn>
                <v-btn variant="flat" color=" disable" disabled>建立 </v-btn>
                <!-- <v-btn
                                    class="btn_icon bg-primary disable"
                                    color="#fff"
                                  >
                                    新增
                                  </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">關聯問答詳情</h3>
      <v-dialog class="dialogCard largeWidth largeHeight hiddenScrollBar">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >關聯問答詳情</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card>
              <v-card-title>
                <div class="title">
                  <span>關聯問答詳情</span>
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
                <p>共3筆相關聯問答</p>
                <div class="fileCardGrp">
                  <relevantPanelCard class="relevantPanelCard" />
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0"> 取消選取 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff"> 返回 </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
      <h3 class="mt-5 mb-2">確認刪除所選文件</h3>
      <v-dialog class="dialogCard largeWidth largeHeight hiddenScrollBar">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn class="default_btn" variant="flat" v-bind="activatorProps"
            >確認刪除所選文件</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-form>
            <v-card class="">
              <v-card-title>
                <div class="title">
                  <span>確認刪除所選文件？</span>
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
                <div class="">
                  <p>
                    您選擇的檔案中，部分曾被使用於生成問答。<br />
                    刪除檔案後，問答將會保留，您也可以選擇一併刪除關聯問答。
                  </p>
                </div>
                <div class="formContent">
                  <v-row class="formGrp">
                    <v-col class="pb-0" cols="12">
                      <v-checkbox
                        label="一併刪除關聯問答"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-data-table
                        class="dataTable"
                        :headers="headers"
                        :items="items"
                        hide-default-footer
                      >
                        <!-- 客製化 "狀態" 欄 -->
                        <template #item.status="{ item }">
                          <div v-if="item.status" class="">
                            <span class="text-danger"> {{ item.status }}</span>
                            <span class="memo">
                              <router-link> 查看詳情 </router-link>
                            </span>
                          </div>
                          <div v-else class="">未使用</div>
                        </template>
                      </v-data-table>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="btn_icon elevation-0">取消 </v-btn>
                <v-btn class="btn_icon bg-primary" color="#fff">
                  確認刪除
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </template>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import relevantPanelCard from "@/components/relevantPanelCard.vue";
import findPanelCard from "@/components/panelCard_find.vue";
import addPanelCard from "@/components/panelCard_add.vue";
import treeView from "@/components/treeView.vue";
export default {
  data: () => ({
    functionGroupToggle: 0,
    tab: null,
    page: 1,
    panel: 1,
    selection: 1,
    toggle_exclusive: 2,
    toggle_exclusive1: 2,
    keyword: "",
    radioValue: 2,
    menuPop: false,
    expand2: false,
    menuPop2: false,
    menuPop3: false,
    headers: [
      {
        title: "帳號",
        align: "start",
        sortable: false,
        key: "name",
        width: "60%",
      },
      {
        title: "職稱",
        key: "status",
        align: "start",
        sortable: false,
      },
    ],
    items: [
      { name: "檔案名稱", status: "3筆關聯問答" },
      { name: "檔案名稱", status: "" },
      { name: "檔案名稱", status: "" },
    ],
  }),
  methods: {},
  mounted() {},
  components: { findPanelCard, addPanelCard, treeView, relevantPanelCard },
};
</script>
