<template>
  <v-container class="container">
    <div class="title">
      <h2 class="h1">知識庫列表</h2>
    </div>
    <div class="text">查看、管理所有問答集</div>
    <div class="filterGrp">
      <div class="">
        <v-btn variant="flat" class="">
          <span class="material-symbols-outlined"> add </span>
          新增問答</v-btn
        >
      </div>
    </div>
    <v-row>
      <v-col>
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
                    <v-menu class="btnContentList" activator="parent">
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
      </v-col>
    </v-row>
  </v-container>
  <div class="overlay">
    <div class="linearContent">
      <img src="~@/assets/images/loading.svg" alt="" />
      <div class="linear">
        <v-progress-linear
          bg-color="primary"
          color="primary"
          model-value="15"
          :height="16"
        ></v-progress-linear>
        <div class="text">正在準備您的管理介面<span>15</span>%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>
