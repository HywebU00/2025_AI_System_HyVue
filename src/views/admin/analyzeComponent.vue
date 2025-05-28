<template>
  <v-container class="container analyzePage">
    <v-row class="sessionGrp">
      <v-col cols="4">
        <div class="item">
          <div class="selectCard">
            <div class="selectBox">
              <div class="inputComponent">
                <div class="inputSelect" v-click-outside="onClickOutside2">
                  <v-text-field
                    label="請輸入關鍵字"
                    density="compact"
                    append-inner-icon="mdi-chevron-down"
                    single-line
                    variant="outlined"
                    hide-details="auto"
                    @click="expand4 = true"
                  ></v-text-field>
                </div>
                <v-expand-transition>
                  <div class="inputContent elevation-4" v-show="expand4">
                    <ul>
                      <li v-for="i in 5" :key="i">
                        <div class="title">系統</div>
                        <div class="subtitle">
                          對話 <span>滾球</span>對話對話對話對話對話對話對話
                        </div>
                      </li>
                    </ul>
                  </div>
                </v-expand-transition>
              </div>
            </div>
            <div class="searchBox">
              <v-btn
                v-if="isActive"
                variant="text"
                size="sm"
                class="btn"
                color="neutral20"
                @click="onBack"
              >
                <span class="material-symbols-outlined"
                  >keyboard_arrow_left</span
                >
              </v-btn>

              <v-text-field
                v-model="keyword"
                label="請輸入關鍵字"
                density="compact"
                append-inner-icon="mdi-magnify"
                single-line
                variant="outlined"
                hide-details="auto"
                @focus="isActive = true"
              ></v-text-field>
              <v-btn
                v-if="isActive"
                class="btn search"
                color="primary"
                variant="flat"
                :disabled="keyword.trim() === ''"
                @click="onSearch"
              >
                搜尋
              </v-btn>
            </div>
          </div>
          <div class="cardGrp msgGrp">
            <div
              :class="['msgCard', { active: activeIndex === index }]"
              v-for="(index, item) in 10"
              :key="item"
              @click="activeIndex = index"
            >
              <div class="title">
                <div class="name">林曉民</div>
                <div class="date">2025/01/10</div>
              </div>
              <div class="text">請問借閱證遺失該怎麼補發？</div>
              <div class="tagGrp">
                <v-chip class="helpful">有幫助</v-chip>
                <v-chip class="noteHelpful">沒有幫助</v-chip>
                <v-chip class="satisfy">滿意</v-chip>
                <v-chip class="exceed">超出範圍</v-chip>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="8">
        <div class="item">
          <div class="filterTitle">
            <div class="title">
              林曉民林曉民林曉民林曉民林曉民林曉民林曉民林曉民林曉民林曉民...
            </div>
            <div class="btnList">
              <div class="helpGrp">
                <div class="tag text-primary" @click="expand = 1">
                  <span class="material-symbols-outlined">
                    sentiment_satisfied
                  </span>
                  <span>有幫助(1)</span>
                </div>
                <div class="tag text-danger" @click="expand = 2">
                  <span class="material-symbols-outlined">
                    sentiment_dissatisfied
                  </span>
                  <span>沒有幫助(1)</span>
                </div>
              </div>
              <div class="btnGrp">
                <v-dialog class="dialogCard contentment">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      color="success"
                      class="text-white"
                      variant="flat"
                      v-bind="activatorProps"
                      >滿意度調查:滿意
                    </v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-card-title>
                        <div class="title">
                          <span>滿意度調查</span>
                          <v-btn variant="text" class="btn_icon">
                            <span
                              class="material-symbols-outlined"
                              @click="isActive.value = false"
                            >
                              close
                            </span></v-btn
                          >
                        </div>
                      </v-card-title>
                      <v-card-text>
                        <ul>
                          <li><span>讀者姓名：</span>林曉民</li>
                          <li>
                            <span>滿意度回饋：</span
                            ><span class="text-success">滿意</span>
                          </li>
                          <li><span>訊息：</span>無</li>
                        </ul>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn class="btn_icon bg-primary" color="#fff">
                          確認
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>

                <v-dialog class="dialogCard contentment">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn color="danger" variant="flat" v-bind="activatorProps"
                      >滿意度調查:不滿意
                    </v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-card-title>
                        <div class="title">
                          <span>滿意度調查</span>
                          <v-btn variant="text" class="btn_icon">
                            <span
                              class="material-symbols-outlined"
                              @click="isActive.value = false"
                            >
                              close
                            </span></v-btn
                          >
                        </div>
                      </v-card-title>
                      <v-card-text>
                        <ul>
                          <li><span>讀者姓名：</span>林曉民</li>
                          <li>
                            <span>滿意度回饋：</span
                            ><span class="text-danger">不滿意</span>
                          </li>
                          <li><span>訊息：</span>無</li>
                        </ul>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn class="btn_icon bg-primary" color="#fff">
                          確認
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <v-btn variant="flat" color=" disable" disabled
                  >滿意度調查:未填寫
                </v-btn>
                <v-btn
                  prepend-icon="mdi-magnify"
                  color=" disable"
                  variant="outlined"
                  @click="expand = 3"
                  >搜尋
                </v-btn>
              </div>
            </div>
            <!-- 有幫助 expand-transition start -->
            <v-expand-transition>
              <div class="searchGrp" v-show="expand === 1">
                <div class="d-flex select justify-center align-center">
                  <div class="text">有幫助回答( <span>1</span> /3)</div>
                  <div class="grp">
                    <v-btn
                      variant="text"
                      size="sm"
                      class="btn"
                      color="neutral20"
                    >
                      <span class="material-symbols-outlined">
                        keyboard_control_key
                      </span>
                    </v-btn>
                    <v-btn
                      variant="text"
                      size="sm"
                      class="btn"
                      color="neutral20"
                      disabled
                    >
                      <span class="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                    </v-btn>
                  </div>
                </div>
                <v-btn variant="text" class="iconBtn" @click="expand = 0">
                  <span class="material-symbols-outlined"> close </span>
                </v-btn>
              </div>
            </v-expand-transition>
            <!-- 有幫助 expand-transition end -->
            <!-- 沒幫助 expand-transition start -->
            <v-expand-transition>
              <div class="searchGrp" v-show="expand === 2">
                <div class="d-flex select justify-center align-center">
                  <div class="text">沒幫助回答( <span>1</span> /3)</div>
                  <div class="grp">
                    <v-btn
                      variant="text"
                      size="sm"
                      class="btn"
                      color="neutral20"
                    >
                      <span class="material-symbols-outlined">
                        keyboard_control_key
                      </span>
                    </v-btn>
                    <v-btn
                      variant="text"
                      size="sm"
                      class="btn"
                      color="neutral20"
                      disabled
                    >
                      <span class="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                    </v-btn>
                  </div>
                </div>
                <v-btn variant="text" class="iconBtn" @click="expand = 0">
                  <span class="material-symbols-outlined"> close </span>
                </v-btn>
              </div>
            </v-expand-transition>
            <!-- 沒幫助 expand-transition end -->
            <!-- 搜尋 expand-transition start -->
            <v-expand-transition>
              <div class="searchGrp" v-show="expand === 3">
                <div class="d-flex select">
                  <div class="inputComponent">
                    <div class="inputSelect" v-click-outside="onClickOutside">
                      <v-text-field
                        label="請輸入關鍵字"
                        density="compact"
                        append-inner-icon="mdi-magnify"
                        single-line
                        variant="outlined"
                        hide-details="auto"
                        @click="expand3 = true"
                      ></v-text-field>
                    </div>
                    <v-expand-transition>
                      <div class="inputContent elevation-4" v-show="expand3">
                        <ul>
                          <li v-for="i in 5" :key="i">
                            <div class="title">系統</div>
                            <div class="subtitle">
                              對話 <span>滾球</span>對話對話對話對話對話對話對話
                            </div>
                          </li>
                        </ul>
                      </div>
                    </v-expand-transition>
                  </div>
                  <div class="text">( <span>1</span> /3)</div>
                  <div class="grp d-flex">
                    <v-btn
                      variant="text"
                      size="sm"
                      class="btn"
                      color="neutral20"
                    >
                      <span class="material-symbols-outlined">
                        keyboard_control_key
                      </span>
                    </v-btn>
                    <v-btn
                      variant="text"
                      size="sm"
                      class="btn"
                      color="neutral20"
                      disabled
                    >
                      <span class="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                    </v-btn>
                  </div>
                </div>
                <v-btn variant="text" class="iconBtn" @click="expand = 0">
                  <span class="material-symbols-outlined"> close </span>
                </v-btn>
              </div>
            </v-expand-transition>
            <!-- 搜尋 expand-transition end -->
          </div>
          <div class="msgGrp">
            <div class="">
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    您好！歡迎來到對話測試～<br />
                    您可以輸入問題，我將使用您建立的問答集資料來回覆您，您可以藉此來測試問答集的完整度
                    😀
                  </p>
                </div>
              </div>
              <div class="helpInfo">
                <div class="">
                  <div class="tag text-primary">
                    <span class="material-symbols-outlined">
                      sentiment_satisfied
                    </span>
                    <span>有幫助</span>
                  </div>
                </div>
              </div>

              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    可以委託他人借還書，但需要提供您的借閱證或身分證明文件，以及委託書。部分圖書館可能需要事先申請或設定委託人。
                  </p>
                  <div class="tagInfo">
                    <div class="tag">資料來源：文件上傳</div>
                    <a class="link" href="">
                      <span class="material-symbols-outlined icon">
                        attach_file
                      </span>
                      <span>圖書館借閱規則.pdf</span>
                    </a>
                  </div>
                  <v-card class="infoCard elevation-0">
                    <p>
                      <span> 委託借還書規則</span>
                      讀者可委託他人代為借閱或歸還書籍，但須提供以下資料：
                    </p>
                    <ul>
                      <li>1.借閱證或有效身分證明文件（如身分證、學生證等）</li>
                      <li>2.委託書（須載明委託人與受託人資訊）</li>
                    </ul>
                    <p>
                      請注意，部分圖書館可能需事先申請或設定委託人，詳情請參閱各館規定或洽詢館方人員。
                    </p>
                  </v-card>
                </div>
              </div>
              <div class="helpInfo">
                <div class="">
                  <div class="tag text-danger">
                    <span class="material-symbols-outlined">
                      sentiment_dissatisfied
                    </span>
                    <span>沒有幫助</span>
                  </div>
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    這個問題超出我的知識範圍
                    😅，建議您聯繫專人，他們會提供更詳細的解答！
                  </p>
                  <div class="tagInfo">
                    <div class="tag not">未有對應資料</div>
                    <v-card class="infoCard elevation-0">
                      <p>
                        原始文件未尋找到相對應的資料，您可以選擇手動新增此問答。
                      </p>
                      <div class="d-flex justify-end">
                        <v-btn class="elevation-0">新增問答</v-btn>
                      </div>
                    </v-card>
                  </div>
                </div>
              </div>
              <div class="dialogCard">
                <div class="item">
                  <p>
                    您好！歡迎來到對話測試～<br />
                    您可以輸入問題，我將使用您建立的問答集資料來回覆您，您可以藉此來測試問答集的完整度
                    😀
                  </p>
                </div>
                <div class="photo">
                  <img src="~@/assets/images/UserIcon.svg" alt="" />
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>Q:委託他人代為借閱或歸還書籍需要什麼證件？</p>
                  <span class="text"> 請輸入此問題的答案 </span>
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <span class="text"> 請輸入此問題的答案 </span>
                  <p>Q:委託他人代為借閱或歸還書籍需要什麼證件？</p>
                  <p>
                    A:借閱證或有效身分證明文件（如身分證、學生證等）和委託書（須載明委託人與受託人資訊）
                  </p>
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    您好！歡迎來到對話測試～<br />
                    您可以輸入問題，我將使用您建立的問答集資料來回覆您，您可以藉此來測試問答集的完整度
                    😀
                  </p>
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    您好！歡迎來到對話測試～<br />
                    您可以輸入問題，我將使用您建立的問答集資料來回覆您，您可以藉此來測試問答集的完整度
                    😀
                  </p>
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    您好！歡迎來到對話測試～<br />
                    您可以輸入問題，我將使用您建立的問答集資料來回覆您，您可以藉此來測試問答集的完整度
                    😀
                  </p>
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    您好！歡迎來到對話測試～<br />
                    您可以輸入問題，我將使用您建立的問答集資料來回覆您，您可以藉此來測試問答集的完整度
                    😀
                  </p>
                </div>
              </div>
              <div class="dialogCard">
                <div class="photo">
                  <img src="~@/assets/images/UserAvatar.svg" alt="" />
                </div>
                <div class="item">
                  <p>
                    您好！歡迎來到對話測試～<br />
                    您可以輸入問題，我將使用您建立的問答集資料來回覆您，您可以藉此來測試問答集的完整度
                    😀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedValue: "",
    activeIndex: 1,
    expand: null,
    // expand1: false,
    expand3: false,
    expand4: false,
    isActive: false, // 是否點擊輸入框
    keyword: "", // 輸入關鍵字
    items: [
      {
        title:
          "讀者名稱讀者名稱讀者名稱讀者名讀者名稱讀者名稱讀者名稱讀者稱讀者名稱讀者名讀者名稱讀者名稱讀者名稱讀者名",
        subtitle: "對話 <span>關鍵字</span> 對話對話對話對話對話對話對",
      },
      {
        title: "系統2",
        subtitle: "對話 <span>關鍵字</span>  對話對話對話對話對話對話對",
      },
      {
        title: "系統3",
        subtitle: "對話 <span>關鍵字 關鍵字</span>  對話對話對話對話對話對話對",
      },
    ],
  }),
  methods: {
    onClickOutside() {
      this.expand3 = false;
    },
    onClickOutside2() {
      this.expand4 = false;
    },
    onBack() {
      this.isActive = false;
      this.keyword = "";
    },
    onSearch() {
      if (this.keyword.trim() === "") return;

      // 這邊寫你的搜尋邏輯
    },
  },
  mounted() {},
  components: {},
};
</script>
