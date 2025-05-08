<template>
  <v-container class="container">
    <div class="title">
      <h1 class="h1">系統首頁儀表板</h1>
      <v-btn variant="flat" class="bg_gradient_V">
        <span class="icon material-symbols-outlined"> wand_stars </span>
        生成更多問答</v-btn
      >
    </div>
    <div class="filterGrp">
      <div class="">
        <!-- select start -->
        <div class="searchSelect">
          <label for="">主分類</label>
          <v-select
            label="所有分類"
            density="compact"
            single-line
            variant="outlined"
            hide-details="auto"
            clear-icon
            menu-icon="mdi-chevron-down"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
          <label for="">子分類</label>
          <v-select
            label="所有分類"
            density="compact"
            single-line
            variant="outlined"
            menu-icon="mdi-chevron-down"
            hide-details="auto"
            :items="['選項ㄧ', '選項二', '選項三']"
          ></v-select>
          <v-btn variant="flat">重設</v-btn>
        </div>
        <!-- select end -->
      </div>
      <div class="">
        <v-btn variant="flat" class="bg_gradient_V">
          <span class="icon material-symbols-outlined"> wand_stars </span>
          建立問答</v-btn
        >
      </div>
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
            <div class="cardGrp">
              <template v-for="i in 10" :key="i">
                <!-- 卡片樣式start -->
                <v-card class="card" variant="flat">
                  <v-card-item>
                    <div>
                      <div class="cardTitle">
                        知識庫名稱知識庫名稱知識庫名稱知識庫名稱知識庫名稱知識庫名稱
                      </div>
                      <div class="text">最後更新：2025/12/21</div>
                    </div>
                  </v-card-item>
                  <v-card-actions>
                    <div class="tag">啟用中</div>
                    <div class="btnGrp">
                      <v-btn color="primary">
                        更多
                        <v-menu activator="parent">
                          <v-list>
                            <v-list-item>
                              <v-list-item-title>重新命名</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title>開啟前台</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-btn>
                      <v-btn color="danger"> 移除 </v-btn>
                    </div>
                  </v-card-actions>
                </v-card>
                <v-card class="card" variant="flat">
                  <v-card-item>
                    <div>
                      <div class="cardTitle">
                        知識庫名稱知識庫名稱知識庫名稱知識庫名稱知識庫名稱知識庫名稱
                      </div>
                      <div class="text">最後更新：2025/12/21</div>
                    </div>
                  </v-card-item>
                  <v-card-actions>
                    <div class="tag dangerTag">停用中</div>
                    <div class="btnGrp">
                      <v-btn color="primary">
                        更多
                        <v-menu activator="parent">
                          <v-list>
                            <v-list-item>
                              <v-list-item-title>重新命名</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title>開啟前台</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-btn>
                      <v-btn color="danger"> 移除 </v-btn>
                    </div>
                  </v-card-actions>
                </v-card>
                <!-- 卡片樣式end -->
              </template>
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <div class="tableGrp">
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
    selection: 1,
  }),
  methods: {},
  mounted() {},
  components: { tableServer },
};
</script>
<style scoped></style>
