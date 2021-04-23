import { createApp } from "vue"
import App from "./App.vue"
import { router } from "Invoke/.invoke/router"
import ElementPlus from "element-plus"
import "element-plus/lib/theme-chalk/index.css"
import api from "./api/index"

const app = createApp(App).use(router).use(ElementPlus)
app.mount("#app")

// 配置全局属性
app.config.globalProperties.$api = api
