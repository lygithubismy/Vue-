import Vue from 'vue'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import en from '../common/lang/eu'
import ch from '../common/lang/ch'
// import Cookie from '../common/cookie/cookie'
const messages = {
    'en-us':en, //英文文件包
    'zh-cn':ch,//中文文件包
}
const i18n = new VueI18n({
    
    // locale: getCookie('PLAY_LANG','zh') ,// 默认识别
    locale:'zh-cn',
    messages
})
export default i18n