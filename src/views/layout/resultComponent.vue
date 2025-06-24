<template>
  <v-app class="resultPage">
    <v-app-bar
      :class="['navigationBar', isElevated ? 'hasShadow' : 'elevation-0']"
    >
      <div class="px-3 ml-auto">
        <v-btn class="mr-3 default_btn" color="primary" variant="outlined"
          >取消</v-btn
        >
        <v-btn class="bg-primary default_btn">確認更新（已選擇：3）</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="container">
        <div class="title">
          <h1 class="h1">生成結果</h1>
          <v-btn variant="flat" class="bg_gradient_V default_btn">
            <span class="icon material-symbols-outlined"> wand_stars </span>
            建立問答</v-btn
          >
        </div>
        <div class="filterGrp">
          <div class="">
            <h2>主分類</h2>
            <v-select
              label="所有分類"
              density="compact"
              single-line
              variant="outlined"
              class="bg-white"
              hide-details="auto"
              menu-icon="mdi-chevron-down"
              :items="['選項ㄧ', '選項二', '選項三']"
            ></v-select>
          </div>
          <div class="">
            <v-text-field
              label="請輸入帳號"
              density="compact"
              single-line
              variant="outlined"
              class="bg-white"
              hide-details="auto"
            ></v-text-field>
            <div class="my-1 ml-auto grp">
              <v-btn class="mr-2 default_btn elevation-0">搜尋</v-btn>
              <v-btn class="mr-3 default_btn elevation-0">重設</v-btn>
              <v-btn
                variant="outlined"
                class="bg-white default_btn"
                @click="(overlay = !overlay), (expandCard = !expandCard)"
              >
                <span class="material-symbols-outlined"> category </span>
                類別設定</v-btn
              >
            </div>
          </div>
        </div>
        <div class="text mb-5">
          已依照您所選擇的來源文件，更新所選問答的答案內容。勾選欲更新的項目，點擊上方「確認更新」即可完成更新。
        </div>
        <v-row>
          <v-col>
            <v-card class="containerCard">
              <v-card-title>
                <div class="cardTitle result">
                  <div class="">
                    <v-btn variant="text">全選</v-btn>
                    <v-btn class="elevation-0">刪除</v-btn>
                  </div>
                  <div class="text">
                    <span>共 60 筆</span>
                  </div>
                </div>
              </v-card-title>
              <v-card-text>
                <div class="cardGrp result">
                  <div class="item" v-for="i in 1" :key="i">
                    <v-checkbox color="primary"></v-checkbox>
                    <resultPanelCard :textEditor="true" class="resultCard" />
                  </div>
                  <div class="item">
                    <v-checkbox color="primary"></v-checkbox>
                    <answerPanelCard />
                  </div>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <div class="text-center pb-3">
                  <div class="paginationGrp">
                    共 <span class="text-primary">3 </span>筆資料，第 1/1
                    頁，每頁顯示
                    <v-text-field
                      class="numInput"
                      density="compact"
                      single-line
                      variant="outlined"
                      hide-details="auto"
                      min="1"
                      type="number"
                    ></v-text-field>
                    筆
                    <v-btn class="ml-2 bg-primary" color="white">確定</v-btn>
                  </div>
                  <v-pagination
                    :v-model="page"
                    :length="6"
                    active-color="primary"
                    size="small"
                  ></v-pagination>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <!-- 側欄編輯 start -->
  <v-expand-x-transition>
    <v-card v-show="expandCard" class="mx-auto expandCard">
      <v-card-title>
        <div class="titleContent">
          <div class="title">問題類別設定</div>
          <v-btn
            variant="text"
            class="btn_icon"
            @click="(overlay = !overlay), (expandCard = !expandCard)"
          >
            <span class="material-symbols-outlined"> close </span>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <!--  content start -->
        <div class="">
          <v-container fluid>
            <div>
              <filePanelCard />
              <v-expansion-panels
                class="filePanelCard"
                v-model="panel"
                v-for="i in 1"
                :key="i"
              >
                <v-expansion-panel>
                  <v-expansion-panel-title
                    hide-actions
                    @click.stop="panelsHandle"
                  >
                    <div class="title">
                      <span class="material-symbols-outlined icon">
                        folder_open
                      </span>
                      <div class="">主分類名稱</div>
                    </div>
                    <div class="btnGrp">
                      <!-- 更多按鈕 start -->
                      <div class="">
                        <v-menu
                          v-model="moreMenu"
                          :close-on-content-click="false"
                          location="bottom"
                          activator="parent"
                        >
                          <template v-slot:activator="{ props }">
                            <v-btn
                              v-bind="props"
                              class="icon more"
                              variant="text"
                              size="sm"
                            >
                              <span class="material-symbols-outlined">
                                more_horiz
                              </span></v-btn
                            >
                          </template>
                          <v-card class="btnContainer">
                            <ul class="">
                              <li>
                                <a href="#">
                                  <div>
                                    <span class="">編輯</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div>
                                    <span class="">新增子分類</span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </v-card>
                        </v-menu>
                      </div>
                      <!-- 更多按鈕 end -->
                      <v-btn class="icon delete" variant="text" size="sm">
                        <span class="material-symbols-outlined"> delete </span>
                      </v-btn>
                      <v-btn
                        class="icon"
                        @click.stop="panelsHandle"
                        variant="text"
                        size="sm"
                      >
                        <span
                          v-if="panel === 1"
                          class="material-symbols-outlined"
                        >
                          keyboard_arrow_down
                        </span>
                        <span v-else class="material-symbols-outlined">
                          keyboard_arrow_up
                        </span>
                      </v-btn>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <ul>
                      <li class="item" :class="{ active: moreMenu1 }">
                        <div class="title">
                          <span class="material-symbols-outlined icon">
                            description
                          </span>
                          <div class="">子分類名稱</div>
                        </div>
                        <div class="btnGrp">
                          <!-- 更多按鈕 start -->
                          <div class="">
                            <v-menu
                              v-model="moreMenu1"
                              location="bottom"
                              activator="parent"
                              :close-on-content-click="false"
                            >
                              <template v-slot:activator="{ props }">
                                <v-btn
                                  v-bind="props"
                                  class="icon more"
                                  variant="text"
                                  size="sm"
                                >
                                  <span class="material-symbols-outlined">
                                    more_horiz
                                  </span></v-btn
                                >
                              </template>
                              <v-card min-width="100" class="btnContainer">
                                <ul class="">
                                  <li>
                                    <a href="#">
                                      <div>
                                        <span class="">編輯</span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </v-card>
                            </v-menu>
                          </div>
                          <!-- 更多按鈕 end -->
                          <v-btn class="icon delete" variant="text" size="sm">
                            <span class="material-symbols-outlined">
                              delete
                            </span></v-btn
                          >
                        </div>
                      </li>
                      <li class="item" :class="{ active: moreMenu2 }">
                        <div class="title">
                          <span class="material-symbols-outlined icon">
                            description
                          </span>
                          <div class="">子分類名稱</div>
                        </div>
                        <div class="btnGrp">
                          <!-- 更多按鈕 start -->
                          <!--  -->
                          <div class="">
                            <v-menu
                              v-model="moreMenu2"
                              location="bottom"
                              activator="parent"
                              :close-on-content-click="false"
                            >
                              <template v-slot:activator="{ props }">
                                <v-btn
                                  v-bind="props"
                                  class="icon more"
                                  variant="text"
                                  size="sm"
                                >
                                  <span class="material-symbols-outlined">
                                    more_horiz
                                  </span></v-btn
                                >
                              </template>
                              <v-card min-width="100" class="btnContainer">
                                <ul class="">
                                  <li>
                                    <a href="#">
                                      <div>
                                        <span class="">編輯</span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </v-card>
                            </v-menu>
                          </div>
                          <!-- 更多按鈕 end -->
                          <v-btn class="icon delete" variant="text" size="sm">
                            <span class="material-symbols-outlined">
                              delete
                            </span></v-btn
                          >
                        </div>
                      </li>
                    </ul>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-container>
        </div>
        <!-- tab content end -->
      </v-card-text>
      <v-card-actions>
        <v-btn block class="bg-primary elevation-0" color="#fff"
          >新增類別</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-expand-x-transition>
  <!-- overlay start -->
  <v-overlay v-model="overlay" :persistent="true"></v-overlay>
  <!-- overlay end -->
  <!-- scrollToTop btn start -->
  <v-btn
    v-show="showScrollTop"
    class="scroll-to-top"
    @click="scrollToTop"
    icon
    elevation="4"
    color="primary"
  >
    <span class="material-symbols-outlined"> stat_1 </span>
  </v-btn>
  <!-- scrollToTop btn end -->
</template>

<script>
import resultPanelCard from "@/components/resultPanelCard.vue";
import answerPanelCard from "@/components/answerPanelCard.vue";
export default {
  data: () => ({
    overlay: false,
    expandCard: false,
    isElevated: false,
    moreMenu: false,
    moreMenu1: false,
    moreMenu2: false,
    panel: null,
    page: 1,
    showScrollTop: false,
  }),
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
  methods: {
    handleScroll() {
      this.isElevated = window.scrollY > 0;
    },
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    //scroll
    checkScroll() {
      this.showScrollTop = window.scrollY > 50; // 滾超過 50px 才顯示
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  components: {
    resultPanelCard,
    answerPanelCard,
  },
};
</script>
