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
      <!-- <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        height="64"
        class="rounded-0 navBtn d-md-none ml-auto"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon> -->
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
        <!-- Home1 start -->
        <v-list-group value="Home1">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-home"
              v-bind="props"
              append-icon=""
              title="Home"
              @click="pushLink('/')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- Home1 end -->
        <!-- 案件管理 end -->
        <v-divider class="ma-1"></v-divider>

        <!-- Element start -->
        <v-list-group value="Element">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-collage"
              v-bind="props"
              title="Element"
            >
            </v-list-item>
          </template>
          <v-list-item
            title="Grid System"
            value="Grid System"
            @click="pushLink('system')"
          >
          </v-list-item>
          <v-list-item
            title="Component"
            value="Component"
            @click="pushLink('component')"
          >
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
        <!-- Element end -->
        <!-- Basic Layout start -->
        <v-list-group value="Basic Layout">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-layers"
              v-bind="props"
              title="Basic Layout"
            >
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
        <!-- Basic Layout end -->
        <v-divider class="ma-1"></v-divider>
        <!-- 登入頁面 start -->
        <v-list-group value="login">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-login"
              v-bind="props"
              append-icon=""
              title="login"
              @click="pushLink('login')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <!-- 登入頁面 end -->
      </v-list>

      <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0 sideBarBtn"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon>
      <!--  navigation-drawer end-->
    </v-navigation-drawer>

    <v-app-bar class="navigationBar">
      <!-- <v-app-bar-nav-icon
        :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        width="64"
        class="rounded-0 h-100 ml-0"
        @click.stop="rail = !rail"
      ></v-app-bar-nav-icon> -->
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
