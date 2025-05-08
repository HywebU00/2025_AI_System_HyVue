<template>
  <v-app class="listPage">
    <v-app-bar
      :class="['navigationBar', isElevated ? 'hasShadow' : 'elevation-0']"
    >
      <h1 class="logo">
        <img src="~@/assets/images/logo.png" alt="" />
        <span>AI諮詢服務系統</span>
      </h1>
      <functionNavigation :showKnowledgeSelect="false" />
    </v-app-bar>
    <v-main>
      <pageView />
    </v-main>
  </v-app>
</template>
<script>
import functionNavigation from "@/components/functionNavigation.vue";
import pageView from "./pageView.vue";
export default {
  data: () => ({
    isElevated: false,
  }),
  methods: {
    handleScroll() {
      console.log("1");
      this.isElevated = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    functionNavigation,
    pageView,
  },
};
</script>
