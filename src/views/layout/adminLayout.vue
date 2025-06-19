<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :class="['sideBar', { hidden: rail }]"
      :rail="rail"
      permanent
      :rail-width="railWidth"
      :width="300"
      @click="rail = false"
    >
      <!-- 平台logo start -->
      <div class="logoImg d-none d-md-flex mt-5 align-center justify-center">
        <v-img
          class="logo"
          height="32"
          max-width="32"
          src="~@/assets/images/logo.png"
          alt=""
        />
        <h1 class="ml-2 text-primary">AI諮詢服務系統</h1>
      </div>
      <!-- 平台logo end -->
      <v-list
        density="compact"
        nav
        class="folderMenu"
        :opened="opened"
        @update:opened="menuTarget"
      >
        <!-- 問答集 start -->
        <v-list-group value="QnA">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-collage" v-bind="props">
              <template v-slot:prepend>
                <span class="material-symbols-outlined"> book_2 </span>
              </template>
              <v-list-item-title class="ml-3">問答集</v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item
            title="問答列表"
            value="Grid System"
            @click="pushLink('system')"
          >
          </v-list-item>
          <v-list-item
            title="待審核問答"
            value="Component"
            @click="pushLink('component')"
          >
          </v-list-item>
          <v-list-item title="" value="From1" @click="pushLink('from1')">
            <v-list-item-title> <div class="">From1</div></v-list-item-title>
          </v-list-item>
          <v-list-item title="From" value="From" @click="pushLink('from')">
          </v-list-item>
          <v-list-item title="Table" value="Table" @click="pushLink('table')">
          </v-list-item>
          <v-list-item title="Card" value="Card" @click="pushLink('card')">
          </v-list-item>
          <v-list-item title="Chart" value="Chart" @click="pushLink('chart')">
          </v-list-item>
        </v-list-group>
        <!-- 問答集 end -->

        <!-- 文件集頁面 start -->
        <v-list-group value="file">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" append-icon="" @click="pushLink('')">
              <template v-slot:prepend>
                <span class="material-symbols-outlined"> folder </span>
              </template>
              <v-list-item-title class="ml-3">文件集</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 文件集頁面 end -->
        <!-- 洞察分析 start -->
        <v-list-group value="board">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-collage" v-bind="props">
              <template v-slot:prepend>
                <span class="material-symbols-outlined"> leaderboard </span>
              </template>
              <v-list-item-title class="ml-3">洞察分析</v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item
            title="Grid System"
            value="Grid System1"
            @click="pushLink('system')"
          >
          </v-list-item>
          <v-list-item
            title="Component"
            value="Component2"
            @click="pushLink('component')"
          >
          </v-list-item>
          <v-list-item title="" value="From2" @click="pushLink('from1')">
            <v-list-item-title> <div class="">From1</div></v-list-item-title>
          </v-list-item>
          <v-list-item title="From" value="From01" @click="pushLink('from')">
          </v-list-item>
          <v-list-item title="Table" value="Table01" @click="pushLink('table')">
          </v-list-item>
          <v-list-item title="Card" value="Card01" @click="pushLink('card')">
          </v-list-item>
          <v-list-item title="Chart" value="Chart01" @click="pushLink('chart')">
          </v-list-item>
        </v-list-group>
        <!-- 洞察分析 end -->
        <!-- 管理設定 Layout start -->
        <v-list-group value="setting">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <template v-slot:prepend>
                <span class="material-symbols-outlined"> settings </span>
              </template>
              <v-list-item-title class="ml-3">管理設定</v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item
            title="Widget"
            value="Widget"
            @click="pushLink('widget')"
          >
          </v-list-item>
          <v-list-item
            title="新增資料"
            value="addNews"
            @click="pushLink('addNews')"
          >
          </v-list-item>
          <v-list-item
            title="多媒體資料庫"
            value="mediaPhoto"
            @click="pushLink('mediaPhoto')"
          >
          </v-list-item>
        </v-list-group>
        <!-- 管理設定 Layout end -->
      </v-list>

      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0 sideBarBtn"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <!--  navigation-drawer end-->
    </v-navigation-drawer>

    <v-app-bar class="navigationBar elevation-0">
      <Navigation />
    </v-app-bar>
    <v-main>
      <pageView />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/functionNavigation.vue";
import pageView from "./pageView.vue";
export default {
  data: () => ({
    tab: null,
    drawer: true,
    rail: false,
    value: 0,
    windowWidth: "",
    railWidth: "0",
    open: ["Users"],
    opened: ["案件管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  components: {
    Navigation,
    pageView,
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991 ? (this.railWidth = 1) : (this.railWidth = 80);
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
