<template>
  <div class="loginPage">
    <div>
      <div class="loginCard">
        <v-img
          aspect-ratio="1/1"
          class="logo"
          cover
          src="~@/assets/images/login_logo.svg"
        ></v-img>
        <h2 class="loginTitle">AI諮詢服務系統</h2>
        <v-form>
          <label class="title" for=""> 帳號 </label>
          <v-text-field
            label="請輸入帳號"
            density="compact"
            single-line
            variant="outlined"
            hide-details="auto"
          ></v-text-field>
          <label class="title" for=""> 帳號 </label>
          <v-text-field
            label="請輸入密碼"
            :append-inner-icon="
              visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
            "
            :type="visible ? 'text' : 'password'"
            density="compact"
            variant="outlined"
            single-line
            hide-details="auto"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <div class="checkGrp">
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || '']"
              label="記住我？"
              required
              hide-details=""
            ></v-checkbox>
            <a class="forgotlink">忘記密碼</a>
          </div>
          <v-btn type="submit" block variant="flat" class="loginBtn"
            >登入</v-btn
          >
        </v-form>
        <ul class="text-center infolist">
          <li>Copyright © 2025 凌網科技股份有限公司</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    checkbox: false,
    theme: "",
    dark: false,
  }),

  methods: {
    cardAnimate() {
      const th = this.$refs.loginCard;
      gsap.fromTo(
        th,
        {
          y: 50,
          opacity: 0.5,
        },
        { y: 0, duration: 1, opacity: 1 }
      );
    },
    readCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
    createCookie(name, value, days) {
      let _expires;
      const _date = new Date();
      if (days) {
        _date.setTime(_date.getTime() + days * 24 * 60 * 60 * 1000);
        _expires = "; expires=" + _date.toGMTString();
      } else {
        _expires = "";
      }
      document.cookie = name + "=" + value + _expires + "; path=/";
    },
    changeTheme(color) {
      let th = this.$vuetify.theme.global;
      th.name = color;
      this.theme = color;
      this.themeDark = false;
      this.createCookie("Theme", `${color}`, 356);
    },
    themeInit() {
      this.theme = this.readCookie("Theme") || null;
      if (this.theme == null) {
        this.theme = "default";
        this.themeDark = false;
      }
      if (this.theme == "dark") {
        this.themeDark = true;
      }
      this.changeTheme(this.theme);
    },
  },
  mounted() {
    // this.cardAnimate();
    this.themeInit();
  },
};
</script>
