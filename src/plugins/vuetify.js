// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { VTreeview } from "vuetify/labs/VTreeview";
import { VFileUpload } from "vuetify/labs/VFileUpload";

import { md2 } from "vuetify/blueprints";

// import { VDataTableServer } from "vuetify/labs/VDataTable";
export default createVuetify({
  blueprint: md2, //藍圖樣式
  theme: {
    defaultTheme: "default",
    themes: {
      default: {
        dark: false,
        colors: {
          primary: "#0156a2",
          secondary: "#32a7fa",
          primary_light: "#e2f1fe",
          success: "#42d0a1",
          danger: "#f54b6b",
          disable: "#f8f8f8",
          neutral10: "#333333",
          neutral20: "#555555",
          warning50: "#ffbe4c",
          light: "#8eebb1",
          navText: "#262626",
          thead: "#dadfe0",
        },
      },
    },
  },
  components: {
    VTreeview,
    VFileUpload,
    // VDataTableServer,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
