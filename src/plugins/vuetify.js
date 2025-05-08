// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
// import { fa } from "vuetify/iconsets/fa4";

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
          danger: "#f54b6b",
          neutral10: "#333333",
          // loginColor: "#0156a2",
          light: "#8eebb1",
          navText: "#262626",
          thead: "#dadfe0",
        },
      },
    },
  },
  components: {
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
