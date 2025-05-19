<template>
  <v-treeview
    v-model:selected="selected"
    :items="items"
    item-key="id"
    open-on-click
  >
    <!-- 自訂 Checkbox slot -->
    <template #prepend="{ item }">
      <v-checkbox
        :model-value="selected.includes(item.id)"
        @update:model-value="(val) => toggleItem(item.id, val)"
        density="compact"
        color="primary"
        hide-details
      ></v-checkbox>
    </template>
  </v-treeview>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      items: [
        {
          id: 1,
          title: "全部",
        },
        {
          id: 2,
          title: "文件上傳",
          children: [
            { id: 3, title: "文件.pdf" },
            { id: 4, title: "文件.pdf" },
            { id: 5, title: "文件.pdf" },
          ],
        },
        {
          id: 6,
          title: "網址爬取",
          children: [
            {
              id: 7,
              title: "網頁標題1.txt",
            },
          ],
        },
      ],
    };
  },
  computed: {
    flatItemIds() {
      const ids = [];
      const collectIds = (nodes) => {
        for (const node of nodes) {
          ids.push(node.id);
          if (node.children) collectIds(node.children);
        }
      };
      collectIds(this.items);
      return ids;
    },
  },
  methods: {
    toggleItem(id, val) {
      const index = this.selected.indexOf(id);
      if (val && index === -1) {
        this.selected.push(id);
      } else if (!val && index !== -1) {
        this.selected.splice(index, 1);
      }
    },
    selectAll() {
      this.selected = [...this.flatItemIds];
    },
    clearAll() {
      this.selected = [];
    },
  },
};
</script>
