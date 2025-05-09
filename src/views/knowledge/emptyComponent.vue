<template>
  <v-container class="container">
    <div class="title">
      <h2 class="h1">知識庫列表</h2>
    </div>
    <div class="text">查看、管理所有問答集</div>

    <v-row>
      <v-col>
        <div class="emptyCard">
          <div class="">
            <img src="~@/assets/images/empty.svg" alt="" />
            <div class="">
              <p>您尚未建立問答集，點擊按鈕以新增問答集</p>

              <v-dialog class="dialogCard">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn class="elevation-0" v-bind="activatorProps"
                    >開始新增</v-btn
                  >
                </template>

                <template v-slot:default="{ isActive }">
                  <v-form>
                    <v-card>
                      <v-card-title>
                        <div class="title">
                          <span>建立問答集</span>
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
                        <div class="inputGrp">
                          <label class="title" for=""> 請輸入問答集名稱 </label>
                          <v-text-field
                            label="請輸入名稱"
                            density="compact"
                            single-line
                            variant="outlined"
                            hide-details="auto"
                          ></v-text-field>
                        </div>
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
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>
