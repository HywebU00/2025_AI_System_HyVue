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
      <v-dialog class="dialogCard selectSource">
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
      <v-dialog class="dialogCard selectSource">
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
      <v-dialog class="dialogCard selectSource">
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
      <v-dialog class="dialogCard selectSource">
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
                <div class="fileCardGrp">
                  <div class="fileCard">
                    <div class="icon"></div>
                    <div class="text">
                      <div class="text-truncate">
                        文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超文字最多一行超過顯示...文字最多一行超
                      </div>
                      <div class="">
                        <span>檔案大小：3MB</span>
                        <span>上傳日期：2025/05/14</span>
                        <span>狀態：未使用</span>
                      </div>
                    </div>
                  </div>
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
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    functionGroupToggle: 0,
    tab: null,
    page: 1,
    panel: 1,
    selection: 1,
    toggle_exclusive: 2,
    toggle_exclusive1: 2,
  }),
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style scoped></style>
