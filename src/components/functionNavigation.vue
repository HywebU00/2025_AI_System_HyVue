<!-- 桌機版 start-->
<template>
  <div class="navigation">
    <!-- select start -->
    <div class="knowledgeSelect" v-if="showKnowledgeSelect">
      <div class="inputComponent">
        <div class="inputSelect" v-click-outside="onClickOutside2">
          <v-text-field
            density="compact"
            v-model="selectedOption"
            append-inner-icon="mdi-chevron-down"
            single-line
            variant="solo"
            hide-details="auto"
            @click="expand = true"
          ></v-text-field>
        </div>
        <v-expand-transition>
          <div class="inputContent elevation-4" v-show="expand">
            <ul>
              <li v-for="item in options" :key="item" @click="selectItem(item)">
                <div class="title">{{ item }}</div>
              </li>
              <li>
                <router-link to="" class="text-primary"
                  >前往知識庫列表</router-link
                >
              </li>
            </ul>
          </div>
        </v-expand-transition>
      </div>
      <!-- <v-select
        label="知識庫名稱"
        density="compact"
        single-line
        variant="solo"
        hide-details="auto"
        menu-icon="mdi-chevron-down"
        :items="['選項ㄧ', '選項二', '選項三']"
      ></v-select> -->
    </div>
    <!-- select end -->
    <!-- 訊息通知按鈕 start -->
    <v-menu
      v-model="infoMenu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="btn elevation-2 bellBtn">
          <v-badge dot>
            <v-icon icon="mdi-bell-outline" size="large"></v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-card min-width="100" class="infoBtnContainer">
        <ul class="">
          <li v-for="item in 5" :key="item">
            <a href="#">
              <div>
                <span class="time">111/06/30</span>
                <span class="title">本月薪資入帳，立即查看</span>
              </div>
            </a>
          </li>
        </ul>
      </v-card>
    </v-menu>
    <!-- 訊息通知按鈕 end -->
    <!-- login鈕 start -->
    <v-btn class="btn elevation-2">
      <v-icon icon="mdi-logout" size="large"></v-icon>
    </v-btn>
    <!--login按鈕 end -->
    <div class="loginName">
      <span>林曉華</span>
    </div>
  </div>
</template>
<!-- 桌機版 end-->

<script>
export default {
  name: "functionNavigation",
  props: {
    showKnowledgeSelect: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    loginMenu: false,
    infoMenu: false,
    selectedOption: "知識庫名稱",
    options: ["知識庫名稱1", "知識庫名稱"],
    expand: false,
  }),
  methods: {
    //桌機與手機版本header 切換
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991
        ? (this.mobileHeader = true)
        : (this.mobileHeader = false);
      this.isSmallScreen = window.innerWidth < 991;
    },
    onClickOutside2() {
      this.expand = false;
    },
    selectItem(item) {
      this.selectedOption = item;
      this.expand4 = false;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
