<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
    show-select
    checkbox-color="primary"
    :items-per-page-text="customItemsPerPageText"
  >
    <template v-slot:header.main="{ item }">
      <div class="d-flex">
        <span> 主分類 </span>
        <v-menu
          v-model="tableFiller"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="material-symbols-outlined icon">
              filter_alt
            </span>
          </template>
          <v-card class="infoBtnContainer tableFiller">
            <v-row class="formGrp d-block">
              <v-col class="py-0" cols="12">
                <v-checkbox
                  color="primary"
                  label="全選"
                  hide-details="auto"
                ></v-checkbox
              ></v-col>
              <v-col cols="12" v-for="i in 3" :key="i" class="py-0">
                <v-checkbox
                  color="primary"
                  label="主分類"
                  hide-details="auto"
                ></v-checkbox>
              </v-col>
              <v-col>
                <div class="btnGroup d-flex">
                  <v-btn
                    elevation="0"
                    color="primary"
                    variant="outlined"
                    class="mr-1"
                    @click="tableFiller = false"
                    >重設</v-btn
                  >
                  <v-btn
                    elevation="0"
                    color="primary"
                    @click="tableFiller = false"
                    >套用篩選</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-menu>
      </div>
    </template>

    <template v-slot:header.child="{ item }">
      <div class="d-flex">
        <span> 子分類 </span>
        <v-menu
          v-model="tableFiller1"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="material-symbols-outlined icon">
              filter_alt
            </span>
          </template>
          <v-card class="infoBtnContainer tableFiller">
            <v-row class="formGrp d-block">
              <v-col class="py-0" cols="12">
                <v-checkbox
                  color="primary"
                  label="全選"
                  hide-details="auto"
                ></v-checkbox
              ></v-col>
              <v-col cols="12" v-for="i in 3" :key="i" class="py-0">
                <v-checkbox
                  color="primary"
                  label="主分類"
                  hide-details="auto"
                ></v-checkbox>
              </v-col>
              <v-col>
                <div class="btnGroup d-flex">
                  <v-btn
                    elevation="0"
                    color="primary"
                    variant="outlined"
                    class="mr-1"
                    @click="tableFiller1 = false"
                    >重設</v-btn
                  >
                  <v-btn
                    elevation="0"
                    color="primary"
                    @click="tableFiller1 = false"
                    >套用篩選</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-menu>
      </div>
    </template>
    <template v-slot:header.status="{ item }">
      <div class="d-flex">
        <span>狀態 </span>
        <v-menu
          v-model="tableFiller2"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <span v-bind="props" class="material-symbols-outlined icon">
              filter_alt
            </span>
          </template>
          <v-card class="infoBtnContainer tableFiller">
            <v-row class="formGrp d-block">
              <v-col class="py-0" cols="12">
                <v-checkbox
                  color="primary"
                  label="全選"
                  hide-details="auto"
                ></v-checkbox
              ></v-col>
              <v-col cols="12" v-for="i in 3" :key="i" class="py-0">
                <v-checkbox
                  color="primary"
                  label="主分類"
                  hide-details="auto"
                ></v-checkbox>
              </v-col>
              <v-col>
                <div class="btnGroup d-flex">
                  <v-btn
                    elevation="0"
                    color="primary"
                    variant="outlined"
                    class="mr-1"
                    @click="tableFiller2 = false"
                    >重設</v-btn
                  >
                  <v-btn
                    elevation="0"
                    color="primary"
                    @click="tableFiller2 = false"
                    >套用篩選</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-menu>
      </div>
    </template>
    <template v-slot:item.function="{ item }">
      <tr>
        <td class="d-flex justify-center align-center">
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" class="ma-2" v-bind="props" size="x-small">
              </v-btn>
            </template>
            <v-card class="pa-2">
              <v-btn
                size="small"
                variant="outlined"
                class="my-1"
                block
                color="primary"
                prepend-icon="mdi-delete"
                >刪除</v-btn
              >
              <v-btn
                size="small"
                variant="outlined"
                class="my-1"
                block
                prepend-icon="mdi-pencil"
                color="primary"
                >編輯</v-btn
              >
            </v-card>
          </v-menu>
        </td>
      </tr>
    </template>
    <template v-slot:item.iron="{ item }">
      <tr>
        <td>
          <div class="btnGroup d-flex">
            <v-btn
              variant="flat"
              class="bg-primary_light btn_icon"
              size="small"
              @click="(expandCard = !expandCard), (overlay = !overlay)"
            >
              <span class="material-symbols-outlined text-neutral10">
                edit
              </span>
            </v-btn>
            <v-btn
              variant="flat"
              class="bg-primary_light btn_icon"
              size="small"
            >
              <span class="material-symbols-outlined text-neutral10">
                delete
              </span>
            </v-btn>
          </div>
        </td>
      </tr>
    </template>
    <template v-slot:item.status="{ item }">
      <tr>
        <template v-if="item.status"> <span>已使用</span> </template>
        <template v-else> <span class="text-warning50">未使用</span> </template>
      </tr>
    </template>
  </v-data-table-server>
  <!-- 側欄編輯 start -->
  <v-expand-x-transition>
    <v-card v-show="expandCard" class="mx-auto expandCard">
      <v-form>
        <v-card-title>
          <div class="titleContent">
            <div class="title">編輯問答</div>
            <v-btn
              variant="text"
              class="btn_icon"
              @click="(overlay = !overlay), (expandCard = !expandCard)"
            >
              <span class="material-symbols-outlined"> close </span>
            </v-btn>
          </div>
          <div class="btnGrp">
            <span class="text">1/60</span>
            <v-btn variant="outlined" class="elevation-0">上一筆</v-btn>
            <v-btn class="elevation-0">下一筆</v-btn>
          </div>
          <v-tabs v-model="tab" grow>
            <v-tab :value="1">問答內容</v-tab>
            <v-tab :value="2">基本設定</v-tab>
          </v-tabs>
        </v-card-title>
        <v-card-text>
          <!-- tab content start -->
          <div class="tabContent">
            <v-tabs-window v-model="tab">
              <v-tabs-window-item :value="1">
                <v-container class="content">
                  <v-btn class="elevation-0 mb-2 refresh" variant="text">
                    <template v-slot:prepend>
                      <span class="material-symbols-outlined"> refresh </span>
                    </template>
                    更新回答</v-btn
                  >
                  <panelCard :textArea="true" />
                  <panelCard :textArea="true" />
                  <panelCard :textEditor="true" />
                  <div class="tagInfo">
                    <div class="tag">資料來源：文件上傳</div>
                    <a class="link" href="">
                      <span class="material-symbols-outlined icon">
                        attach_file
                      </span>
                      <span>圖書館借閱規則.pdf</span>
                    </a>
                  </div>
                  <v-card class="infoCard elevation-0">
                    <p>
                      <span> 委託借還書規則</span>
                      讀者可委託他人代為借閱或歸還書籍，但須提供以下資料：
                    </p>
                    <ul>
                      <li>1.借閱證或有效身分證明文件（如身分證、學生證等）</li>
                      <li>2.委託書（須載明委託人與受託人資訊）</li>
                    </ul>
                    <p>
                      請注意，部分圖書館可能需事先申請或設定委託人，詳情請參閱各館規定或洽詢館方人員。
                    </p>
                  </v-card>
                </v-container>
              </v-tabs-window-item>
              <v-tabs-window-item :value="2">
                <v-container fluid>
                  <v-card class="infoCard elevation-0">
                    <ul>
                      <li>
                        <span>建立日期 : </span>
                        2024/12/24 12:00 徐華
                      </li>
                      <li>
                        <span>審核日期 : </span>
                        2024/12/25 13:00 張美美
                      </li>
                      <li>
                        <span>最後更新 : </span>
                        2025/02/26 16:00 林小玲
                      </li>
                    </ul>
                  </v-card>
                  <div class="formContent">
                    <v-row class="formGrp">
                      <v-col class="pb-0" cols="12">
                        <label class="" for="">主分類</label>
                      </v-col>
                      <v-col cols="12" lg="6">
                        <v-select
                          label="下拉式選單"
                          density="compact"
                          single-line
                          variant="outlined"
                          hide-details="auto"
                          :items="['選項ㄧ', '選項二', '選項三']"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-0" cols="12">
                        <label class="" for="">子分類</label>
                      </v-col>
                      <v-col cols="12" lg="6">
                        <v-select
                          label="下拉式選單"
                          density="compact"
                          single-line
                          variant="outlined"
                          hide-details="auto"
                          :items="['選項ㄧ', '選項二', '選項三']"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-0" cols="12">
                        <label class="" for=""
                          ><span>發布日期</span>
                          <v-tooltip
                            text="預設為啟用日，您可調整為未來日期以預約發佈"
                            location="top"
                          >
                            <template #activator="{ props }">
                              <span
                                v-bind="props"
                                class="icon material-symbols-outlined"
                              >
                                info
                              </span>
                            </template>
                          </v-tooltip></label
                        >
                      </v-col>
                      <v-col cols="12" lg="6">
                        <datepickerModalVue> </datepickerModalVue>
                      </v-col>
                    </v-row>
                    <v-row class="formGrp">
                      <v-col class="pb-0" cols="12">
                        <label class="" for=""
                          ><span>停用設定</span>
                          <v-tooltip
                            text="若有設定停用日期，到期後文章將自動下架至停用區"
                            location="top"
                          >
                            <template #activator="{ props }">
                              <span
                                v-bind="props"
                                class="icon material-symbols-outlined"
                              >
                                info
                              </span>
                            </template>
                          </v-tooltip></label
                        >
                      </v-col>
                      <v-col cols="12" lg="12">
                        <v-radio-group
                          label=""
                          hide-details="auto"
                          v-model="radioValue"
                          color="primary"
                        >
                          <v-radio
                            label="永久發佈（無停用日)"
                            value="1"
                          ></v-radio>
                          <v-radio label="自訂停用日" value="2"> </v-radio>

                          <v-row class="" v-if="radioValue === '2'">
                            <v-col cols="12" lg="6">
                              <datepickerModalVue> </datepickerModalVue>
                            </v-col>
                          </v-row>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </div>
                </v-container>
              </v-tabs-window-item>
            </v-tabs-window>
          </div>
          <!-- tab content end -->
        </v-card-text>

        <v-card-actions>
          <v-btn class="bg-primary elevation-0" color="#fff" block
            >刪除問答</v-btn
          >
          <v-btn block class="bg-primary elevation-0" color="#fff"
            >停用問答</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </v-expand-x-transition>
  <!-- :scrim-clickable="false" -->
  <v-overlay v-model="overlay" :persistent="true"></v-overlay>
  <!-- 側欄編輯 end -->
