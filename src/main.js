import './assets/main.css'

import { createApp } from "vue";
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import router from "./router";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.use(pinia)
app.mount('#app');
