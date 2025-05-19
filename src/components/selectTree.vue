<template>
  <v-row>
    <v-col class="px-1" cols="12">
      <div class="selectTreeviewBlock">
        <ul>
          <select-tree-item class="item" :model="treeData"></select-tree-item>
          <select-tree-item class="item" :model="treeData1"></select-tree-item>
          <select-tree-item class="item" :model="treeData2"></select-tree-item>
          <select-tree-item class="item" :model="treeData3"></select-tree-item>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import selectTreeItem from "@/components/selectTreeItem.vue";
const treeData = {
  name: "全部",
};
const treeData1 = {
  name: "文件上傳",
  children: [{ name: "文件.pdf" }, { name: "文件2.pdf" }],
};
const treeData2 = {
  name: "網址爬取",
  children: [{ name: "網頁標題1.txt" }, { name: "網頁標題2.txt" }],
};
const treeData3 = {
  name: "EXCEL匯入",
  children: [{ name: "日期清單1.xlsx" }, { name: "日期清單2.xlsx" }],
};
export default {
  data: () => ({
    treeData,
    treeData1,
    treeData2,
    treeData3,
  }),
  methods: {},
  components: {
    selectTreeItem,
  },
};
</script>

<style></style>