</template>
<script>
import panelCard from "@/components/panelCard.vue";
//載入 Ｖuetify組合 日期選擇器
import datepickerModalVue from "@/components/datepickerModal.vue";
const desserts = [
  {
    name: "無法親自前往，是否可委託他人借還書?",
    date: "2025/02/22-2025/02/22",
    main: "借閱規則",
    status: true,
    child: "借閱相關",
  },
  {
    name: "問題名稱問題名稱問題名稱問題名稱問題名稱問題名稱",
    date: "2025/02/22-2025/02/22",
    main: "借閱規則",
    status: true,
    child: "借閱相關",
  },
  {
    name: "問題名稱問題名稱問題名稱問題名稱問題名稱問題名稱",
    date: "2025/02/22-2025/02/22",
    main: "借閱規則",
    status: true,
    child: "借閱相關",
  },
  {
    name: "問題名稱問題名稱問題名稱問題名稱問題名稱問題名稱",
    date: "2025/02/22-2025/02/22",
    main: "借閱規則",
    status: false,
    child: "借閱相關",
  },
  {
    name: "問題名稱問題名稱問題名稱問題名稱問題名稱問題名稱",
    date: "2025/02/22-2025/02/22",
    main: "借閱規則",
    status: false,
    child: "借閱相關",
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    tableFiller: false,
    tableFiller1: false,
    tableFiller2: false,
    expandCard: false,
    overlay: false,
    headers: [
      {
        title: "問題",
        key: "name",
        align: "start",
        sortable: false,
        minWidth: 500,
      },
      { title: "主分類", key: "main", align: "start", sortable: false },
      { title: "子分類", key: "child", align: "start", sortable: false },
      { title: "發布期限", key: "date", align: "start", sortable: true },
      {
        title: "狀態",
        key: "status",
        align: "start",
        sortable: false,
        width: 100,
      },
      {
        title: "動作",
        key: "iron",
        align: "start",
        sortable: true,
        width: 100,
      },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
    tab: null,
    radioValue: "1",
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
  components: {
    panelCard,
    datepickerModalVue,
  },
};
</script>
