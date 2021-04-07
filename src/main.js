import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import {router} from "@/views/.invoke/router";
import api from './api/index';

const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// 配置全局属性
app.config.globalProperties.$api = api;
