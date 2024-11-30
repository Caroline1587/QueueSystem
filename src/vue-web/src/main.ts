import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'
// import store from './store'


import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import './style/style.css'

const app = createApp(App);

app.use(createPinia());
// app.use(store)
app.use(router)

app.use(ElementPlus)

const rootValue = 16
const rootWidth = 390//设计稿宽度
const deviceWidth = document.documentElement.clientWidth//用户屏幕宽度
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'



app.mount('#app')