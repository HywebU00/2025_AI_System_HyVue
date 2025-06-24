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
        </v-card-title>
        <v-card-text>
          <!-- tab content start -->
          <div class="tabContent">
            <v-container class="content">
              <AiPanelCard />
              <FilePanelCard :textArea="true" />
              <FilePanelCard :textArea="false" />

              <div class="infoTitle">詳細資料</div>
              <div class="infoContent">
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12">
                    <label class="" for="">狀態</label>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="pl-2">已使用</div>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12">
                    <label class="" for="">關聯問答</label>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="pl-2">
                      <div class="link">10筆</div>
                    </div>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12">
                    <label class="" for="">類型</label>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="pl-2">PDF</div>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12">
                    <label class="" for="">大小</label>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="pl-2">6.3 MB</div>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12">
                    <label class="" for="">上傳者</label>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="pl-2">林小華</div>
                  </v-col>
                </v-row>
                <v-row class="formGrp">
                  <v-col class="pb-0" cols="12">
                    <label class="" for="">上傳日期</label>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <div class="pl-2">2024/12/11</div>
                  </v-col>
                </v-row>
              </div>
            </v-container>
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
import AiPanelCard from "@/components/panelCard_ai.vue";
import FilePanelCard from "@/components/panelCard_fileInfo.vue";
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
    AiPanelCard,
    FilePanelCard,
    datepickerModalVue,
  },
};
</script>
