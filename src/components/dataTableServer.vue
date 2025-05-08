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
    <template v-slot:header.status="{ item }">
      <div class="d-flex">
        <span> 子分類 </span>

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
                    >重設</v-btn
                  >
                  <v-btn elevation="0" color="primary">套用篩選</v-btn>
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
                download
              </span>
            </v-btn>
          </div>
        </td>
      </tr>
    </template>
  </v-data-table-server>
  <!-- 側欄編輯 start -->
  <v-expand-x-transition>
    <v-card v-show="expandCard" class="mx-auto expandCard">
      <v-card-title>
        <div class="title">編輯問答</div>
        <v-btn
          variant="text"
          class="btn_icon"
          @click="(overlay = !overlay), (expandCard = !expandCard)"
        >
          <span class="material-symbols-outlined"> close </span>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="btnGrp">
          <span class="text">1/60</span>
          <v-btn variant="outlined" class="elevation-0">上一筆</v-btn>
          <v-btn class="elevation-0">下一筆</v-btn>
        </div>

        <!-- tab content start -->
        <div class="tabContent">
          <v-tabs v-model="tab" grow>
            <v-tab :value="1">問答內容</v-tab>
            <v-tab :value="2">基本設定</v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item :value="1">
              <v-container class="content">
                <v-btn class="elevation-0 mb-2 refresh" variant="text">
                  <template v-slot:prepend>
                    <span class="material-symbols-outlined"> refresh </span>
                  </template>
                  更新回答</v-btn
                >
                <panelCard />
                <panelCard />
              </v-container>
            </v-tabs-window-item>
            <v-tabs-window-item :value="2">
              <v-container fluid> 2</v-container>
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
    </v-card>
  </v-expand-x-transition>
  <!-- :scrim-clickable="false" -->
  <v-overlay v-model="overlay" :persistent="true"></v-overlay>
  <!-- 側欄編輯 end -->
</template>
<script>
import panelCard from "@/components/panelCard.vue";
const desserts = [
  {
    id: "001",
    name: "陳小姐",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "002",
    name: "王先生",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "003",
    name: "陳小姐",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "004",
    name: "林先生",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
  },
  {
    id: "005",
    name: "賴先生",
    class: "事務科",
    title: "事務員",
    password: "2wsx@@(OL>",
    status: "待審",
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
    expandCard: false,
    overlay: false,
    headers: [
      {
        title: "帳號",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "姓名", key: "name", align: "start", sortable: false },
      { title: "單位", key: "class", align: "start", sortable: false },
      { title: "職稱", key: "title", align: "start", sortable: false },
      { title: "申請時密碼", key: "password", align: "start", sortable: false },
      { title: "狀態", key: "status", align: "start", sortable: false },
      {
        title: "動作",
        key: "iron",
        align: "start",
        sortable: false,
        width: 100,
      },
      {
        title: "功能",
        key: "function",
        align: "center",
        sortable: false,
        width: 100,
      },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
    tab: null,

    // trip: {
    //   name: "",
    //   location: null,
    //   start: null,
    //   end: null,
    // },
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
  },
};
</script>
