// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      // styles: {
      //   configFile: "src/styles/settings.scss",
      // },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
  base: './',
  // css的處理
  css: {
    devSourcemap: true,
  },
  //build
  build: {
    chunkSizeWarningLimit: 1000, // 設置警告閾值為 1000 KB（1MB）
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 將 node_modules 內的所有第三方依賴單獨打包成一個 chunk，命名為 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          // 如果你有其他大模組，這裡也可以進一步自定義分割規則
          // 比如將 'lodash' 獨立成一個 chunk：
          if (id.includes('lodash')) {
            return 'lodash';
          }
        },
      },
    },
  },
});
