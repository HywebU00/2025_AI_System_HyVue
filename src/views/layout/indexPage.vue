<template>
  <div class="index_bg" width="100%">
    <div class="index_container">
      <div class="index_title">
        <h3 class="text-center">
          <img
            style="width: 60px; margin-right: 1rem"
            src="~@/assets/images/logo.png"
            alt=""
          />
          <p class="text-h5 font-weight-bold">AI諮詢服務系統</p>
        </h3>
        <v-btn color="secondary"
          ><a href="https://github.com/HywebU00/2025_AI_System_HyVue"
            >檔案下載</a
          ></v-btn
        >
      </div>

      <div class="d-flex mb-2 justify-center">
        <div style="width: 75%" class="mt-1">
          <v-card>
            <v-table>
              <thead class="bg-primary">
                <tr>
                  <th class="text-left font-weight-bold">編號</th>
                  <th class="text-left font-weight-bold">頁面名稱</th>
                  <th class="text-left font-weight-bold">連結</th>
                  <th class="text-left font-weight-bold width">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in desserts" :key="item.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                  <!-- <td>{{ item.note }}</td> -->
                  <td>
                    <p v-html="item.note"></p>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "登入頁",
          link: "https://hywebu00.github.io/2025_AI_System_HyVue/#/login",
          note: "",
        },
        {
          name: "2.1 知識庫列表_空值",
          link: "https://hywebu00.github.io/2025_AI_System_HyVue/#/list/empty",
          note: "📌 點擊 【開始新增】 按鈕，有視窗樣式",
        },
        {
          name: "2.2 知識庫列表_預設",
          link: "https://hywebu00.github.io/2025_AI_System_HyVue/#/list/card",
          note: "",
        },
        {
          name: "4.1 問答集空值",
          link: "https://hywebu00.github.io/2025_AI_System_HyVue/#/empty",
          note: "",
        },
        {
          name: "4.1 問答集列表",
          link: "https://hywebu00.github.io/2025_AI_System_HyVue/",
          note: " 📌 點擊 【編輯】 按鈕，側邊有區塊展開 <br> 📌 點擊 【刪除】，【停用】，【更新】按鈕，有視窗展開 <br> 📌 點擊【問題卡片元件】 可展開 / 切換編輯區塊 <br>📌 點擊【搜尋】按鈕，則搜尋列展開 <br>📌 點擊【篩選】按鈕，則出現視窗，視窗中有樹狀元件可展開 <br> 📌 點擊【基本設定的頁籤】按鈕的自訂設定，則出現日期選取搜尋匡",
        },
        {
          name: "4.1 生成結果",
          link: "https://hywebu00.github.io/2025_AI_System_HyVue/#/result",
          note: " 📌 點擊【類別設定】按鈕，側邊有區塊展開，可以點擊展開【主分類】選項<br> 📌 點擊【問題卡片元件】 可展開 / 切換編輯區塊",
        },
        {
          name: "",
          link: "",
          note: "",
        },
        {
          name: "",
          link: "",
          note: "",
        },
        {
          name: "",
          link: "",
          note: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.index_bg {
  background: #e9ecef;
  height: 100vh;
}
.index_container {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.index_title {
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-weight: 700;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
  button.v-btn {
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.index_table {
  thead {
    background: #17214c;
    tr > th {
      font-size: 1rem !important;
      color: #fff !important;
      white-space: nowrap;
    }
    .width {
      width: 100px;
    }
  }
  tbody {
    tr > td {
      &:nth-child(2) {
        min-width: 250px;
      }
    }
  }
}
</style>
