<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <router-view />
    
    <!-- {{$t('message')}} -->
    <span>{{$t('text.globalCurrency')}}</span>
    <p>{{$t("title.message")}}</p>
    <el-button @click.native ="changeLanguage">阿拉伯语</el-button>
    <el-button @click.native ="changeLanguage">中文</el-button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // 实现切换语言功能按钮
    changeLanguage() {
      // if (this.$i18n.locale == "en-us") {
      //   this.$i18n.locale = "zh-cn";
      // } else {
      //   this.$i18n.locale = "en-us";
      // }
      this.$i18n.locale = this.$i18n.locale === 'en-us'?'zh-cn':'en-us'
    }
//     toggleLang(lang) {
//       if(lang == 'zh-cn'){
//         localStorage.setItem('locale', 'zh-cn')
//         this.$i18n.locale = localStorage.getItem('locale')
//         this.$message({
//           message: '切换为中文！',
//           type: 'success'
//         })
//       } else if (lang == 'en-us') {
//         localStorage.setItem('locale', 'en-us')
//         this.$i18n.locale = localStorage.getItem('locale')
//         this.$message({
//           message: 'Switch to English!',
//           type: 'success'
//       })
// }
//   }
  },
  // 记录用户操作语言
  
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
